const Router = require('koa-router');
const beersController = require('../controllers/beers');

const registerRoute = app => {
  const router = new Router({
    prefix: '/api/v1/beers',
  });

  router.get('/', beersController.index);

  router.get('/search/:query', beersController.search);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
module.exports = registerRoute;
