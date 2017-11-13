import React, { PureComponent } from 'react';
import Input from '../Input';

class BeerSearchForm extends PureComponent {
  render() {
    return (
      <form>
        <Input
          labelText="Beer name"
          className="input"
          name="beerName"
          type="text"
          placeholder="Text input"
          onChange={ev => console.log(ev.target.value)}
        />
      </form>
    );
  }
}

export default BeerSearchForm;
