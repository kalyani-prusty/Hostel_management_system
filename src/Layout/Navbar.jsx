import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    
    
    <section className='sec11'>
    <nav class="navbar background"> 
        <ul class="nav-list"> 
            <div class="logo"> 
                <img src="logo.png" alt='' /> 
            </div> 
            <li><Link className='nav-a' to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>  
            <li><Link to="Facilities">Facilities</Link></li> 
            <li><Link to="/Fees">Fees</Link></li> 
            <li><Link to="/rgister">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul> 

        <div class="rightNav"> 
            <input type="text" name="search" id="search" /> 
            <button class="btn btn-sm">Search</button> 
        </div> 
    </nav> 
    </section>
    
   
    
  )
}
