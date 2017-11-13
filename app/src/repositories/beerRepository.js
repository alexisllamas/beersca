import { api } from '../utils';

const beersPath = '/beers';

const changeSpacesToDash = query => query.replace(/ /g, '_');

const beerRepository = {
  fetchAll: async () => {
    const response = await api.get(beersPath);
    return response;
  },
  search: async query => {
    const response = await api.get(
      `${beersPath}/search/${encodeURI(changeSpacesToDash(query))}`,
    );
    return response;
  },
};

export default beerRepository;
