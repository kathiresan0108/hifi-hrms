import React, { useState, useEffect } from 'react';
import '../CandidateHeader/CandidateHeader.css';
import logo from '../CandidateHeader/Assets/hrmslogo.jpg';
import cover from '../CandidateHeader/Assets/orange.jpeg';
import profile from '../CandidateHeader/Assets/Arun.jpg';
import { FaSearch, FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { getCsrfToken } from '../../../utils/csrf';
import axios from "axios";

function CandidateHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [candidateData, setCandidateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  const fetchCandidateDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }
  
      // Make the API request with user_id as a query parameter
      const response = await axios.get(`http://localhost:8000/api/user-profile/?user_id=${userId}`);
  
      // Log the response to understand its structure
      console.log("Response Data:", response.data);
  
      // Handle the response depending on its type (object for a single profile, array for multiple)
      if (Array.isArray(response.data)) {
        if (response.data.length > 0) {
          // Handle multiple profiles (e.g., return the first one)
          setCandidateData(response.data[0]);
        } else {
          throw new Error("No profile details found for this user");
        }
      } else {
        // Handle single profile (object)
        setCandidateData(response.data);
      }
  
      setLoading(false);
    } catch (err) {
      console.error("Error fetching candidate details:", err.message || err);
      setError(err.message || "Failed to fetch profile details");
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    fetchCandidateDetails();
  }, []);

  if (loading) {
    return (
      <div className="loading-pulsing-circles">
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  if (err) {
    return <div>Error: {err}</div>;
  }

  if (!candidateData) {
    return <div>Error: Candidate data not found!</div>;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    const csrfToken = await getCsrfToken();  // Get CSRF token
    const response = await fetch('http://localhost:8000/api/logout/', {
      method: 'POST',
      credentials: 'include', // Include credentials for session management
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken, // Include the CSRF token in the header
      },
    });

    if (response.ok) {
      console.log('Logged out successfully');  // Optional: Log success
      navigate('/'); // Redirect to home or login page after logout
    } else {
      console.error('Logout failed');
    }
}

const {
  about_me
} = candidateData;

  return (
    <header className='can-main'>
      <div className='can-header'>
        <div className='can-inside'>
          <div className='can-header_logo'>
            <img className='hrmslogo' src={logo} alt="HRMS Logo" />
          </div>
          <div className={`can-search-container ${isMobileMenuOpen ? 'open' : ''}`}>
            <input className='can-search-text' placeholder='Search' />
            <div className='can-search-icon'><FaSearch /></div>
            <Link to="/candidate_job" className='can-view-profile'><button className='can-job'>Jobs</button></Link>
            
            {/* Mobile Menu Items */}
            <Link to="/candidate_job" className='can-view-profile'><button className='can-profile-button'>Jobs</button></Link>
            <button className='can-profile-button'>Notification</button>
            <Link to="/candidate_profile" className='can-view-profile'><button className='can-profile-button'>View Profile</button></Link>
            <button className='can-profile-button'>Saved Jobs</button>
            <button className='can-profile-button'>Enquiry</button>
            <button className='can-profile-button' onClick={handleLogout}>Logout</button>

            <div className='can-notification-icon'><IoMdNotifications /></div>

            <div className='can-dropdown'>
              <div className='profileimg'><CgProfile /></div>
              <div className="can-dropdown-content">
                <div className="can-cover">
                  <img src={cover} className="image1" alt="Cover" />
                  <img src={about_me.photo ? `http://localhost:8000${about_me.photo}` : profile} className="image2" alt="Profile" />
                </div>
                <p>Arun S<br />arunpthurai28@gmail.com</p><br />
                <a href="/candidate_profile">View Profile</a>
                <a href="hifi">Match Job</a>
                <a href="hifi">Saved Jobs</a>
                <a href="hifi">Enquiry</a>
                <button onClick={handleLogout}>LOG OUT</button>
              </div>
            </div>
          </div>
          <div className='can-mobile-menu-icon' onClick={toggleMobileMenu}>
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
}

export default CandidateHeader;