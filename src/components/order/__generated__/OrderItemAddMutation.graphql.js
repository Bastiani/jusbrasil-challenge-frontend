/**
 * @flow
 * @relayHash 535e9d5a7cf362ada2aa4e635ec41bcb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderItemAddInput = {
  orderId: string,
  product: string,
  qty: number,
  clientMutationId?: ?string,
};
export type OrderItemAddMutationVariables = {|
  input: OrderItemAddInput
|};
export type OrderItemAddMutationResponse = {|
  +OrderItemAddMutation: ?{|
    +orderEdge: ?{|
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
      |}
    |},
    +error: ?string,
  |}
|};
export type OrderItemAddMutation = {|
  variables: OrderItemAddMutationVariables,
  response: OrderItemAddMutationResponse,
|};
*/


/*
mutation OrderItemAddMutation(
  $input: OrderItemAddInput!
) {
  OrderItemAddMutation(input: $input) {
    orderEdge {
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
    "type": "OrderItemAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "OrderItemAddInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "qty",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrderItemAddMutation",
  "id": null,
  "text": "mutation OrderItemAddMutation(\n  $input: OrderItemAddInput!\n) {\n  OrderItemAddMutation(input: $input) {\n    orderEdge {\n      node {\n        id\n        orderItems {\n          product {\n            description\n            id\n          }\n          qty\n          total\n        }\n        qty\n        total\n        active\n      }\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrderItemAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderItemAddMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderItemAddPayload",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Order",
                "plural": false,
                "selections": [
                  v2,
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
                          v3
                        ]
                      },
                      v4,
                      v5
                    ]
                  },
                  v4,
                  v5,
                  v6
                ]
              }
            ]
          },
          v7
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrderItemAddMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderItemAddMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderItemAddPayload",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Order",
                "plural": false,
                "selections": [
                  v2,
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
                          v3,
                          v2
                        ]
                      },
                      v4,
                      v5
                    ]
                  },
                  v4,
                  v5,
                  v6
                ]
              }
            ]
          },
          v7
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29c8f4d0cbfd3b495b133ec7d2c59b6d';
module.exports = node;
