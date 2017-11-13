import React from 'react';
import mount from 'enzyme/mount';
import BeerCard from '.';

describe('BeerCard component', () => {
  it('renders without crashing', () => {
    const beer = {
      name: 'Cerveza de Alexis',
      abv: 10,
      description: 'Cerveza bonita uwu',
      brewers_tips: 'tómala fría',
      image_url: 'img',
    };
    const wrapper = mount(<BeerCard {...beer} />);
    expect(wrapper).toMatchSnapshot();
  });
});
