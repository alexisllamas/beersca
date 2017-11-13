import React from 'react';

const BeerCard = beer => {
  return (
    <div className="card column beer is-half">
      <header className="card-header">
        <p className="card-header-title">{beer.name}</p>
        <span
          className={`tag ${
            beer.abv < 5
              ? 'is-success'
              : beer.abv < 10
                ? 'is-warning'
                : beer.abv < 20 ? 'is-danger' : 'is-black'
          }`}
        >
          {beer.abv}%
        </span>
      </header>
      <div className="card-content">
        <div className="content">{beer.description}</div>
        <div className="notification">{beer.brewers_tips}</div>
        <img className="beer-image" src={beer.image_url} alt="the beer" />
      </div>
    </div>
  );
};

export default BeerCard;
