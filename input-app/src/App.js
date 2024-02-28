import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

function App() {

  // const [kidsData, setKidsData]= useState([]);
  // const [modalInfo, setModalInfo]= useState([]);
  // const [showModal, setShowModal]= useState(false);

  // const [show, setShow]= useState(false);
  // const handleClose =()=>setShow(false);
  // const handleShow =()=>setShow(true);

  const KidsData=[
    {
      sno: 1,
      name: "Dheeraj",
      age: 4,
      mother: "Gowthami",
      father: "Lakshmipathy",
      bloodgroup: "O +ve"
    },{
      sno: 2,
      name: "Diya",
      age: 2,
      mother: "Gowthami",
      father: "Lakshmipathy",
      bloodgroup: "B +ve"
    },{
      sno: 3,
      name: "Jahnavi",
      age: 5,
      mother: "Priya",
      father: "Kanakaraju",
      bloodgroup: "O +ve"
    },{
      sno: 4,
      name: "Abhiram",
      age: 1,
      mother: "Priya",
      father: "Kanakaraju",
      bloodgroup: "O +ve"
    },{
      sno: 5,
      name: "Vihaan",
      age: 2,
      mother: "Anupriya",
      father: "Nethaji",
      bloodgroup: "B +ve"
    },{
      sno: 6,
      name: "Vivaan",
      age: 2,
      mother: "Anupriya",
      father: "Nethaji",
      bloodgroup: "B +ve"
    },{
      sno: 7,
      name: "Parnika",
      age: 6,
      mother: "Prameela",
      father: "Kiran",
      bloodgroup: "O +ve"
    },{
      sno: 8,
      name: "Naynika",
      age: 2,
      mother: "Prameela",
      father: "Kiran",
      bloodgroup: "O +ve"
    },{
      sno: 9,
      name: "Sudarshan",
      age: 3,
      mother: "Kanmani",
      father: "Paulraj",
      bloodgroup: "B +ve"
    },{
      sno: 10,
      name: "Eric",
      age: 12,
      mother: "Chandrakala",
      father: "Premraj",
      bloodgroup: "O +ve"
    }
  ];

  // const rowEvents= {
  //   onClick: (e, row)=>{
  //     console.log(row);
  //     setModalInfo(row);
  //     toggleTrueFalse();
  //   }
  // };

  // const toggleTrueFalse=()=>{
  //   setShowModal(handleShow);
  // };
  
  return (
    <>
    <h1>Kids Details</h1>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      {/* <th scope="col">Mother</th>
      <th scope="col">Father</th>
      <th scope="col">Bloodgroup</th> */}
    </tr>
  </thead>
  <tbody>
    {KidsData.map((row, item)=>(
      <tr>
        <td>{item+1}</td>
      <td>{row.name}</td>
      <td>{row.age}</td>
      
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More details
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Kids Data</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {/* <h3>{KidsData[item]}</h3> */}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</tr>
      )  
)}
</tbody>
  {/* rowEvents={rowEvents}
  {show?{kidsData}:null} */}
  </table>

</>

  )
}

export default App;
