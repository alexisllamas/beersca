import { api } from '../utils';

const beersPath = '/beers';

const changeSpacesToDash = query => query.replace(/ /g, '_');

const beerRepository = {
  fetchAll: async () => {
    const response = await api.get(beersPath);

    return parseBeers(response);
  },
  search: async query => {
    const response = await api.get(
      `${beersPath}/search/${encodeURI(changeSpacesToDash(query))}`,
    );
    return parseBeers(response);
  },
};
const parseBeers = response => {
  if (response.success) {
    return response;
  }
  return {
    data: [],
    error: response.data,
    success: false,
  };
};

export default beerRepository;
