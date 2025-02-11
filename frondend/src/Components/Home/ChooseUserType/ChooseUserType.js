import React, { useState } from 'react';
import './ChooseUserType.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useNavigate } from 'react-router-dom';

const ChooseUserType = () => {
  const [selectedUserType, setSelectedUserType] = useState('');
  const navigate = useNavigate();

  const handleSelection = (type) => {
    setSelectedUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedUserType) {
      alert("Please select a user type.");
      return;
    }

    // Save selected user type in localStorage
    localStorage.setItem('selectedUserType', selectedUserType);

    // Redirect to the signup page (or OTP verification page) after selecting user type
    navigate(`/signup?userType=${selectedUserType}`); // Or navigate to /verify-otp depending on your flow
  };

  return (
    <div>
      <Header />
      <div className="cut_container">
        <h1>Choose User Type</h1>
        <div className="user-types">
          <div
            className={`user-type ${selectedUserType === 'candidate' ? 'selected' : ''}`}
            onClick={() => handleSelection('candidate')}
          >
            <input
              type="radio"
              id="candidate"
              name="userType"
              value="candidate"
              checked={selectedUserType === 'candidate'}
              onChange={() => handleSelection('candidate')}
            />
            <label htmlFor="candidate">
              <h2>Candidate</h2>
              <p>If you are a Candidate, please select this</p>
            </label>
          </div>
          <div
            className={`user-type ${selectedUserType === 'client' ? 'selected' : ''}`}
            onClick={() => handleSelection('client')}
          >
            <input
              type="radio"
              id="client"
              name="userType"
              value="client"
              checked={selectedUserType === 'client'}
              onChange={() => handleSelection('client')}
            />
            <label htmlFor="client">
              <h2>Client</h2>
              <p>If you are a Client, please select this</p>
            </label>
          </div>
        </div>
        <button onClick={handleSubmit} className="submit-button">
          Proceed to Signup
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseUserType;
