import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style/index.css';
import Index from './components/App';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <Router>
    <Route path="/" component={Index} />
  </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
