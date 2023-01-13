import React, { useState } from "react";

// in this file we will create some events that will be triggered to change color of the div

const HandelingEvents = () => {
  // This event will help to change the background color and also this is used to state the original color
  const purple = "#8e44ad";
  const [backgroundColor, setBackgroundColor] = useState(purple);
  const [name, setName] = useState("Click Me");

  const btnChange = () => {
    let newColor = "#34495e";
    setBackgroundColor(newColor);
    setName("You have clicked Me !!😋"); //// this will change the btn syntax when first event is fired
  };
  // this is an doubleclicked btn event
  const dbleClick = () => {
    setBackgroundColor(purple);
    setName("Click Me");
  };

  return (
    <>
      <div style={{ backgroundColor: backgroundColor }}>
        <button onClick={btnChange} onDoubleClick={dbleClick}>
          {name}
        </button>
      </div>
    </>
  );
};

export default HandelingEvents;
