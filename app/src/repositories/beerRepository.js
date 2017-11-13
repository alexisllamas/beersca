import { api } from '../utils';

const beersPath = '/beers';

const beerRepository = {
  fetchAll: async () => {
    const response = await api.get(beersPath);
    return response;
  },
};

export default beerRepository;
