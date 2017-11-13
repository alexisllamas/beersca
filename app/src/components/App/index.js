import React, { PureComponent } from 'react';
import queryString from 'query-string';

import BeerSearchForm from '../BeerSearchForm';
import BeerGrid from '../BeerGrid';
import MainLayout from '../../layouts/main';
import beersTree from '../../trees/beers';
import ConncectTree from '../../helpers/ConnectTree';
import { fetchBeers, searchBeers } from '../../trees/beers';

export class App extends PureComponent {
  state = {
    beerName: '',
  };
  constructor(props) {
    super(props);
    const queryParams = this.props.history.location.search;
    const { beerName } = queryString.parse(queryParams);
    this.state = {
      beerName,
    };
  }
  componentDidMount() {
    const { fetchBeers } = this.props;
    const { beerName } = this.state;

    if (!beerName) {
      return fetchBeers && fetchBeers();
    }
    const { beerName: query } = queryString.parse(beerName);
    this.search(query);
  }

  search = query => {
    this.changePath(query || '');
    const { fetchBeers, searchBeers } = this.props;

    if (!query) return fetchBeers && fetchBeers();

    searchBeers && searchBeers(query);
  };

  changePath = query => {
    const { history } = this.props;
    history.push({
      pathname: this.props.location.pathname,
      search: query ? `?beerName=${query}` : '',
    });
  };

  render() {
    const { allBeers, isLoading } = this.props.beers;
    return (
      <MainLayout>
        <h2 className="subtitle is-2">Search beers</h2>
        <div className="columns">
          <div className="column">
            <BeerSearchForm
              search={this.search}
              defaultValue={this.state.beerName}
            />
            <BeerGrid
              beers={allBeers}
              changePath={this.changePath}
              isLoading={isLoading}
            />
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
