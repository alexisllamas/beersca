import React from 'react';
import mount from 'enzyme/mount';
import BeerSearchForm from '.';

describe('BeerSearchForm component', () => {
  const searchBeers = jest.fn();
  const fetchBeers = jest.fn();

  const wrapper = mount(
    <BeerSearchForm searchBeers={searchBeers} fetchBeers={fetchBeers} />,
  );
  it('should have render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call searchBeers', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Cerveza de Alexis' } });
    setTimeout(() => {
      expect(searchBeers).toBeCalledWith('Cerveza de Alexis');
    }, 1001);
  });
  it('should call fetchBeers when input empty', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '' } });
    setTimeout(() => {
      expect(searchBeers).toBeCalled(fetchBeers);
    }, 1001);
  });
});
