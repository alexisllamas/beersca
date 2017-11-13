import React from 'react';
import mount from 'enzyme/mount';
import { App } from '.';
import NoBeerFounded from '../NotBeersFounded';

describe('App component', () => {
  it('renders without crashing', () => {
    const fetchBeers = jest.fn();
    const beers = {
      byId: {},
      allIds: [],
      errors: [],
      allBeers: [],
    };
    const history = {
      location: {
        query: '',
      },
    };

    const wrapper = mount(
      <App beers={beers} fetchBeers={fetchBeers} history={history} />,
    );
    expect(fetchBeers).toBeCalled();
    expect(wrapper).toContainReact(
      <h2 className="subtitle is-2">Search beers</h2>,
    );
    expect(wrapper).toContainReact(<NoBeerFounded />);

    wrapper.setProps({
      beers: {
        byId: {},
        allIds: [],
        errors: [],
        allBeers: [{ id: 1, name: 'Cerveza de Alexis' }],
      },
    });

    expect(wrapper).not.toContainReact(<NoBeerFounded />);
    expect(wrapper).toContainReact(
      <p className="card-header-title">Cerveza de Alexis</p>,
    );
  });
});
