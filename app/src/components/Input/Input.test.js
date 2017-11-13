import React from 'react';
import mount from 'enzyme/mount';
import Input from '.';

describe('Input component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Input
        labelText="Beer name"
        className="input"
        name="beerName"
        type="text"
        placeholder="Text input"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
