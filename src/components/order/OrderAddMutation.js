// @flow
import { commitMutation, graphql } from 'react-relay';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';

import Environment from '../../Environment';

import type {
  OrderAddMutationVariables,
  OrderAddMutationResponse,
} from './__generated__/OrderAddMutation.graphql.js';

const mutation = graphql`
  mutation OrderAddMutation($input: OrderAddInput!) {
    OrderAddMutation(input: $input) {
      orderEdge {
        __typename
        cursor
        node {
          id
          orderItems {
            product {
              description
            }
            qty
            total
          }
          qty
          total
          active
        }
      }
      error
    }
  }
`;

function sharedUpdater(store, parentId, newEdge) {
  const parentProxy = store.get(parentId);

  // Get the user's Todo List using ConnectionHandler helper
  const conn = ConnectionHandler.getConnection(
    parentProxy,
    'App_orders', // This is the connection identifier, defined here
    // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
  );

  // Insert the new todo into the Todo List connection
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

const commit = (
  input: $PropertyType<OrderAddMutationVariables, 'input'>,
  onCompleted: OrderAddMutationResponse => void,
  onError: (error: string) => void,
) => {
  commitMutation(Environment, {
    mutation,
    variables: {
      input,
    },
    updater: store => {
      // Get the payload returned from the server
      const payload = store.getRootField('OrderAddMutation');

      // Get the edge of the newly created Todo record
      const newEdge = payload.getLinkedRecord('orderEdge');

      // Add it to the user's todo list
      sharedUpdater(store, ROOT_ID, newEdge);
    },
    onCompleted,
    onError,
  });
};

export default { commit };
