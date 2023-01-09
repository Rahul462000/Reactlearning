import React from "react";
import './Card.css'
// and this is how you calle the properties of props
const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <h3>{props.h1}</h3>

              <p>{props.p}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
