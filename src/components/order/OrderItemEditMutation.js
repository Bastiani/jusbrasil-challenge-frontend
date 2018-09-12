// @flow
import { commitMutation, graphql } from 'react-relay';

import Environment from '../../relay/environment';

import type {
  OrderItemEditMutationVariables,
  OrderItemEditMutationResponse,
} from './__generated__/OrderItemEditMutation.graphql.js';

const mutation = graphql`
  mutation OrderItemEditMutation($input: OrderItemEditInput!) {
    OrderItemEditMutation(input: $input) {
      orderEdge {
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

const commit = (
  input: $PropertyType<OrderItemEditMutationVariables, 'input'>,
  onCompleted: OrderItemEditMutationResponse => void,
  onError: (error: Error) => void,
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
