import React, { Component } from 'react';

import BeerSearchForm from '../BeerSearchForm';
import BeerGrid from '../BeerGrid';
import MainLayout from '../../layouts/main';
import beersTree from '../../trees/beers';
import ConncectTree from '../../helpers/ConnectTree';
import { fetchBeers } from '../../trees/beers';

class App extends Component {
  componentDidMount() {
    fetchBeers();
    // setTimeout(() => {
    //   setBeers();
    // }, 10000);
  }

  render() {
    const { allBeers } = this.props.beers || { beersData: {} };
    return (
      <MainLayout>
        <h2 className="subtitle is-2">Search beers</h2>
        <div className="columns">
          <div className="column is-two-thirds is-offset-one-fifth">
            <BeerSearchForm />
            <BeerGrid beers={allBeers} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default ConncectTree(beersTree)(App);
