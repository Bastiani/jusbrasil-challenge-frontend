/**
 * @flow
 * @relayHash f74b22eac4371f57b83df487dc1ab01d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductDetails_query$ref = any;
export type ProductDetailsQueryVariables = {|
  id: string
|};
export type ProductDetailsQueryResponse = {|
  +$fragmentRefs: ProductDetails_query$ref
|};
export type ProductDetailsQuery = {|
  variables: ProductDetailsQueryVariables,
  response: ProductDetailsQueryResponse,
|};
*/


/*
query ProductDetailsQuery(
  $id: ID!
) {
  ...ProductDetails_query_1Bmzm5
}

fragment ProductDetails_query_1Bmzm5 on Query {
  orders(first: 1, active: true) {
    edges {
      node {
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  product(id: $id) {
    id
    description
    value
    picture
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductDetailsQuery",
  "id": null,
  "text": "query ProductDetailsQuery(\n  $id: ID!\n) {\n  ...ProductDetails_query_1Bmzm5\n}\n\nfragment ProductDetails_query_1Bmzm5 on Query {\n  orders(first: 1, active: true) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  product(id: $id) {\n    id\n    description\n    value\n    picture\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductDetails_query",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductDetailsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "orders",
        "storageKey": "orders(active:true,first:1)",
        "args": v1,
        "concreteType": "OrderConnection",
        "plural": false,
        "selections": [
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
                  v2,
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
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "orders",
        "args": v1,
        "handle": "connection",
        "key": "ProductDetails_orders",
        "filters": []
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Product",
        "plural": false,
        "selections": [
          v2,
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
            "name": "picture",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17f3e043d3dc0ad221a7a21949311c62';
module.exports = node;
