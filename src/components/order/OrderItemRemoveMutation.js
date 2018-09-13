// @flow
import { commitMutation, graphql } from 'react-relay';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';

import Environment from '../../Environment';

import type {
  OrderItemRemoveMutationVariables,
  OrderItemRemoveMutationResponse,
} from './__generated__/OrderItemRemoveMutation.graphql.js';

const mutation = graphql`
  mutation OrderItemRemoveMutation($input: OrderItemRemoveInput!) {
    OrderItemRemoveMutation(input: $input) {
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

  const conn = ConnectionHandler.getConnection(parentProxy, 'App_orders');

  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

const commit = (
  input: $PropertyType<OrderItemRemoveMutationVariables, 'input'>,
  onCompleted: OrderItemRemoveMutationResponse => void,
  onError: (error: string) => void,
) => {
  commitMutation(Environment, {
    mutation,
    variables: {
      input,
    },
    updater: store => {
      const payload = store.getRootField('OrderItemRemoveMutation');
      const newEdge = payload.getLinkedRecord('orderEdge');

      sharedUpdater(store, ROOT_ID, newEdge);
    },
    onCompleted,
    onError,
  });
};

export default { commit };
