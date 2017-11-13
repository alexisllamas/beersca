const Koa = require('koa');
const logger = require('koa-logger');

const setRoutes = require('./setRoutes');

const app = new Koa();

app.use(logger());

setRoutes(app);

const port = process.env.PORT || 4000;

const server = app.listen(port);

module.exports = server;
