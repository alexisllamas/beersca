const Router = require('koa-router');
const api = require('../../utils/api');
const registerRoute = app => {
  const router = new Router({
    prefix: '/api/beers'
  });
  router.get('/', async (ctx, next) => {
    const request = await api.get('/beers')
    ctx.body = request;
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
}
module.exports = registerRoute;