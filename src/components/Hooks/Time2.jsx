import React, { useState } from 'react'
// this is a clock whcih is used to update the time at every second with internet time

const Time2 = () => {
    let newTime = new Date().toLocaleTimeString();

    const[time,setTime] = useState(newTime)

    const UpdateTime = ()=>{
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(UpdateTime,1000)

  return (
    <>
    <h1>{time}</h1>
    </>
  )
}

export default Time2