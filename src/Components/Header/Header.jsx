import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";

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
      <nav className={NavOpen ? "open" : ""}>
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
      </nav>
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