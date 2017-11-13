import React from 'react';
import mount from 'enzyme/mount';
import NotBeers from '.';

describe('NotBeers component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<NotBeers />);
    expect(wrapper).toMatchSnapshot();
  });
});
