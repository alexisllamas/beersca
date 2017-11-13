import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aux from '../../helpers/Aux';

const mainLayout = ({ children }) => (
  <Aux>
    <Header />
    <section className="section">
      <div className="container">{children}</div>
    </section>
    <Footer />
  </Aux>
);

export default mainLayout;
