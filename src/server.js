import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { collectInitial, collectContext } from 'node-style-loader/collect';

import Html from './client/components/Html';
import App from './client/components/App';

// do not call this before your application component has been imported
const initialStyleTag = collectInitial()

const app = express();
const scriptPath = process.env.SCRIPT_PATH || path.resolve(__dirname, 'client');

app.use('/script', express.static(scriptPath));

app.get('/*', (req, res) => {
  // render and capture CSS
  const [contextStyleTag, body] = collectContext(
    () => renderToString((
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    ))
  );

  res.end(
    Html({
      body,
      style: `${initialStyleTag} ${contextStyleTag}`,
    })
  );
});

const PORT = 3000;
app.listen(PORT, () => console.log(`localhost:${PORT}`));
