import React from "react";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "./components/Calc";
import add from "./components/Calc";
import Card from "./components/Props/Card";
import CardData from "./components/Props/CardArray";
import SlotMachine from "./components/SlotMachine";
import IncreDecre from "./components/Hooks/IncreDecre";
import Time from "./components/Hooks/Time";

// console.log() is a method that provide a data checking facility for ensuring data is called correctly or not
// console.log(CardData[0]);
// console.log(CardData[1]);

const App = () => {
  // map function method
  // const mapFunction = (val, ind, arr) => {
  //   return (
  //   <Card h1={val.h1}
  //   p={val.p} />
  //   );
  // };

  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
  } else {
    greeting = "Good Evening";
    cssStyle.color = "purple";
  }

  // if-else in card components,

  const favcard = "posterCard";
  // const Condition = () => {
  //   if (favcard === "posterCard") {
  //     return (
  //       <Card key={CardData[0].id} h1={CardData[0].h1} p={CardData[0].p} />
  //     );
  //   } else {
  //     return (
  //       <Card key={CardData[1].id} h1={CardData[1].h1} p={CardData[1].p} />
  //     );
  //   }
  // };

  return (
    <>
    <h1>This is a react practice programming phase!!</h1>
      <h1>
        Hello sir, <span style={cssStyle}> {greeting} </span>
      </h1>
      <ul>
        <li>The sum of two number is: {add(5, 4)}</li>
        <li>The addition of two number is: {addition(10, 4)}</li>
        <li>The subtraction of two number is: {subtraction(1, -2)}</li>
        <li>The multiplication of two number is: {multiplication(10, 4)}</li>
        <li>The division of two number is: {division(10, 4)}</li>
      </ul>
      {/* this is called props */}
      {/* <Card h1='hello i  rahul'
      p='keep moving ON'
      />
      <Card h1='hello i  rahul' 
      p='Do More'
      /> */}

      {/* now here we called the cardata from array */}
      {/* Card1 */}
      {/* <Card h1={CardData[0].h1} p={CardData[0].p} />
      // Card2
      <Card h1={CardData[1].h1} p={CardData[1].p} /> */}

      {/* their are two methods of map function calling */}

      {/* {CardData.map(mapFunction)}  old method */}

      {/* {CardData.map((val)=>{
        return(
          <Card 
          key={val.id}
          h1={val.h1} 
          p={val.p} />
        )

      })} */}

      {/* ifelse condition statement practising */}
      {/* <Condition /> */}

      {/* ternary condition usage */}
      {(favcard === 'posterCard')  ? <Card key={CardData[0].id} h1={CardData[0].h1} p={CardData[0].p} /> : <Card key={CardData[1].id} h1={CardData[1].h1} p={CardData[1].p} />  }

      {/* a slot machine game for ifelse condition rendering */}
      <SlotMachine />


      {/* usestate Hook increment operator */}
      <IncreDecre />

      {/* usetate Hook useage for getting time */}
      <Time />
    </>
  );
};

export default App;
