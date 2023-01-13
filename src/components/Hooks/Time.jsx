import React ,{useState} from 'react'

const Time = () => {
    let newTime = new Date().toLocaleTimeString();

    const[time,setTime] = useState(newTime)

    const getTime = ()=>{
        console.log('clicked')
        newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

  return (
    <>
    <h1>{time}</h1>
    <button onClick={getTime}>Get Time</button>
    </>
  )
}

export default Time;