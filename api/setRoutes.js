const Router = require('koa-router');
const routes = require('./routes/');

const setRoutes = app => {
  routes.forEach(registerRoute => registerRoute(app));
}

module.exports = setRoutes;
