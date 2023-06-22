import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {

    const [email, setEmail] = useState("") ;
    const [password , setPassword ] = useState("") ;
    const [cpassword , setCpassword] = useState("") ;

    const [ verified , setVerified ] = useState(false) ;

    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');

    const [otp , setOtp ] = useState("") ;

  const handleInputChange1 = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.slice(0, 1); // Take only the first character

    setDigit1(formattedValue);
  };

 

  const handleInputChange2 = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.slice(0, 1); // Take only the first character

    setDigit2(formattedValue);
  };

  const handleInputChange3 = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.slice(0, 1); // Take only the first character

    setDigit3(formattedValue);
  };
  const handleInputChange4 = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.slice(0, 1); // Take only the first character

    setDigit4(formattedValue);
  };

  const validateEmail = (email) => {
    
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return emailRegex.test(email);
  };

  const validatePassword = (tpassword) => {
    // This regex pattern enforces that the password has at least one uppercase letter,
    // one lowercase letter, one number, and one special character and is at least 8 characters long.
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return pattern.test(tpassword);
  };
    
  function verify(e) {
    e.preventDefault() ;

    if ( validateEmail(email)) {

        if (validatePassword(password)) {

            if ( cpassword == password)  {

                const emaili = document.getElementById("emailInput") ;
                const passi = document.getElementById("passwordInput") ;
                const cpassi = document.getElementById("cpasswordInput") ;
            
                emaili.readOnly = true ;
                passi.readOnly = true ;
                cpassi.readOnly = true ;
                
                setVerified(true) ;
    
                const data = {
                    email
                }
    
                axios.post("http://localhost:8070/user/sendOtp/" , data).then((res)=> {
    
                    setOtp(res.data.otp)
                    alert("Enter your OTP sent to your email")
    
                    
                }).catch( (err)=> {
                    alert(err) ;
                }) 
               
            }else {
                alert("Password doesnt match")
            }

        }else {
            alert("Password must conatin 8 characters including 1 lower case letter , one upper case letter , one number and atleast one special character") ;
        }
        

    }else {
        alert("Invalid Email")
    }
    



    
  }

    function register(e) {

        
        e.preventDefault() ;

        const  newUser = {
            email,
            password
        }

        const enteredOtp = digit1 + digit2 + digit3 + digit4 ;

        console.log(enteredOtp)

        if( otp == enteredOtp) {
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

        } else {
            alert("Invalid OTP")
        }

        
    }


    function cancel() {
        window.location.reload() ;
    }
  return (
    <div id='login-whole'>
        <center>
        <div id='login-container'  >
            <div id='login-form-container' >
                
                <form action="" id='login-form' >
                    <h1>Sign up</h1> <br /> <br />

                    <input className='input-fields' type="email" name="" id="emailInput" placeholder='Email' onChange={(e)=> {setEmail(e.target.value)}} /> <br /> <br />

                    <input className='input-fields' type="password" name="" id="passwordInput" placeholder='Password' onChange={(e)=> {setPassword(e.target.value)}} /> <br /> <br />

                    <input id='cpasswordInput' className='input-fields' type="password" placeholder='Confirm password' onChange={(e)=>{setCpassword(e.target.value)}} /> <br /> <br />
                   
                    {/* {isDivVisible && <div>This div is now visible!</div>} <button onClick={setDivVisibility(true)}>click</button> */}

                    { !verified && <><button id='login-button' onClick={verify}>Signup</button> <br /> <br /> </>}
                     
                    {
                        verified && 
                        <div>
                        <h6>OTP has been sent to your email</h6>
                        
                        <input className='otp-input' type="number" value={digit1}
                        onChange={handleInputChange1}   min={0} max={9}/>


                        <input  className='otp-input' type="number" value={digit2}
                        onChange={handleInputChange2}   min={0} max={9}/>

                        <input  className='otp-input' type="number" value={digit3}
                        onChange={handleInputChange3}   min={0} max={9}/>

                        <input  className='otp-input' type="number" value={digit4}
                        onChange={handleInputChange4}   min={0} max={9}/> 

                        <br /> <br />

                        <button id='verify-button' onClick={register}>Verify</button> <br /> <br />
                        <button id='cancel-button' onClick={cancel} >Cancel</button> 
                    </div>
                    }
                    

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