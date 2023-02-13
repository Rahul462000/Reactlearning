import { Button } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Users = () => {
  const {fname} = useParams()
  const location = useLocation()
  console.log(location)
  return (
    <>
    <h1>This is a {fname} page</h1>
    {/* useLocation is a hook to use to find the current location in react application */}
    <p>My current location is {location.pathname}</p>
    {/* here a condition is created that when correct url is entered a button is displayed on the screen */}
    {location.pathname === `/users/rahul` ? 
    <Button onClick={() =>alert(`all is good`)} variant='text' style={{color:'orange'}}>Click</Button> : null
  }
    </>
  )
} 

export default Users;