// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import CareerObjective from './CareerObjective';
import EducationalQualifications from './EducationalQualifications'
import WorkHistory from './WorkHistory'
import PersonalDetails from './PersonalDetails'
import Declaration from './Declaration'
import Form from './Form'
import Output from './Output';


function App() {
  return (
    <>
    <Router>
    {/* <div>
      <ul>
        <li>
          <Link to= "/">Home</Link>
          </li>
          <li>
            <Link to= "/CareerObjective">CareerObjective</Link>
            </li>
          <li>
          <Link to= "/EducationalQualifications">EducationalQualifications</Link>
          </li>
          <li>
            <Link to= "/WorkHistory">WorkHistory</Link>
          </li>
          <li>
            <Link to= "/PersonalDetails">PersonalDetails</Link>
          </li>
          <li>
            <Link to= "/Declaration">Declaration</Link>
          </li>
          <li>
            <Link to= "/Form">Form</Link>
          </li>
          <li>
            <Link to= "/Output">Output</Link>
          </li>
      </ul>
    </div> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/careerObjective" element={<CareerObjective/>}/>
        <Route path="/EducationalQualifications" element={<EducationalQualifications/>}/>
        <Route path="/WorkHistory" element={<WorkHistory/>}/>
        <Route path="/PersonalDetails" element={<PersonalDetails/>}/>
        <Route path="/Declaration" element={<Declaration/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Output" element={<Output/>}/>
    </Routes>
    </Router>
    
      <Home/>
      <CareerObjective/>
      <EducationalQualifications/>
      <WorkHistory/>
      <PersonalDetails/>
      <Declaration/>
      <Form/>
    </>
  );
}

export default App;
