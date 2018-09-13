/**
 * @flow
 * @relayHash 02725972152f06df312f7edfa4f64184
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
    +error: ?string,
    +orderEdge: ?{|
      +node: {|
        +id: string,
        +orderItems: ?$ReadOnlyArray<?{|
          +product: {|
            +description: string
          |}
        |}>,
        +qty: ?number,
        +total: ?number,
        +active: boolean,
      |}
    |},
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
    error
    orderEdge {
      node {
        id
        orderItems {
          product {
            description
            id
          }
        }
        qty
        total
        active
      }
    }
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
  "name": "error",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "qty",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrderItemRemoveMutation",
  "id": null,
  "text": "mutation OrderItemRemoveMutation(\n  $input: OrderItemRemoveInput!\n) {\n  OrderItemRemoveMutation(input: $input) {\n    error\n    orderEdge {\n      node {\n        id\n        orderItems {\n          product {\n            description\n            id\n          }\n        }\n        qty\n        total\n        active\n      }\n    }\n  }\n}\n",
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
          v2,
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
                  v3,
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
                          v4
                        ]
                      }
                    ]
                  },
                  v5,
                  v6,
                  v7
                ]
              }
            ]
          }
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
          v2,
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
                  v3,
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
                          v4,
                          v3
                        ]
                      }
                    ]
                  },
                  v5,
                  v6,
                  v7
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1f451a24229c935a39c44d9c64075e7';
module.exports = node;
