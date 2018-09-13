/**
 * @flow
 * @relayHash a126f7c80b69f761c7a35abe919e759c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderCloseInput = {
  id: string,
  active?: ?boolean,
  clientMutationId?: ?string,
};
export type OrderCloseMutationVariables = {|
  input: OrderCloseInput
|};
export type OrderCloseMutationResponse = {|
  +OrderCloseMutation: ?{|
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
export type OrderCloseMutation = {|
  variables: OrderCloseMutationVariables,
  response: OrderCloseMutationResponse,
|};
*/


/*
mutation OrderCloseMutation(
  $input: OrderCloseInput!
) {
  OrderCloseMutation(input: $input) {
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
    "type": "OrderCloseInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "OrderCloseInput!"
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
  "name": "OrderCloseMutation",
  "id": null,
  "text": "mutation OrderCloseMutation(\n  $input: OrderCloseInput!\n) {\n  OrderCloseMutation(input: $input) {\n    order {\n      id\n      orderItems {\n        product {\n          description\n          id\n        }\n        qty\n        total\n      }\n      qty\n      total\n      active\n    }\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrderCloseMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderCloseMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderClosePayload",
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
    "name": "OrderCloseMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "OrderCloseMutation",
        "storageKey": null,
        "args": v1,
        "concreteType": "OrderClosePayload",
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
(node/*: any*/).hash = '748c4c54d60c573564054c6b235514c4';
module.exports = node;
