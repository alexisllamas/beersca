import React, { PureComponent } from 'react';
import Input from '../Input';
import { searchBeers, fetchBeers } from '../../trees/beers';

class BeerSearchForm extends PureComponent {
  state = {
    timer: null,
  };
  handleChange = ev => {
    if (!this.state.timer) {
      return this.createTimer(ev.target.value);
    }
    clearTimeout(this.state.timer);
    this.createTimer(ev.target.value);
  };

  createTimer = query => {
    const timer = setTimeout(() => {
      this.search(query);
    }, 1000);
    this.setState({ timer });
  };

  search = query => {
    if (!query) return fetchBeers();

    searchBeers(query);
  };

  render() {
    return (
      <form>
        <Input
          labelText="Beer name"
          className="input"
          name="beerName"
          type="text"
          placeholder="Text input"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default BeerSearchForm;
