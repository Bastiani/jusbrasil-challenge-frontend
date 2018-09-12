// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import createQueryRenderer from '../../relay/createQueryRenderer';
import OrderAddMutation from '../order/OrderAddMutation';
import OrderItemAddMutation from '../order/OrderItemAddMutation';

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

const ProductImage = styled(CardMedia)`
  height: 200px;
`;

const TextFieldStyled = styled(TextField)`
  width: 60px;
`;

type Props = {};

type State = {
  snackBarOpen: boolean,
  snackBarMessage: string,
};

class ProductDetails extends React.Component<Props, State> {
  state = {
    qtyInput: 1,
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
    const { qtyInput } = this.state;
    console.log(qtyInput);

    !orders.edges[0]
      ? OrderAddMutation.commit({ product: id, qty: qtyInput }, this.onCompleted, this.onError)
      : OrderItemAddMutation.commit(
          { orderId: orders.edges[0].node.id, product: id, qty: qtyInput },
          this.onCompleted,
          this.onError,
        );
  };

  handleSnackBar = message => this.setState({ snackBarOpen: true, snackBarMessage: message });

  handleSnackBarClose = () => this.setState({ snackBarOpen: false });

  render() {
    const { product, orders } = this.props.query;
    const { snackBarOpen, snackBarMessage } = this.state;

    return (
      <CardStyled>
        <CardActionAreaStyled>
          <ProductImage image={product.picture} title="item" />
          <CardContentStyled>
            <Typography gutterBottom variant="headline" component="h2">
              {product.description}
            </Typography>
            <Typography component="p">{product.value}</Typography>
          </CardContentStyled>
        </CardActionAreaStyled>
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
            onClick={() => this.handleItemPurchase(product, orders)}
          >
            Comprar
          </Button>
        </CardActions>
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
      </CardStyled>
    );
  }
}

const ProductDetailsFragment = createFragmentContainer(ProductDetails, {
  query: graphql`
    fragment ProductDetails_query on Query @argumentDefinitions(id: { type: "ID!" }) {
      orders(first: 1, active: true) @connection(key: "ProductDetails_orders", filters: []) {
        edges {
          node {
            id
          }
        }
      }
      product(id: $id) {
        id
        description
        value
        picture
      }
    }
  `,
});

export default createQueryRenderer(withRouter(ProductDetailsFragment), {
  query: graphql`
    query ProductDetailsQuery($id: ID!) {
      ...ProductDetails_query @arguments(id: $id)
    }
  `,
  queriesParams: ({ match: { params } }) => ({ id: params.id }),
});
