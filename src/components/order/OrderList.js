// @flow
import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import { BRL } from '../common/Money';

import createQueryRenderer from '../../relay/createQueryRenderer';
import OrderAddMutation from './OrderAddMutation';
import OrderItemAddMutation from './OrderItemAddMutation';
import OrderItemRemoveMutation from './OrderItemRemoveMutation';

const CardStyled = styled(Card)`
  flex: 1;
  margin-bottom: 10px;
`;

const CardActionAreaStyled = styled(CardActionArea)`
  flex: 1;
  width: 100%;
`;

const CardContentStyled = styled(CardContent)`
  width: 100%;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const ProductImage = styled(CardMedia)`
  height: 200px;
`;

const TextFieldStyled = styled(TextField)`
  width: 60px;
`;

const ItemLink = ({ to, children }) => (
  <Route
    path={to}
    children={() => (
      <LinkStyled to={to}>
        <CardActionAreaStyled>{children}</CardActionAreaStyled>
      </LinkStyled>
    )}
  />
);

type Props = {};

type State = {
  snackBarOpen: boolean,
  snackBarMessage: string,
};

class OrderList extends React.Component<Props, State> {
  state = {
    qtyInput: 1,
    snackBarOpen: false,
    snackBarMessage: '',
  };

  onCompleted = res => {
    const response = res && res.OrderItemAddMutation;

    if (response && response.error) {
      this.handleSnackBar('Erro na operação!');
    } else {
      this.handleSnackBar('Operação efetuada com sucesso!');
    }
  };

  onError = () => {
    this.handleSnackBar('Erro na operação!');
  };

  handleItemPurchase = async ({ id }, orders) => {
    const { qtyInput } = this.state;
    OrderItemAddMutation.commit(
      { orderId: orders.edges[0].node.id, product: id, qty: qtyInput },
      this.onCompleted,
      this.onError,
    );
  };

  handleItemRemove = async ({ id }, orders) => {
    OrderItemRemoveMutation.commit(
      { orderId: orders.edges[0].node.id, product: id },
      this.onCompleted,
      this.onError,
    );
  };

  handleSnackBar = message => this.setState({ snackBarOpen: true, snackBarMessage: message });

  handleSnackBarClose = () => this.setState({ snackBarOpen: false });

  loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
    });

    this.props.relay.refetch(refetchVariables);
  };

  ItemCard = (orderItem, orders, handleItemPurchase) => (
    <CardStyled key={`item-${orderItem.product.id}`}>
      <ItemLink to={`/product/details/${orderItem.product.id}`}>
        <ProductImage image={orderItem.product.picture} title="item" />
        <CardContentStyled>
          <Typography gutterBottom variant="headline" component="h2">
            {orderItem.product.description}
          </Typography>
          <Typography component="p">{BRL(orderItem.product.value).format(true)}</Typography>
        </CardContentStyled>
      </ItemLink>
      <CardActions>
        <TextFieldStyled
          label="Quantidade"
          type="number"
          defaultValue={1}
          inputProps={{ min: '1', step: '1' }}
          onChange={event => this.setState({ qtyInput: event.target.value })}
        />
        <Button
          size="small"
          color="primary"
          onClick={() => this.handleItemPurchase(orderItem.product, orders)}
        >
          Adicionar
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => this.handleItemRemove(orderItem.product, orders)}
        >
          Remover
        </Button>
        <span>{`Quantidade adicionada: ${orderItem.qty}`}</span>
      </CardActions>
    </CardStyled>
  );

  render() {
    const { orders } = this.props.query;
    const { snackBarOpen, snackBarMessage } = this.state;
    const orderItems = orders.edges.map(({ node }) => node.orderItems);

    return (
      <div>
        {orderItems[0] &&
          orderItems[0].map(item => this.ItemCard(item, orders, this.handleItemPurchase))}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={snackBarOpen}
          onClose={this.handleSnackBarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackBarMessage}</span>}
          autoHideDuration={6000}
        />
      </div>
    );
  }
}

const OrderListRefetchContainer = createRefetchContainer(
  OrderList,
  {
    query: graphql`
      fragment OrderList_query on Query {
        orders(first: 1, active: true) @connection(key: "OrderList_orders", filters: []) {
          edges {
            node {
              id
              orderItems {
                orderId
                product {
                  id
                  description
                  value
                  qty
                  picture
                }
                qty
                total
              }
              qty
              total
              active
            }
          }
        }
      }
    `,
  },
  graphql`
    query OrderListRefetchQuery {
      ...OrderList_query
    }
  `,
);

export default createQueryRenderer(OrderListRefetchContainer, {
  query: graphql`
    query OrderListQuery {
      ...OrderList_query
    }
  `,
});
