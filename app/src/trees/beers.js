import Baobab, { monkey } from 'baobab';
import beerRepository from '../repositories/beerRepository';
import { arrayToObjectById, objectByIdToArray } from '../utils';

const tree = new Baobab({
  beers: {
    byId: {},
    allIds: [],
    errors: [],
    allBeers: monkey({
      cursors: {
        beers: ['beers', 'byId'],
      },
      get: data => objectByIdToArray(data.beers),
    }),
    isLoading: false,
  },
});

export const setBeers = ({ byId, allIds }) => {
  const beersSelector = tree.select('beers');
  beersSelector.set('byId', byId);
  beersSelector.set('allIds', allIds);
};

export const fetchBeers = async () => {
  const beersSelector = tree.select('beers');
  beersSelector.set('isLoading', true);
  const response = await beerRepository.fetchAll();
  beersSelector.set('isLoading', false);
  const beers = arrayToObjectById(response.data || []);
  setBeers(beers || []);
};

export const searchBeers = async query => {
  const beersSelector = tree.select('beers');
  beersSelector.set('isLoading', true);
  const response = await beerRepository.search(query);
  beersSelector.set('isLoading', false);
  const beers = arrayToObjectById(response.data || []);
  setBeers(beers || []);
};

export default tree;
