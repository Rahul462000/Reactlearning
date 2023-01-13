import React, { useState } from 'react'

const Form = () => {

  // this is a two input form useState hook method that use in the forms
  // one useState is used to store the written information and another is used two show that stored information
    const[name,setName]= useState('');
    const[showForm,setShowform]= useState('');
    const[lastName,setLastName]= useState('');
    const[showFormTwo,setShowFormTwo] = useState('');

    

    const inputEvent = (event)=>{
        console.log(event.target.value);
        setName(event.target.value)
    }

    const submitForm =(e)=>{
      e.preventDefault();
      setShowform(name);
      setShowFormTwo(lastName);
    }

    const inputEventTwo = (event)=>{
      console.log(event.target.value);
      setLastName(event.target.value);
    }


  return (
    <>
    <form onClick={submitForm}>
    <h1>Hello This is {showForm} {showFormTwo}!</h1>
    <input type="text" value={name} placeholder='Enter your namr here' onChange={inputEvent} />
    <input type="text" value={lastName} placeholder='Enter your namr here' onChange={inputEventTwo} />
    <button type='submit'>Click Me</button>
    </form>
    </>
  )
}

export default Form