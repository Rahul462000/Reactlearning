import React from "react";
import {addition,subtraction,multiplication,division} from "./components/Calc";
import add from "./components/Calc";


const App = () => {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = { };

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = 'green'
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = 'yellow'
  } else {
    greeting = "Good Evening";
    cssStyle.color = 'purple'
  }

  return (
    <>
      <h1>Hello sir, <span style={cssStyle}> {greeting} </span></h1>
      <ul>
        <li>
        The sum of two number is: {add(5,4)}
        </li>
        <li>The addition of two number is: {addition(10,4)}</li>
        <li>The subtraction of two number is: {subtraction(1,-2)}</li>
        <li>The multiplication of two number is: {multiplication(10,4)}</li>
        <li>The division of two number is: {division(10,4)}</li>
      </ul>
    </>
  );
};

export default App;
