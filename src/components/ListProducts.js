import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import createQueryRenderer from '../relay/createQueryRenderer';

const CardStyled = styled(Card)`
  && {
    flex: 1;
    width: 500px;
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

const ItemCard = product => (
  <CardStyled>
    <CardActionAreaStyled>
      <CardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContentStyled>
        <Typography gutterBottom variant="headline" component="h2">
          Lizard
        </Typography>
        <Typography component="p">{product.description}</Typography>
      </CardContentStyled>
    </CardActionAreaStyled>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </CardStyled>
);

class ListProducts extends React.Component {
  render() {
    const { products } = this.props.query;
    return <div>{products.edges.map(({ node }) => ItemCard(node))}</div>;
  }
}

const ListProductsRefetchContainer = createRefetchContainer(
  ListProducts,
  {
    query: graphql`
      fragment ListProducts_query on Query
        @argumentDefinitions(first: { type: "Int", defaultValue: 100 }) {
        products(first: $first) @connection(key: "ListProducts_products", filters: []) {
          edges {
            node {
              id
              _id
              description
              value
              qty
              picture
              active
            }
          }
        }
      }
    `,
  },
  graphql`
    query ListProductsRefetchQuery($first: Int) {
      ...ListProducts_query
    }
  `,
);

export default createQueryRenderer(ListProductsRefetchContainer, {
  query: graphql`
    query ListProductsQuery($first: Int) {
      ...ListProducts_query
    }
  `,
  variables: {
    first: 10,
  },
});
