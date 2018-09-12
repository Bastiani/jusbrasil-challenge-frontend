// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';

import createQueryRenderer from '../../relay/createQueryRenderer';
import OrderAddMutation from '../order/OrderAddMutation';
import OrderItemAddMutation from '../order/OrderItemAddMutation';

const CardStyled = styled(Card)`
  && {
    flex: 1;
    margin-bottom: 10px;
  }
`;

const CardActionAreaStyled = styled(CardActionArea)`
  && {
    flex: 1;
    width: 100%;
  }
`;

const CardContentStyled = styled(CardContent)`
  && {
    width: 100%;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const ProductImage = styled(CardMedia)`
  height: 200px;
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

const ItemCard = (product, orders, handleItemPurchase) => (
  <CardStyled key={`item-${product.id}`}>
    <ItemLink to={`/product/details/${product.id}`}>
      <ProductImage image={product.picture} title="item" />
      <CardContentStyled>
        <Typography gutterBottom variant="headline" component="h2">
          {product.description}
        </Typography>
        <Typography component="p">{product.value}</Typography>
      </CardContentStyled>
    </ItemLink>
    <CardActions>
      <Button size="small" color="primary" onClick={() => handleItemPurchase(product, orders)}>
        Adicionar ao carrinho
      </Button>
    </CardActions>
  </CardStyled>
);

type Props = {};

type State = {
  snackBarOpen: boolean,
  snackBarMessage: string,
};

class ListProducts extends React.Component<Props, State> {
  state = {
    snackBarOpen: false,
    snackBarMessage: '',
  };

  onCompleted = res => {
    const response = res && res.OrderItemAddMutation;

    if (response && response.error) {
      this.handleSnackBar('Erro ao adicionar item!');
    } else {
      this.handleSnackBar('Item adicionado com sucesso!');
    }
  };

  onError = () => {
    console.log('error!');
  };

  handleItemPurchase = async ({ id }, orders) => {
    !orders.edges[0]
      ? OrderAddMutation.commit({ product: id, qty: 1 }, this.onCompleted, this.onError)
      : OrderItemAddMutation.commit(
          { orderId: orders.edges[0].node.id, product: id, qty: 1 },
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

  render() {
    const { products, orders } = this.props.query;
    const { snackBarOpen, snackBarMessage } = this.state;
    return (
      <div>
        {products.edges.map(({ node }) => ItemCard(node, orders, this.handleItemPurchase))}
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

const ListOrderContainer = createFragmentContainer(
  ListProducts,
  {
    query: graphql`
      fragment ListProducts_query on Query
        @argumentDefinitions(first: { type: "Int", defaultValue: 1 }) {
        orders(first: 1, active: true) @connection(key: "ListProducts_orders", filters: []) {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  },
  graphql`
    query ListOrderQuery($first: Int) {
      ...ListProducts_query
    }
  `,
);

export default createQueryRenderer(ListOrderContainer, {
  query: graphql`
    query ListProductsQuery($first: Int) {
      ...ListProducts_query
    }
  `,
  variables: {
    first: 1,
  },
});
