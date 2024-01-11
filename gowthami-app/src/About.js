import React from 'react'

const About = (props) => {
    console.log("props", props)
  return (
    <>
    <h1>{props.fname}</h1>
    <h1>{props.age}</h1>
    <h1>{props.isWorking?"yes":"no"}</h1>
    {props.skills.map((skill)=>(
        <h1>{skill}</h1>
    ))}

    <h3>{props.data.name}</h3>
    <h3>{props.data.age}</h3>
    <h3>{props.data.city}</h3>
    <h3>{props.data.kids.son}</h3>
    <h3>{props.data.kids.dtr}</h3>
    </>
  )
}

export default About