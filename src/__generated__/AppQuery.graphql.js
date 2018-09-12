/**
 * @flow
 * @relayHash 3d1308a4c71ca9b242ff6309169c3451
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_query$ref = any;
export type AppQueryVariables = {|
  first?: ?number
|};
export type AppQueryResponse = {|
  +$fragmentRefs: App_query$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $first: Int
) {
  ...App_query_3ASum4
}

fragment App_query_3ASum4 on Query {
  orders(first: $first, active: true) {
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
    "name": "active",
    "value": true,
    "type": "Boolean"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery(\n  $first: Int\n) {\n  ...App_query_3ASum4\n}\n\nfragment App_query_3ASum4 on Query {\n  orders(first: $first, active: true) {\n    edges {\n      node {\n        id\n        qty\n        total\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "App_query",
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "orders",
        "storageKey": null,
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
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "orders",
        "args": v1,
        "handle": "connection",
        "key": "App_orders",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e11a467b21f69500a019a16e9ea08b84';
module.exports = node;
