/**
 * @flow
 * @relayHash 062bcc9626523e936032f47048662097
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderAddInput = {
  product: string,
  qty: number,
  clientMutationId?: ?string,
};
export type OrderAddMutationVariables = {|
  input: OrderAddInput
|};
export type OrderAddMutationResponse = {|
  +OrderAddMutation: ?{|
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
export type OrderAddMutation = {|
  variables: OrderAddMutationVariables,
  response: OrderAddMutationResponse,
|};
*/


/*
mutation OrderAddMutation(
  $input: OrderAddInput!
) {
  OrderAddMutation(input: $input) {
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
    "type": "OrderAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "OrderAddInput!"
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
  "name": "OrderAddMutation",
  "id": null,
  "text": "mutation OrderAddMutation(\n  $input: OrderAddInput!\n) {\n  OrderAddMutation(input: $input) {\n    orderEdge {\n      __typename\n      cursor\n      node {\n        id\n        orderItems {\n          product {\n            description\n            id\n          }\n          qty\n          total\n        }\n        qty\n        total\n        active\n      }\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrderAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderAddMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderAddPayload",
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
    "name": "OrderAddMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderAddMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderAddPayload",
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
(node/*: any*/).hash = '3ec1e0b36fa2522c82b73b7c0704af75';
module.exports = node;
