const Koa = require('koa');
const logger = require('koa-logger')

const setRoutes = require('./setRoutes');

const app = new Koa();
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

app.use(logger())

setRoutes(app);

const port = process.env.PORT || 4000;
app.listen(port);