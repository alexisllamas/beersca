import React, { PureComponent } from 'react';
import Input from '../Input';

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
    const { fetchBeers, searchBeers } = this.props;

    if (!query) return fetchBeers && fetchBeers();

    searchBeers && searchBeers(query);
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
