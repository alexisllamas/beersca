const fs = require('fs');
const util = require('util');

const createApi = require('../../utils/createApi');

const log = string => {
  const ws = fs.createWriteStream(process.env.PWD + '/api/debug.log', {
    flags: 'a',
  });
  ws.write(util.format(string) + '\n');
  ws.end();
};

module.exports = {
  api: createApi('https://api.punkapi.com/v2'),
  log,
};
