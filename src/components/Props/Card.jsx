import React from "react";
import './Card.css'
// and this is how you calle the properties of props
const Card = (props) => {
  return (
    <>
      <div class="container">
        <div class="card">
          <div class="slide slide1">
            <div class="content">
              <div class="icon">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div class="slide slide2">
            <div class="content">
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
