import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../Assets/App-Icon.png";
import { useState } from "react";
import { Ioclosed } from "react-icons/io5";

const Header = () => {
  const { NavOpen, setNavOpen } = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!NavOpen);
  };
  const handleNavLinkClick = () => {
    setNavOpen(false);
  };
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleNavLinkClick}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={handleNavLinkClick}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <button onClick={handleNavToggle}>Toggle Nav</button>
    </header>
  );
};

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