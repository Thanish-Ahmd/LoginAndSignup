import React from 'react'

const Signup = () => {
  return (
    <div id='login-whole'>
        <center>
        <div id='login-container'  >
            <div id='login-form-container' >
                
                <form action="" id='login-form'>
                    <h1>Sign up</h1> <br /> <br />

                    <input type="text" name="" id="" placeholder='Email' /> <br /> <br />

                    <input type="password" name="" id="" placeholder='Password' /> <br /> <br />

                    <input type="password" placeholder='Confirm password' /> <br /> <br />

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