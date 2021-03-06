import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import serverStyleCleanup from 'node-style-loader/clientCleanup';

import App from './components/App';

hydrate((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.querySelector('#react-container'));

  serverStyleCleanup();
