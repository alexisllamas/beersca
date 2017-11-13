const Router = require('koa-router');
const { api } = require('../utils');

const registerRoute = app => {
  const router = new Router({
    prefix: '/api/beers',
  });
  router.get('/', async ctx => {
    const request = await api.get('/beers');
    ctx.body = request.data;
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
};
module.exports = registerRoute;
