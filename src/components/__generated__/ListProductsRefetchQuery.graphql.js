/**
 * @flow
 * @relayHash 873d9ff41ca27a7194cf6e3ca0fb47c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListProducts_query$ref = any;
export type ListProductsRefetchQueryVariables = {|
  first?: ?number
|};
export type ListProductsRefetchQueryResponse = {|
  +$fragmentRefs: ListProducts_query$ref
|};
export type ListProductsRefetchQuery = {|
  variables: ListProductsRefetchQueryVariables,
  response: ListProductsRefetchQueryResponse,
|};
*/


/*
query ListProductsRefetchQuery {
  ...ListProducts_query
}

fragment ListProducts_query on Query {
  products(first: 100) {
    edges {
      node {
        id
        _id
        description
        value
        qty
        picture
        active
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ListProductsRefetchQuery",
  "id": null,
  "text": "query ListProductsRefetchQuery {\n  ...ListProducts_query\n}\n\nfragment ListProducts_query on Query {\n  products(first: 100) {\n    edges {\n      node {\n        id\n        _id\n        description\n        value\n        qty\n        picture\n        active\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ListProductsRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ListProducts_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListProductsRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": "products(first:100)",
        "args": v1,
        "concreteType": "ProductConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProductEdge",
            "plural": true,
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
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "products",
        "args": v1,
        "handle": "connection",
        "key": "ListProducts_products",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '97ef09eaead7c9cf3dbccec617ca8c90';
module.exports = node;
