/**
 * @flow
 * @relayHash 28d02d66d9768a31420462fc197fc4f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OperationType = "ADD" | "REMOVE" | "%future added value";
export type OrderItemEditInput = {
  orderId: string,
  product: string,
  qty: number,
  operation: OperationType,
  clientMutationId?: ?string,
};
export type OrderItemEditMutationVariables = {|
  input: OrderItemEditInput
|};
export type OrderItemEditMutationResponse = {|
  +OrderItemEditMutation: ?{|
    +order: ?{|
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
    order {
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
  "name": "OrderItemEditMutation",
  "id": null,
  "text": "mutation OrderItemEditMutation(\n  $input: OrderItemEditInput!\n) {\n  OrderItemEditMutation(input: $input) {\n    order {\n      id\n      orderItems {\n        product {\n          description\n          id\n        }\n        qty\n        total\n      }\n      qty\n      total\n      active\n    }\n    error\n  }\n}\n",
  "metadata": {},
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
            "alias": null,
            "name": "order",
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
          },
          v7
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
            "name": "order",
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
          },
          v7
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '07eb33416ebf5fbc74598f0fd652b678';
module.exports = node;
