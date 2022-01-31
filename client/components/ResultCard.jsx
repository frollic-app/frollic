import React from 'react';

const ResultCard = (props) => {
  
  return (
    <article>
      <div className="business">
        <img className="businessImg"src={props.image}></img>
        <div className="businessDetails">
          <p className="distance">{props.distance}</p>
          <p><a className="name" href={props.url}>{props.name}</a></p>
          <p><span className="price">{props.price}</span><span>&#8226;</span><span className="rating">Rating: {props.rating}</span></p>
          <p className="Address">{props.address}</p>
          <p className="phone">{props.phone}</p>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="addFav">Add Favorite</button>
        <button className="comment">Comment</button>
      </div>
    </article>
  );
}

export default ResultCard;