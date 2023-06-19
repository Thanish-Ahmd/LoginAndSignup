import React from 'react'

const Login = () => {

   
  return (
    <div id='login-whole'>
        <center>
        <div id='login-container'  >
            <div id='login-form-container' >
                
                <form action="" id='login-form'>
                    <h1>Login</h1> <br /> <br />

                    <input type="text" name="" id="" placeholder='Email' /> <br /> <br />

                    <input type="text" name="" id="" placeholder='Password' /> <br /> <br />

                    <button id='login-button'>Login</button> <br /> <br />

                    <p>Don't have an account? <a href="">signup</a></p> 

                </form>

                
            </div>
            <div id='login-message'>
                <div>
                <h2>Welcome !!</h2> <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptate ipsa modi! Provident ratione explicabo aliquam quo quisquam ipsa quod odit laudantium itaque! Quidem mollitia animi perferendis ex dolor commodi!</p>

                </div>
            </div>
        </div>

        </center>
    </div>
  )
}

export default Login