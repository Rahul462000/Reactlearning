import React from 'react'
import CompC from './CompC'
import { FirstNAme,LastName } from "./CompA";
import { useContext } from 'react';

const CompB = () => {
    const fName = useContext(FirstNAme)
    const lName = useContext(LastName)
  return (
    <>
    <h1>My name in component B is {fName}{lName}</h1>
    <CompC />
   
    </>
  )
}

export default CompB