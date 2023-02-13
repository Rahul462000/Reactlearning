import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate()

  const goToContact = () =>{
    navigate('/contactus')
 
  }
  return (
    <>
    <h1>hello this page name is aboutus</h1>
    {/* these ara just some simple button with functionality to make the navigation easy  */}
    <button onClick={() => goToContact()}>Got o Contact page</button>
    <button onClick={() => {navigate(-1)}}>Go back</button>
    </>
  )
}

export default AboutUs