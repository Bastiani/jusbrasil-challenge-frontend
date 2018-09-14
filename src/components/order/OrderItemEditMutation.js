// @flow
import { commitMutation, graphql } from 'react-relay';

import Environment from '../../Environment';

import type {
  OrderItemEditMutationVariables,
  OrderItemEditMutationResponse,
} from './__generated__/OrderItemEditMutation.graphql.js';

const mutation = graphql`
  mutation OrderItemEditMutation($input: OrderItemEditInput!) {
    OrderItemEditMutation(input: $input) {
      orders(first: 1, active: true) @connection(key: "App_orders", filters: []) {
        edges {
          node {
            id
            qty
            total
          }
        }
      }
      error
    }
  }
`;

const commit = (
  input: $PropertyType<OrderItemEditMutationVariables, 'input'>,
  onCompleted: OrderItemEditMutationResponse => void,
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
