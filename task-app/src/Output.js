import React from 'react'

const Output = (props) => {
    console.log("props", props);

  return (
    <>
    <h1>{props.fName}</h1>
    <h1>{props.lName}</h1>
    <h1>{props.phNo}</h1>
    <h1>{props.emailId}</h1>
    <h1>{props.gender}</h1>
    <h1>{props.city}</h1>

    <button type="submit">Submit</button>
    </>
  )
}

export default Output