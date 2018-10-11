import { graphql, requestSubscription } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../Environment';

const subscription = graphql`
  subscription ProductSubscription {
    ProductAdded {
      productEdge {
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
`;

const subscribe = () => {
  requestSubscription(environment, {
    subscription,
    variables: {},
    updater: (store) => {
      // Get the notification
      const rootField = store.getRootField('ProductAdded');
      console.log('====>>', rootField);

      const productEdge = rootField.getLinkedRecord('productEdge');
      const newProduct = productEdge.getLinkedRecord('node');
      console.log(newProduct);

      // Add it to a connection
      const record = store.getRoot();
      const products = ConnectionHandler.getConnection(record, 'ListProducts_products');

      if (products) {
        const newEdge = ConnectionHandler.createEdge(store, products, newProduct, 'productEdge');
        ConnectionHandler.insertEdgeBefore(products, newEdge);
      }
    },
  });
};

export default subscribe;
