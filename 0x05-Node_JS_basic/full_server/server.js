// 8. Organize a complex HTTP server using Express
// server.js

const express = require('express');

const app = express();
const port = 1245;
const routes = require('./routes/index');

app.use('/', routes);

app.listen(port);

export default app;
