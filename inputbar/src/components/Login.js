import React from 'react'
import { useState } from 'react'
import "./Style.css"

function Login() {
    const [email , setemail]=useState("");
    const [password , setpassword]=useState("");


    const handlesubmit = async(e)=>{
        e.preventDefault();
        let result = fetch("http://localhost:5000/login" , {
           method:"post", 
           body : JSON.stringify({email, password }),
           headers:{
                
               "content-Type": "application/json",
           },
        });
        result = await (await result).json();
        // console.log(result);
        if(result.name){
            alert("match found");
        }
        else 
        alert("match not found");

      };

  return (
    <div>
        <div className='container'>
      <h2>LOG IN</h2>
      <input placeholder='Email' name='email' id='email' 
        value={email} onChange={(e)=>setemail(e.target.value)}  /><br/><br/>
      
      <input placeholder='password' name='password' id='password'
         value={password} onChange={(e)=>setpassword(e.target.value)}  /><br/><br/>

       <button onClick={handlesubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login
