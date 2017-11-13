import React from 'react';
import BeerCard from '../BeerCard';

const BeerGrid = ({ beers }) => {
  const beerCards = beers.map(beer => <BeerCard key={beer.id} {...beer} />);
  return <div className="columns is-multiline beers">{beerCards}</div>;
};

export default BeerGrid;
