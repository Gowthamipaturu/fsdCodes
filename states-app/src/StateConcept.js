import React from 'react'
import { useState } from 'react'

const StateConcept = () => {
    // const [name, setName]= useState("")
    // const [age, setAge]= useState("")
    // const [city, setCity]= useState("")
    // const [gender, setGender]= useState("")
    // const [father, setFather]= useState("")
    // const [mother, setMother]= useState("")
    const [formData, setFormData]= useState({
        
        name: "",
        age: "",
        city: "",
        gender: "",
        father: "",
        mother: "",
    });
    
    // const handleChangeName=(e)=>{
    //     setName(e.target.value);
    // }
    // const handleChangeAge=(e)=>{
    //     setAge(e.target.value);
    // }
    // const handleChangeCity=(e)=>{
    //     setCity(e.target.value);
    // }
    // const handleChangeGender=(e)=>{
    //     setGender(e.target.value);
    // }
    // const handleChangeFather=(e)=>{
    //     setFather(e.target.value);
    // }
    // const handleChangeMother=(e)=>{
    //     setMother(e.target.value);
    // }

    const handleChange =(e) =>{
        // const{name, value}= e.target;
        console.log(e.target.name, e.target.vlaue);
        setFormData({...formData, [e.target.name]:e.target.value});

        // ###*******To handle previous data in react*********
        // setFormData((prevData) => ({
        //      ...prevData,
        //      [event.target.name]:event.target.value,
        //      [name]:value
        // }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission with the formData object
        // console.log("Name:", name, "Age:", age, "City:", city, "Gender:", gender, "Father", father, "Mother:", mother);
        console.log(formData)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
        <label>
            Name:
            <input 
            type="text" 
            name="name"
            // value= {name}
            // onChange={handleChangeName}
            value={FormData.name}
            onChange={handleChange}
            />
        </label>
        </div>
        <div>
        <label>
            Age:
            <input 
            type="text" 
            name="age"
            // value= {age}
            // onChange={handleChangeAge}
            value={FormData.age}
            onChange={handleChange}
            />
        </label>
        </div>
        <div>
        <label>
            City:
            <input 
            type="text" 
            name="city"
            // value= {city}
            // onChange={handleChangeCity}
            value={FormData.city}
            onChange={handleChange}
            />
        </label>
        </div>
        <div>
        <label>
            Gender:
            <input 
            type="text" 
            name="gender"
           // value= {gender}
            // onChange={handleChangeGender}
            value={FormData.gender}
            onChange={handleChange}
            />
        </label>
        </div>
        <div>
        <label>
            Father:
            <input 
            type="text" 
            name="father"
            // value= {father}
            // onChange={handleChangeFather}
            value={FormData.father}
            onChange={handleChange}
            />
        </label>
        </div>
        <div>
        <label>
            Mother:
            <input 
            type="text" 
            name="mother"
            // value= {mother}
            // onChange={handleChangeMother}
            value={FormData.mother}
            onChange={handleChange}
            />
        </label>
        </div>
        <button type="submit">Submit</button>
    </form>
    <div>StateConcept</div>
    </>
  )
}

export default StateConcept