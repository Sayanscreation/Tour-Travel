import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><NavLink to='/' className='number'>5652315454</NavLink></li>
                        <li><NavLink to='/' className='email'>Tourandtravel@gmail.com</NavLink></li>
                        <div className="topnav-right">
                            <li><NavLink to='/' className='log_in'>Log in</NavLink></li>
                        </div>
                    </ul>
                </nav>
            </div>
            <hr className="bar"></hr>
            <div className="container-fluid">
                <div className="menu">
                    <nav>
                        <ul>
                            <li></li>
                            <li><NavLink to='/' className='nav'>Home</NavLink></li>
                            <li><NavLink to='/' className='nav'>Tours</NavLink></li>
                            <li><NavLink to='/Packages' className='nav'>Packages</NavLink></li>
                            <li><NavLink to='/' className='nav'>Destinations</NavLink></li>
                            <li><NavLink to='/Blog' className='nav'>Blog</NavLink></li>
                            <li><NavLink to='/About Us' className='nav'>About Us</NavLink></li>
                            <li><NavLink to='/Contact' className='nav'>Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Menu;