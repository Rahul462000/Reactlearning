import React, { useState } from "react";

const Form = () => {
  // this is a two input form useState hook method that use in the forms
  // one useState is used to store the written information and another is used two show that stored information
  // now new method is used to simplify the code
  // const[name,setName]= useState('');
  // const[showForm,setShowform]= useState('');
  // const[lastName,setLastName]= useState('');
  // const[showFormTwo,setShowFormTwo] = useState('');

  const [name, setName] = useState({
    fName: "",
    lName: "",
    eMail: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    // setName(event.target.value)
    // the below two console will provide you the exact information yhata user has enterd in the form
    console.log(event.target.name);
    console.log(event.target.placeholder);
    // below two constants will be used to access the entered text by the user
    const namee = event.target.name;
    const value = event.target.value;

    // demonstration of object destructuring

    // const {namee,value} = event.target;

    // setname will set the value of the enterd by the user
    setName((previousValue) => {
      console.log(previousValue);
      return {
        // jo bhi previousvalue object mein name se match karte hai use value mein add kardo
        ...previousValue,
        [namee] : value,
      }



      // it is commit sho thata we can use spread operator
      // if (namee === "fName") {
      //   return {
      //     fName: value,
      //     lName: previousValue.lName,
      //     eMail: previousValue.eMail,
      //   };
      // } else if (namee === "lName") {
      //   return {
      //     fName: previousValue.fName,
      //     lName: value,
      //     eMail: previousValue.eMail,
      //   };
      // } else if (namee === "eMail") {
      //   return {
      //     fName: previousValue.fName,
      //     lName: previousValue.lName,
      //     eMail: value,
      //   };
      // }
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("form Submitted😄");
    // simplifying the form
    // setShowform(name);
    // setShowFormTwo(lastName);
  };

  // it is done for the reduction if the code
  // const inputEventTwo = (event)=>{
  //   console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  return (
    <>
      <form onClick={submitForm}>
        {/* this is done for reduction of the code */}
        {/* <h1>Hello This is {showForm} {showFormTwo}!</h1> */}
        <h1>
          Hello {name.fName} {name.lName} {name.eMail}
        </h1>
        <input
          type="text"
          //  value={name}
          placeholder="Enter your name here"
          name="fName"
          onChange={inputEvent}
          value={name.fName}
        />
        <input
          type="email"
          //  value={lastName}
          placeholder="Enter your lastname here"
          //  onChange={inputEventTwo}
          onChange={inputEvent}
          value={name.lName}
          name="lName"
        />
        <input
          type="text"
          //  value={lastName}
          placeholder="Enter your email here"
          //  onChange={inputEventTwo}
          onChange={inputEvent}
          value={name.eMail}
          name="eMail"
          autoComplete="off"
        />

        <button type="submit">Click Me</button>
      </form>
    </>
  );
};

export default Form;
