import React from 'react';
import BeerCard from '../BeerCard';
import Loading from '../Loading';
import NoBeers from '../NotBeersFounded';

const BeerGrid = ({ beers, isLoading }) => {
  if (isLoading) return <Loading />;
  if (!beers.length) return <NoBeers />;
  const beerCards = beers.map(beer => <BeerCard key={beer.id} {...beer} />);
  return <div className="columns is-multiline beers">{beerCards}</div>;
};

export default BeerGrid;
