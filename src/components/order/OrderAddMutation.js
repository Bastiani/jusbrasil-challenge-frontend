// @flow
import { commitMutation, graphql } from 'react-relay';

import Environment from '../../Environment';

import type {
  OrderAddMutationVariables,
  OrderAddMutationResponse,
} from './__generated__/OrderAddMutation.graphql.js';

const mutation = graphql`
  mutation OrderAddMutation($input: OrderAddInput!) {
    OrderAddMutation(input: $input) {
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
  input: $PropertyType<OrderAddMutationVariables, 'input'>,
  onCompleted: OrderAddMutationResponse => void,
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
