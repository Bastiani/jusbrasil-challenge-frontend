// @flow
import { commitMutation, graphql } from 'react-relay';

import Environment from '../../Environment';

import type {
  OrderItemAddMutationVariables,
  OrderItemAddMutationResponse,
} from './__generated__/OrderItemAddMutation.graphql.js';

const mutation = graphql`
  mutation OrderItemAddMutation($input: OrderItemAddInput!) {
    OrderItemAddMutation(input: $input) {
      order {
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
      error
    }
  }
`;

const commit = (
  input: $PropertyType<OrderItemAddMutationVariables, 'input'>,
  onCompleted: OrderItemAddMutationResponse => void,
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
