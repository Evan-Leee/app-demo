const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
import setRoutes from './routes';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

export default app;
