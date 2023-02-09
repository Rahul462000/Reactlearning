import React from 'react'
import CompB from './CompB'
import { createContext } from 'react'


const FirstNAme = createContext(); 
// if two value have to pass through then
const LastName = createContext();

const CompA = () => {
  return (
    <>
    {/* when using context api use .provider in component and value attribute */}
    <FirstNAme.Provider value={'Rahul'}>
        <LastName.Provider value={"singh"}>
    <CompB />
    </LastName.Provider>
    </FirstNAme.Provider>
    </>
  )
}

export default CompA;
export {FirstNAme,LastName}