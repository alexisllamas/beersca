import React, { PureComponent } from 'react';

import BeerSearchForm from '../BeerSearchForm';
import BeerGrid from '../BeerGrid';
import MainLayout from '../../layouts/main';
import beersTree from '../../trees/beers';
import ConncectTree from '../../helpers/ConnectTree';
import { fetchBeers } from '../../trees/beers';

class App extends PureComponent {
  componentDidMount() {
    fetchBeers();
  }

  render() {
    const { allBeers, isLoading } = this.props.beers;
    return (
      <MainLayout>
        <h2 className="subtitle is-2">Search beers</h2>
        <div className="columns">
          <div className="column">
            <BeerSearchForm />
            <BeerGrid beers={allBeers} isLoading={isLoading} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default ConncectTree(beersTree)(App);
