import React from "react";

export default function Card(props) {
  // props destructuring
  const { rating, location, title, price, coverImg, reviewCount, openSpots } =
    props;

  return (
    <div className="card--container">
      <div className="card--img--container">
        <img src={`../images/${coverImg}`} className="Card--img" />

        {openSpots === 0 && <span className="card--badge">SOLD OUT</span>}
      </div>
      <div className="card--info">
        <span className="Card--star">
          <img src="../images/star.png" />
        </span>
        <span className="Card--rating">{rating}</span>
        <span className="Card--review">
          ({reviewCount}) • {location}
        </span>
      </div>
      <p className="card--info">{title}</p>
      <p className="card--info">
        <span className="card--price">From ${price}</span>/ person
      </p>
    </div>
  );
}
