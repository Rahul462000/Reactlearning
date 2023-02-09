import React from 'react'

const GFooter = () => {
    const years = new Date().getFullYear();
  return (
    <>
    copyright @{years}
    </>
  )
}

export default GFooter