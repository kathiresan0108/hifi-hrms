import React, { useState, useEffect } from 'react';
import './ClientHeader.css';
import logo from '../Assets/hrmslogo.jpg';
import cover from '../Assets/orange.jpg';
import profile from '../Assets/kathir.jpg';
import { FaSearch, FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRocketchat } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

function ClientHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const urlUserId = new URLSearchParams(location.search).get("userId");
  const [userId, setUserId] = useState(urlUserId || null);

  useEffect(() => {
    // If userId is null, try retrieving it from localStorage
    if (!urlUserId) {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
  }, [urlUserId]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='header'>
        <div className='header_logo'>
          <img className='hrmslogo' src={logo} alt="HRMS Logo" />
        </div>
        <div
          className='menu-icon'
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
        <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
          <div className='search-container'>
            <input className='search-text' placeholder='Search' aria-label="Search" />
            <div className='search-icon'><FaSearch /></div>
            <Link to={`/post_detail?userId=${userId}`} className='add_job'><button className='job'>Add Jobs</button></Link>
            <Link to={`/hrdetail?userId=${userId}`} className='add_job'><button className='job'>Add HR</button></Link>
            <button className='noti'>Notification</button>
            <button className='noti'>Chat</button>
            <div className='notification-icon' aria-label="Notifications"><IoMdNotifications /></div>
            <div className='chat-icons' aria-label="Chat"><FaRocketchat /></div>
            <button className='job'>Help</button>
            <div className="dropdown">
              <div className='profile' aria-label="Profile"><CgProfile /><a href='hifi'>PROFILE</a></div>
              <div className="dropdown-content">
                <div className="cover">
                  <img src={cover} className="image1" alt="Cover" />
                  <img src={profile} className="image2" alt="Profile" />
                </div>
                <p className='PROFILENAME'>KATHIR<br />kathiresan0108@gmail.com</p><br />
                <a href="/client_profile">View Profile</a>
                <a href="/">LOG OUT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ClientHeader;
