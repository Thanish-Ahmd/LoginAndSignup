import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {

    const [email, setEmail] = useState("") ;
    const [password , setPassword ] = useState("") ;
    const [cpassword , setCpassword] = useState("") ;

    function register(e) {
        e.preventDefault() ;

        const  newUser = {
            email,
            password
        }

        if ( cpassword == password) {
            axios.post("http://localhost:8070/user/add/" , newUser).then((res)=> {
                if(res.data == "exist") {
                    alert("Email already exist")
                }else {
                    alert("User Added") ;
                    window.location.href = "/login" ;
                }
                
            }).catch( (err)=> {
                alert(err) ;
            }) 
        }
    }
  return (
    <div id='login-whole'>
        <center>
        <div id='login-container'  >
            <div id='login-form-container' >
                
                <form action="" id='login-form' onSubmit={register}>
                    <h1>Sign up</h1> <br /> <br />

                    <input type="text" name="" id="" placeholder='Email' onChange={(e)=> {setEmail(e.target.value)}} /> <br /> <br />

                    <input type="password" name="" id="" placeholder='Password' onChange={(e)=> {setPassword(e.target.value)}} /> <br /> <br />

                    <input type="password" placeholder='Confirm password' onChange={(e)=>{setCpassword(e.target.value)}} /> <br /> <br />

                    <button id='login-button'>Sign up</button> <br /> <br />

                    <p>Already have an account? <a href="/login">login</a></p> 

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

export default Signup