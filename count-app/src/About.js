import React from 'react'

const About = (props) => {
  console.log("props", props);

  // ****ArrayObject*****

  const data=[1,2,3,4,{name:"Gowthu", age:30},6,[7,8,9]]
  console.log(data[4]);       //{name:"Gowthu", age:30}
  console.log(data[4].age);    //30

  return (
    <>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.isWorking?"yes":"no"}</h1>
    {props.skills.map((item) => (
      <h1>{item}</h1>

    ))}
    <h3>{data[5]}</h3>  
    {/* "data" is declared in same component, we can write "props.data[5]" if it is in another componenet */}
    </>
  )
}

export default About