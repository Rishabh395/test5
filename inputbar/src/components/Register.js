import React from 'react'
import { useState } from 'react'

function Register() {
    const [name , setname]=useState("");
    const [email , setemail]=useState("");
    const [contact_us , setcontact]=useState("");
    const [password , setpassword]=useState("");
    const [confirm_password , setconfirmpassword]=useState("");

   const handlesubmit = async(e)=>{
     e.preventDefault();

     if(password!==confirm_password){
       alert("password not match ");
     }
     else{
     let result = fetch("http://localhost:5000/register" , {
        method:"post", 
        body : JSON.stringify({name , email , contact_us , password , confirm_password}),
        headers:{
            "content-Type": "application/json",
        },
     });
     result = await (await result).json();
    }
   };
  return (
    
    <div>
        <div className='container'>
      <h2>Sign Up</h2>
      <input placeholder='name' name='name' id='name' 
      value={name} onChange={(e)=>setname(e.target.value)}  /><br/><br/>

      <input placeholder='Email' name='email' id='email' 
        value={email} onChange={(e)=>setemail(e.target.value)}  /><br/><br/>

      <input placeholder='contact_us' name='contact_us' id='contact_us'
         value={contact_us} onChange={(e)=>setcontact(e.target.value)}  /><br/><br/>

      <input placeholder='password' name='password' id='password'
         value={password} onChange={(e)=>setpassword(e.target.value)}  /><br/><br/>

      <input placeholder='confirm password' name='confirm_password' id='confirm_password'
         value={confirm_password} onChange={(e)=>setconfirmpassword(e.target.value)}  /><br/><br/>

         <button onClick={handlesubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Register
