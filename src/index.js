import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ListProducts from './components/product/ListProducts';
import ProductDetails from './components/product/ProductDetails';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App>
        <Route exact path="/" component={ListProducts} />
        <Route path="/product/details/:id" component={ProductDetails} />
      </App>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
