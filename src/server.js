import fs from 'fs';
import express from 'express';
import cors from 'cors';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './screens';

const app = express();
app.use(cors());

app.use('/dist', express.static('dist/client'));

app.get('/', (req, res) => {
  const markup = fs.readFileSync('dist/client/index.html', 'utf8');
  const { renderToString } = ReactDomServer;
  const ra = renderToString(<App />);
  const html = markup.replace('__ReactRa__', ra);
  res.send(html);
});
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});

export default app