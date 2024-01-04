import logo from './logo.svg';
import './App.css';

const App = () => {
  const name ="Gowthami"
  const age = 30
  const isWorking = true
  const skills = [html, css, javaScript, nodejs]
  skills.map(item=>{
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
    </>
  );
}

export default App;
