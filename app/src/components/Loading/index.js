import React from 'react';
import Icon from 'react-fontawesome';

const Loading = () => (
  <div>
    <Icon name="spinner" size="3x" spin />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loading;
