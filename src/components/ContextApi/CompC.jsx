import React from "react";
import { FirstNAme,LastName } from "./CompA";


// this is  a simple usage of context api in react
const CompC = () => {
  return (
    <>
      {/* this is a comsumer and consumer takes only function aur function mein paremeter kuch bhi pass kardo wo provider se value de dega */}
      {/* note if two consumers has to pass then */}
      <FirstNAme.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
            {(lName) =>{
                return <h1>my full name is {fname}{lName}</h1>
            }}
        </LastName.Consumer>
          )
        }}
      </FirstNAme.Consumer>
    </>
  );
};

export default CompC;


