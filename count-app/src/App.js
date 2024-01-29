import React from 'react'
import About from './About'


const App = () => {
  const name="Gowthami";
  const age= 30;
  const isWorking=false;
  const city= "Hyderabad";
  const skills=["html", "css", "javascript", "react"];
  skills.map((item, index) => {
    console.log(item, index)
  })

//  Mapping Function: arr.map((item,index)=>(
  // <h1>{item}</h1>
//  ))}
//************/  Before "return", we use "{}" to write fn,inside return, we use "()".
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{isWorking?"yes":"no"}</h1>
    {/* "?" Terinary operator, use as ifElse condition. If "isWorking" is true, will display as yes, If "isWorking" is false, will display as no. */}
    <h1>{skills}</h1>       
    {/* htmlcssjavascriptreact */}
    {/* To iterate an array of elements, we need to run loop/map function. Map function is faster than loop.  
        Mapping Function: arr.map((item,index)=>(
          <h1>{item}</h1>
          ))}*/}
    {skills.map((item, index) => (
    <h1>{item}</h1>
  ))}

<About name={name} age={age} isWorking={isWorking} skills={skills}/>
    </>
  )
}

export default App