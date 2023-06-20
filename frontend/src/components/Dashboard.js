import React, { useEffect, useState } from 'react'
import '../styles/dashboard.css'
import axios from "axios";

// import { Jwt } from 'jsonwebtoken';
const secretKey = 'hey';
// import { Jwt } from 'jsonwebtoken';

const Dashboard = () => {

    // const [token ,setToken] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [password , setPassword] = useState("") ;
    useEffect(()=>{
        const token = localStorage.getItem("token")
        // setToken(token)
        console.log(token) ;

        // getUser()
        // localStorage.setItem("previous" , true)
        if (token == null) {
            
            window.location.href = "/login";
            
            
            
          } else {
            getUser()
          }

    },[])


    function getUser() {


        
        axios.get("http://localhost:8070/user/check/" , 
        {headers: {
            Authorization: `${localStorage.getItem("token")}`,
          } }).then((res)=>{ 
            setEmail(res.data.user.email)
            setPassword(res.data.user.password)
            console.log(res.data.user.email)
        }).catch( (err)=> {
            

            localStorage.removeItem("token") ;
            window.location.href = "/"
            
            
        }) 
    }

    function logout() {
        localStorage.removeItem("token") ;
        localStorage.setItem("previous" , false)
        alert("You have logged out")
        window.location.href= "/login" ;
    }
  return (
    <div>
        <div className='header-dashboard'>
            <div>
                <h1>Dashbaord</h1>
            </div>
            <div></div>
            <div className='header-icons'>
                
                <div className='profile-container'>

                        <a href="" className='profile-tag'>
                            <div className='profile-btn'> 
                                <img src="./images/avatar.jpg" alt=""  className='profile-icon'/>

                                <h4 >profile</h4>

                            </div>

                        </a>

                        
                    
                        <button className='btn-logout' onClick={logout}>Logout</button>
                </div>
            </div>


        </div>


        <div className='main-container'>
            <div className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-element'>home</li>
                    <li className='nav-element active-element'>contact us</li>
                    <li className='nav-element'>about us</li>
                </ul>
            </div>

            <div className='content'>
                <h3>Email : {email}</h3>
                <h5>Password : {password}</h5>
            </div>

        </div>
    </div>
  )
}

export default Dashboard