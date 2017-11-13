import React from 'react';

const BeerCard = beer => {
  return (
    <div className="card column beer is-half">
      <header className="card-header">
        <p className="card-header-title">{beer.name}</p>
      </header>
      <div class="card-content">
        <div class="content">{beer.description}</div>
      </div>
    </div>
  );
};

export default BeerCard;
