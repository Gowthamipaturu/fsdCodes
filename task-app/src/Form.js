import React from 'react'
import { useState } from 'react';
import Output from './Output';

const Form = () => {
    const [formData, setFormData]= useState({
        
        fName: "",
        lName: "",
        phNo: "",
        emailId: "",
        gender: "",
        city: "",
    });

    const [showOutput, setShowOutput]= useState(false);

    const handleChange =(e) =>{
        // const{name, value}= e.target;
        console.log(e.target.name, e.target.vlaue);
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setShowOutput(true);
    }

  return (
    <>
    <h2>Form:</h2>
    <form onSubmit={handleSubmit}>
        <div>
        <label>
            FirstName:
            <input 
            type="text" 
            name="fName"
            // value={FormData.fName}
            onChange={handleChange}
            />
        </label>
        </div> 
        <br/>
        <div>
        <label>
            LastName:
            <input 
            type="text" 
            name="lName"
            // value={FormData.lName}
            onChange={handleChange}
            />
        </label>
        </div>
        <br/>
        <div>
        <label>
            PhoneNumber:
            <input 
            type="text" 
            name="phNo"
            // value={FormData.phNo}
            onChange={handleChange}
            />
        </label>
        </div>
        <br/>
        <div>
        <label>
            EmailId:
            <input 
            type="text" 
            name="emailId"
            // value={FormData.emailId}
            onChange={handleChange}
            />
        </label>
        </div>
        <br/>
        <div>
        <label>
            Gender:
            <input 
            type="text" 
            name="gender"
            // value={FormData.gender}
            onChange={handleChange}
            />
        </label>
        </div>
        <br/>
        <div>
        <label>
            City:
            <input 
            type="text" 
            name="city"
            // value={FormData.city}
            onChange={handleChange}
            />
        </label>
        </div>
        <br/>
        <button type="submit">Submit</button>
    </form>

    {/* <Output FirstName={FormData.fName} LastName={FormData.lName} PhoneNo={FormData.phNo} EmailId={FormData.emailId} Gender={FormData.gender} City={FormData.city}  /> */}
{showOutput?(< Output formData={formData}/>):null}
    </>
  )
}

export default Form