/**
 * @flow
 * @relayHash 81418dcc584539d2e5708a49264a86d6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderItemEditInput = {
  orderId: string,
  product: string,
  qty: number,
  clientMutationId?: ?string,
};
export type OrderItemEditMutationVariables = {|
  input: OrderItemEditInput
|};
export type OrderItemEditMutationResponse = {|
  +OrderItemEditMutation: ?{|
    +orders: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
          +qty: ?number,
          +total: ?number,
        |}
      |}>
    |},
    +error: ?string,
  |}
|};
export type OrderItemEditMutation = {|
  variables: OrderItemEditMutationVariables,
  response: OrderItemEditMutationResponse,
|};
*/


/*
mutation OrderItemEditMutation(
  $input: OrderItemEditInput!
) {
  OrderItemEditMutation(input: $input) {
    orders(first: 1, active: true) {
      edges {
        node {
          id
          qty
          total
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "OrderItemEditInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "OrderItemEditInput!"
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "OrderEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Order",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "qty",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "total",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "active",
    "value": true,
    "type": "Boolean"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 1,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrderItemEditMutation",
  "id": null,
  "text": "mutation OrderItemEditMutation(\n  $input: OrderItemEditInput!\n) {\n  OrderItemEditMutation(input: $input) {\n    orders(first: 1, active: true) {\n      edges {\n        node {\n          id\n          qty\n          total\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    error\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "OrderItemEditMutation",
          "orders"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "OrderItemEditMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderItemEditMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderItemEditPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "orders",
            "name": "__App_orders_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "OrderConnection",
            "plural": false,
            "selections": v2
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrderItemEditMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderItemEditMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderItemEditPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "orders",
            "storageKey": "orders(active:true,first:1)",
            "args": v4,
            "concreteType": "OrderConnection",
            "plural": false,
            "selections": v2
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "orders",
            "args": v4,
            "handle": "connection",
            "key": "App_orders",
            "filters": []
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3d26aef44be98d6db6cb5406f131543c';
module.exports = node;
