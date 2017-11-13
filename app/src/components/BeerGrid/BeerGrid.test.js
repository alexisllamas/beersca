import React from 'react';
import mount from 'enzyme/mount';
import BeerGrid from '.';
import NoBeerFounded from '../NotBeersFounded';

describe('BeerGrid component', () => {
  const beers = [
    {
      id: 1,
      name: 'Cerveza de Alexis',
      abv: 10,
      description: 'Cerveza bonita uwu',
      brewers_tips: 'tómala fría',
      image_url: 'img',
    },
  ];
  const wrapper = mount(<BeerGrid beers={beers} />);
  it('should have beerCards', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should not have beerCards when empty', () => {
    wrapper.setProps({ beers: [] });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toContainReact(<NoBeerFounded />);
  });
});
