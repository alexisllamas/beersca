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
      this.props.search(query);
    }, 1000);
    this.setState({ timer });
  };

  render() {
    return (
      <form>
        <Input
          labelText="Beer name"
          className="input"
          name="beerName"
          type="text"
          placeholder="Search your beer..."
          defaultValue={this.props.defaultValue}
          onChange={this.handleChange}
          autoFocus
        />
      </form>
    );
  }
}

export default BeerSearchForm;
