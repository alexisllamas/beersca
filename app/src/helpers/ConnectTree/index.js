import React, { Component } from 'react';

const ConnectTree = tree => PassedComponent =>
  class ConnectTree extends Component {
    state = tree.get();

    componentDidMount() {
      tree.on('update', e => {
        const eventData = e.data;

        this.setState(eventData.currentData);
      });
    }
    render() {
      return <PassedComponent {...this.props} {...this.state} />;
    }
  };

export default ConnectTree;
