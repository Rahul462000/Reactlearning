import React, { useState } from 'react'
import './Accordian.css'
import { questions } from './AccordianQuestion'
import MyAccordian from './MyAccordian';

const Accordian = () => {
  const[data,setData] = useState(questions);
  return (
    <>
    <section className='main-div'>
      <h1>Basic interview question</h1>
    {
      data.map((currElem) =>{
        const {id} = currElem;
        return <MyAccordian key={id}  {...currElem} />
      })
    }
    </section>
    </>
  )
}

export default Accordian