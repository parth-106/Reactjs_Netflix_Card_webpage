import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cards">
        <img src={props.imgsrc} alt="pic" className="card__image" />
        <div className="card__info">
          <spam className="card__category"> {props.sname} </spam>
          <h3 className="card__title"> {props.title} </h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button> Watch this </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
