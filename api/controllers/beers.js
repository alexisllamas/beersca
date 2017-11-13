const { api } = require('../utils');

const index = async ctx => {
  const request = await api.get('/beers');
  ctx.body = request.data;
};

const search = async ctx => {
  const query = ctx.params.query;
  const request = await api.get(`/beers?beer_name=${query}`);
  ctx.body = request.data;
};

module.exports = {
  index,
  search,
};
