// In this file usage of useState will be demostrate
import React, { useState } from "react";

const IncreDecre = () => {
  const [increment, setIncrement] = useState(0);
  const IncrNum = ()=>{
   console.log("clicked")
   setIncrement(increment + 1)

  }

const Initi = () =>{
    setIncrement('')
}
  return (
    <>
    <h1>useage of useState hook</h1>
      <h2>{increment}</h2>
      <button onClick={IncrNum}>Click Me</button>
      {/* <button onClick={Initi}>Click Me</button> */}
    </>
  );
};

export default IncreDecre;
