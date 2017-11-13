import React, { PureComponent } from 'react';

import BeerSearchForm from '../BeerSearchForm';
import BeerGrid from '../BeerGrid';
import MainLayout from '../../layouts/main';
import beersTree from '../../trees/beers';
import ConncectTree from '../../helpers/ConnectTree';
import { fetchBeers, searchBeers } from '../../trees/beers';

export class App extends PureComponent {
  componentDidMount() {
    const { fetchBeers } = this.props;
    fetchBeers && fetchBeers();
  }

  render() {
    const { fetchBeers, searchBeers } = this.props;
    const { allBeers, isLoading } = this.props.beers;
    return (
      <MainLayout>
        <h2 className="subtitle is-2">Search beers</h2>
        <div className="columns">
          <div className="column">
            <BeerSearchForm fetchBeers={fetchBeers} searchBeers={searchBeers} />
            <BeerGrid beers={allBeers} isLoading={isLoading} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

const actionsToProps = {
  fetchBeers: () => fetchBeers(),
  searchBeers: query => searchBeers(query),
};

export default ConncectTree(beersTree, actionsToProps)(App);
