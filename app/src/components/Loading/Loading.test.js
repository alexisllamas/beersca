import React from 'react';
import mount from 'enzyme/mount';
import Loading from '.';

describe('Loading component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
