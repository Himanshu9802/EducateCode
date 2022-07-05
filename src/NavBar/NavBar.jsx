import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <div>
        <nav className='nav'>
            <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className="logoBox">
                    <img src="./images/logo.svg" alt="" className='logo'/>
                </div>
                <div className='navLinks'>
                    <ol>
                        <li>
                            <a href="">
                                Home
                            </a>
                            </li>
                        <li>About us</li>
                        <li>Course</li>
                        <li>Contact us</li>
                    </ol>
                </div>
                <div className='navJoin'>
                    <button onClick={()=>{console.log('11')}}>Join Now</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar