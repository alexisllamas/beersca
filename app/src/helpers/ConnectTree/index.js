import React, { Component } from 'react';

const ConnectTree = (tree, actions) => PassedComponent =>
  class ConnectTree extends Component {
    state = tree.get();

    componentDidMount() {
      tree.on('update', e => {
        const eventData = e.data;

        this.setState(eventData.currentData);
      });
    }
    render() {
      return <PassedComponent {...this.props} {...this.state} {...actions} />;
    }
  };

export default ConnectTree;
