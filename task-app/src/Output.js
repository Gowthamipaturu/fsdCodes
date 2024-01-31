import React from 'react'

const Output = (props) => {
    console.log("props", props);

  return (
    <>
    <h1>{props.formData.fName}</h1>
    <h1>{props.formData.lName}</h1>
    <h1>{props.formData.phNo}</h1>
    <h1>{props.formData.emailId}</h1>
    <h1>{props.formData.gender}</h1>
    <h1>{props.formData.city}</h1>

    {/* <button type="submit">Submit</button> */}
    </>
  )
}

export default Output