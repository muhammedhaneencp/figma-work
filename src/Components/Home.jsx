import React from 'react'
import logo from './images/Logo.png'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='container'>
            <div className="navbar">
                <img src={logo} alt="logo"  />
                <div className='bars'>
                    <p>home</p>
                    <p>services</p>
                    <p>contact</p>
                    <p>support</p>

                <button className='signin'>sign up</button>
                </div>

                
            </div>
            

        </div>

      
    </div>
  )
}

export default Home
