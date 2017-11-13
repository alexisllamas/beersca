import React from 'react';

const Input = ({ name, labelText, ...props }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {labelText}
    </label>
    <div className="control">
      <input id={name} name={name} {...props} />
    </div>
  </div>
);

export default Input;
