import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/netflix-logo.png";
import SearchIcon from "../../assets/images/search-icon.png";
import BellIcon from "../../assets/images/bell-icon.png";
import ProfileIcon from "../../assets/images/profile-icon.png";
import DropdownIcon from "../../assets/images/dropdown-icon.png";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List </li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={SearchIcon} alt="" className="icons" />
        <p>Children</p>
        <img src={BellIcon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={ProfileIcon} alt="" className="profile" />
          <img src={DropdownIcon} alt="" className="dropdown-icon" />
          <div className="dropdown">
            <p>Logout </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
