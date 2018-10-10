/**
 * @flow
 * @relayHash 2f2a40264b8c3778b59b246440a88862
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductSubscriptionVariables = {||};
export type ProductSubscriptionResponse = {|
  +ProductAdded: ?{|
    +productEdge: ?{|
      +node: {|
        +id: string,
        +_id: string,
        +description: string,
        +value: number,
        +qty: ?number,
        +picture: string,
        +active: boolean,
      |}
    |}
  |}
|};
export type ProductSubscription = {|
  variables: ProductSubscriptionVariables,
  response: ProductSubscriptionResponse,
|};
*/


/*
subscription ProductSubscription {
  ProductAdded {
    productEdge {
      node {
        id
        _id
        description
        value
        qty
        picture
        active
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ProductAdded",
    "storageKey": null,
    "args": null,
    "concreteType": "ProductAddedPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "productEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
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
                "name": "_id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "value",
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
                "name": "picture",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "active",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "ProductSubscription",
  "id": null,
  "text": "subscription ProductSubscription {\n  ProductAdded {\n    productEdge {\n      node {\n        id\n        _id\n        description\n        value\n        qty\n        picture\n        active\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52c6df73b28624e933448ad4cc8e8ad7';
module.exports = node;
