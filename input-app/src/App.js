import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import KidDetailsModal from './KidDetailsModal';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [kidsData, setKidsData] = useState({ 

  });

  const [selectedRowData, setSelectedRowData] = useState("");

  const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);
  const handleShowModal = (data) =>{
    setShowModal(true);
    console.log("data", data);
    setSelectedRowData(data);
  } 


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
  console.log("showModal",showModal);
  return (
    <>
    <button onClick={handleCloseModal}>Close</button>
    {!showModal?<>
    <h1>Kids Details</h1>
  
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
      {/* <th scope="col">Mother</th>
      <th scope="col">Father</th>
      <th scope="col">Bloodgroup</th> */}
    </tr>
  </thead>
  <tbody>
    {KidsData.map((row)=>(
      <tr key={row.sno}>
        <td>{row.sno}</td>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td><button onClick={()=>{handleShowModal(row)}}>Show More Details</button></td>
    
</tr>

      )  
)}
</tbody>
  </table>
  </>:<KidDetailsModal selectedRowData={selectedRowData}/>}
{/* {showModal?<KidDetailsModal/>:null} */}

</>

  )
}

export default App;
