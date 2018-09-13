/**
 * @flow
 * @relayHash 94f092a811fe05c1c90bd5c9900e2617
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderItemRemoveInput = {
  orderId: string,
  product: string,
  clientMutationId?: ?string,
};
export type OrderItemRemoveMutationVariables = {|
  input: OrderItemRemoveInput
|};
export type OrderItemRemoveMutationResponse = {|
  +OrderItemRemoveMutation: ?{|
    +orderEdge: ?{|
      +__typename: string,
      +cursor: string,
      +node: {|
        +id: string,
        +orderItems: ?$ReadOnlyArray<?{|
          +product: {|
            +description: string
          |},
          +qty: number,
          +total: number,
        |}>,
        +qty: ?number,
        +total: ?number,
        +active: boolean,
      |},
    |},
    +error: ?string,
  |}
|};
export type OrderItemRemoveMutation = {|
  variables: OrderItemRemoveMutationVariables,
  response: OrderItemRemoveMutationResponse,
|};
*/


/*
mutation OrderItemRemoveMutation(
  $input: OrderItemRemoveInput!
) {
  OrderItemRemoveMutation(input: $input) {
    orderEdge {
      __typename
      cursor
      node {
        id
        orderItems {
          product {
            description
            id
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "OrderItemRemoveInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "OrderItemRemoveInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "qty",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrderItemRemoveMutation",
  "id": null,
  "text": "mutation OrderItemRemoveMutation(\n  $input: OrderItemRemoveInput!\n) {\n  OrderItemRemoveMutation(input: $input) {\n    orderEdge {\n      __typename\n      cursor\n      node {\n        id\n        orderItems {\n          product {\n            description\n            id\n          }\n          qty\n          total\n        }\n        qty\n        total\n        active\n      }\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrderItemRemoveMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderItemRemoveMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderItemRemovePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "orderEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "OrderEdge",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Order",
                "plural": false,
                "selections": [
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "orderItems",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OrderItem",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "product",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Product",
                        "plural": false,
                        "selections": [
                          v5
                        ]
                      },
                      v6,
                      v7
                    ]
                  },
                  v6,
                  v7,
                  v8
                ]
              }
            ]
          },
          v9
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrderItemRemoveMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderItemRemoveMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderItemRemovePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "orderEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "OrderEdge",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Order",
                "plural": false,
                "selections": [
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "orderItems",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OrderItem",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "product",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Product",
                        "plural": false,
                        "selections": [
                          v5,
                          v4
                        ]
                      },
                      v6,
                      v7
                    ]
                  },
                  v6,
                  v7,
                  v8
                ]
              }
            ]
          },
          v9
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de9c38e1e4f04b373bf02bccc56e327c';
module.exports = node;
