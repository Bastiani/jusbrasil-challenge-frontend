/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrderList_query$ref: FragmentReference;
export type OrderList_query = {|
  +orders: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +orderItems: ?$ReadOnlyArray<?{|
          +orderId: ?string,
          +product: {|
            +id: string,
            +description: string,
            +value: number,
            +qty: ?number,
            +picture: string,
          |},
          +qty: number,
          +total: number,
        |}>,
        +qty: ?number,
        +total: ?number,
        +active: boolean,
      |}
    |}>
  |},
  +$refType: OrderList_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "qty",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "OrderList_query",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "orders"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "orders",
      "name": "__OrderList_orders_connection",
      "storageKey": null,
      "args": null,
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
                v0,
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
                        v0,
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
                        v1,
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "picture",
                          "args": null,
                          "storageKey": null
                        }
                      ]
                    },
                    v1,
                    v2
                  ]
                },
                v1,
                v2,
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '590a790722992e21945b5539b7a204d9';
module.exports = node;
