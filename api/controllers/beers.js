const { api, log } = require('../utils');

const index = async ctx => {
  const dateRequest = new Date();
  const requestLog = `<-- ${ctx.request.method} ${
    ctx.request.url
  } ${dateRequest.toISOString()}`;
  log(requestLog);

  const request = await api.get('/beers');

  ctx.body = request.data;

  const responseLog = `--> ${new Date() - dateRequest}s ${
    ctx.response.status
  } ${ctx.response.message} data: ${ctx.response.body
    .map(beer => beer.name)
    .reduce((beersString, beer) => `${beersString},${beer}`, '')}`;
  log(responseLog);
};

const search = async ctx => {
  const dateRequest = new Date();
  const requestLog = `<-- ${ctx.request.method} ${
    ctx.request.url
  } ${dateRequest.toISOString()}`;
  log(requestLog);

  const query = ctx.params.query;
  const request = await api.get(`/beers?beer_name=${query}`);
  ctx.body = request.data;

  const responseLog = `--> ${new Date() - dateRequest}s ${
    ctx.response.status
  } ${ctx.response.message} data: ${ctx.response.body
    .map(beer => beer.name)
    .reduce((beersString, beer) => `${beersString},${beer}`, '')}`;
  log(responseLog);
};

module.exports = {
  index,
  search,
};
