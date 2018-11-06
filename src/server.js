import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
//
import Html from './client/components/Html';
import App from './client/components/App';

const app = express();

app.use('/script', express.static(path.resolve(__dirname, 'client')));

app.get('/*', (req, res) => {
  const body = renderToString((
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  ));


  res.end(
    Html({
      body,
    })
  );
});
app.listen(3000, () => console.log('listen'));
