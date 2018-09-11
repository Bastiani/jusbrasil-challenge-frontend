import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App path="/" exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
