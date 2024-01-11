import logo from './logo.svg';
import './App.css';
import './About.jss';

const App = () => {
  const name ="Gowthami"
  const age = 30
  const isWorking = true
  const skills = [html, css, javaScript, nodejs]
  const data = {
    name: Gowthami,
    age: 30,
    city: Hyderabad,
    kids: {son:Dheeraj, dtr:Diya}
  }
  skills.map(item=>{
    // console.log(item, index)
    console.log(item)
  })
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{isWorking?"yes":"no"} </h1>
    {skills.map(item=>(
      <h3>{item}</h3>
    ))}

    <About fname={name} age={age} isTeacher={isTeacher} skills={skills} data={data}/>
    </>
  );
}

export default App;
