import React from 'react';
import './Header.css';

const Navbar = () => {
  return (
    <div className='container'>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar