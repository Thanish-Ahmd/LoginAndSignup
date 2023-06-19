import React from 'react'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <div className='header-dashboard'>
            <div>
                <h1>Dashbaord</h1>
            </div>
            <div></div>
            <div className='header-icons'>
                
                <div>
                    <div>
                        <img src="./images/avatar.jpg" alt=""  className='profile-icon'/>
                    </div>
                    <div>
                        <h4>profile</h4>
                    </div>
                    <h3>icons</h3>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Dashboard