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
      # orders(first: 1, active: true) @connection(key: "App_orders", filters: []) {
      #   edges {
      #     node {
      #       id
      #       qty
      #       total
      #     }
      #   }
      # }
      # error
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
  input: $PropertyType<OrderItemEditMutationVariables, 'input'>,
  onCompleted: OrderItemEditMutationResponse => void,
  onError: (error: string) => void,
) => {
  commitMutation(Environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store, data) => {
      console.log('====== STORE', store);

      const { orderId } = input;
      const payload = store.get('client:root:orders(active:true,first:1):edges:0');
      const comment = payload.getLinkedRecord('node');
      console.log('====>>', data);

      console.log(payload, comment);
      console.log('=====', comment.getValue('total'));

      const post = store.get(orderId);
      console.log(post.getDataID());
      console.log(post.getValue('qty'), post.getValue('total'));
      post.setValue(2000, 'total');

      console.log('=====================================');

      const post2 = store.get('client:root:orders(active:true,first:1):edges:0');
      console.log(post2.getDataID());
      console.log(post2.getValue('qty'), post2.getValue('total'));

      const post3 = store.getRoot();
      const linkedRecord = post3.getLinkedRecord('node');
      console.log('==========client:root', post3, linkedRecord);

      // const order1 = post3.getLinkedRecord('node');
      // console.log(order1.getDataID());
      // console.log(order1.getValue('qty'), order1.getValue('total'));

      // const postComments = post.getLinkedRecords('comments') || [];
      // const newPostComments = [...postComments, comment];
      // post.setLinkedRecords(newPostComments, 'comments');
      // post.setValue(post.getValue('commentCount') + 1, 'commentCount');
    },
    onCompleted,
    onError,
  });
};

export default { commit };
