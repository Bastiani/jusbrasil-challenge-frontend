/**
 * @flow
 * @relayHash 5a7dbb5351a225d2c2aaa1747a168e5c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrderList_query$ref = any;
export type OrderListQueryVariables = {||};
export type OrderListQueryResponse = {|
  +$fragmentRefs: OrderList_query$ref
|};
export type OrderListQuery = {|
  variables: OrderListQueryVariables,
  response: OrderListQueryResponse,
|};
*/


/*
query OrderListQuery {
  ...OrderList_query
}

fragment OrderList_query on Query {
  orders(first: 1, active: true) {
    edges {
      node {
        id
        orderItems {
          orderId
          product {
            id
            description
            value
            qty
            picture
          }
          qty
          total
        }
        qty
        total
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "qty",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "OrderListQuery",
  "id": null,
  "text": "query OrderListQuery {\n  ...OrderList_query\n}\n\nfragment OrderList_query on Query {\n  orders(first: 1, active: true) {\n    edges {\n      node {\n        id\n        orderItems {\n          orderId\n          product {\n            id\n            description\n            value\n            qty\n            picture\n          }\n          qty\n          total\n        }\n        qty\n        total\n        active\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrderListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OrderList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrderListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "orders",
        "storageKey": "orders(active:true,first:1)",
        "args": v0,
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
                  v1,
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
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "orderId",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "product",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Product",
                        "plural": false,
                        "selections": [
                          v1,
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
                          v2,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "picture",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      v2,
                      v3
                    ]
                  },
                  v2,
                  v3,
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
        "name": "orders",
        "args": v0,
        "handle": "connection",
        "key": "OrderList_orders",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '65a5907885e0b27b59e96ddc56417bca';
module.exports = node;
