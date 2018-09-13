// @flow
import { commitMutation, graphql } from 'react-relay';

import Environment from '../../Environment';

import type {
  OrderCloseMutationVariables,
  OrderCloseMutationResponse,
} from './__generated__/OrderCloseMutation.graphql.js';

const mutation = graphql`
  mutation OrderCloseMutation($input: OrderCloseInput!) {
    OrderCloseMutation(input: $input) {
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
  input: $PropertyType<OrderCloseMutationVariables, 'input'>,
  onCompleted: OrderCloseMutationResponse => void,
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
