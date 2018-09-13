// @flow
import { commitMutation, graphql } from 'react-relay';

import Environment from '../../Environment';

import type {
  OrderItemRemoveMutationVariables,
  OrderItemRemoveMutationResponse,
} from './__generated__/OrderItemRemoveMutation.graphql.js';

const mutation = graphql`
  mutation OrderItemRemoveMutation($input: OrderItemRemoveInput!) {
    OrderItemRemoveMutation(input: $input) {
      error
      orderEdge {
        node {
          id
          orderItems {
            product {
              description
            }
          }
          qty
          total
          active
        }
      }
    }
  }
`;

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
    onCompleted,
    onError,
  });
};

export default { commit };
