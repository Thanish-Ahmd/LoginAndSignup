import React, { useEffect, useState } from 'react'
import axios from "axios";

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("") ;

    useEffect(()=>{
        const token = localStorage.getItem("token") ;

        if(token !=  null) {
            window.location.href = "/"
        }
    },[])

    function login(e){
        e.preventDefault() ;

        const user = {
            email,
            password
          }
      
          axios.post("http://localhost:8070/user/login/" , user).then((res)=>{
      
            if ( res.data.rst == "success" ) {
              //Session.set("name" , "thanish") ;
              //Session.set("user" , res.data.data._id) ;
              console.log(res.data.data._id)
              console.log(res.data.tok)
              localStorage.setItem("doctor", res.data.data._id) ;
              localStorage.setItem("token" , res.data.tok)
              alert("login successfull") ;
              //console.log("successfull") ;
              
              window.location = '/'
            }
            else if ( res.data.rst == "incorrect password" ) {
              alert("incorrect password") ;
              console.log("unsuccessfull") ;
      
            }else if ( res.data.rst == "invalid user" ) {
              alert("invalid user") ;
              console.log("unsuccessfull") ;
            }
            //console.log(res)
            //alert("heyyy")
            //window.location.reload();
          }).catch( (err)=> {
            alert(err) ;
          }) 
    }
   
  return (
    <div id='login-whole'>
        <center>
        <div id='login-container'  >
            <div id='login-form-container' >
                
                <form action="" id='login-form' onSubmit={login}>
                    <h1>Login</h1> <br /> <br />

                    <input className='input-fields' type="text" name="" id="" placeholder='Email' onChange={(e)=> {setEmail(e.target.value)}} required /> <br /> <br />

                    <input className='input-fields' type="password" name="" id="" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required/> <br /> <br />

                    <button id='login-button'>Login</button> <br /> <br />

                    <p>Don't have an account? <a href="/signup">signup</a></p> 

                </form>

                
            </div>
            <div id='login-message'>
                <div>
                <h2>Welcome !!</h2> <br />
                <p className='welcome-text' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptate ipsa modi! Provident ratione explicabo aliquam quo quisquam ipsa quod odit laudantium itaque! Quidem mollitia animi perferendis ex dolor commodi!</p>

                </div>
            </div>
        </div>

        </center>
    </div>
  )
}

export default Login