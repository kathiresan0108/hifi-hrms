import React, { useEffect, useState } from "react";
import './ClientProfile.css';
import profile from '../Assets/kathir.jpg';
import ClientHeader from '../ClientHeader/ClientHeader';
import Footer from '../../Home/Footer/footer';
import { Link } from 'react-router-dom';
import axios from "axios"; // Ensure axios is installed and imported

const ClientProfile = () => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null); // Error state
  
  const fetchCompanyDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");

      // Check if the userId is available
      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }

      // Ensure the userId is a valid number before passing to the API request
      const userIdNumber = parseInt(userId);
      if (isNaN(userIdNumber)) {
        throw new Error("Invalid User ID format");
      }

      // Log the URL being called to verify if the URL is correct
      console.log(`Making request to: http://localhost:8000/api/company-details/?user_id=${userIdNumber}`);

      // Make the API request with the numeric userId
      const response = await axios.get(`http://localhost:8000/api/company-details/?user_id=${userIdNumber}`);

      // Log the entire response to verify the structure
      console.log("API Response: ", response.data);

      // Check the field names in the API response to match them correctly
      // Log the first item in the array to check for field names
      const firstItem = response.data[0];
      console.log("First Item: ", firstItem); // Check what fields it has (e.g., id, user_id)

      // Check if the response is an array and if the correct field exists
      if (Array.isArray(response.data)) {
        console.log("Response is an array, proceeding to filter");
      } else {
        console.log("Response is not an array, it is:", typeof response.data);
      }

      // Ensure correct matching field
      // Check if you have a "user_id" or "id" field in the response
      const filteredData = response.data.find(item => item.id === userIdNumber);  // Check if the API is using 'id' or 'user_id' field
      console.log("Filtered Data: ", filteredData);

      if (filteredData) {
        setClientData(filteredData); // Set filtered data
      } else {
        throw new Error("No company details found for this user");
      }

    } catch (error) {
      setError(error.message || "Failed to fetch company details");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  useEffect(() => {
    fetchCompanyDetails(); // Fetch data when the component mounts
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

  if (!clientData) {
    return <div>Error: Client data not found!</div>;
  }

  return (
    <div>
      <ClientHeader />
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image">
            <img src={profile} alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>{clientData.company_name}</h2>
            <p>{clientData.company_department}</p>
            <p>Currently</p>
            <Link to='/CompanyDetailsUpdate'>
              <button>Update Profile</button>
            </Link>
          </div>
        </div>
        <div className="profile-objective">
          <h3>Description</h3>
          <p>
            Creative fashion designer with an excellent understanding of fashion trends and techniques,
            manual design, and CAD. 10+ years of experience specializing in fashion items that remain 
            fashion-forward in the market. Proficient in fashion design from concept through production, 
            and adept in utilizing various design tools for digital transformation.
          </p>
        </div>
        <div className="profile-sections">
          <div className="profile-skills">
            <h3>Company Details</h3>
            <ul>
              <li>No Of Branches: {clientData.company_employees}</li>
              <li>Location: {clientData.company_location}</li>
              <li>Since: {clientData.start_year}</li>
            </ul>
            <ul>
              <li>Industry</li>
              <li>No Of Employees: {clientData.company_employees}</li>
            </ul>
          </div>
          <div className="profile-about">
            <h3>About Us</h3>
            <ul>
              <li>Domain: {clientData.company_department}</li>
              <li>MNC</li>
              <li>Mission</li>
              <li>Vision</li>
            </ul>
          </div>
          <div className="profile-education">
            <h3>Contact</h3>
            <ul>
              <li>Phone Number: {clientData.company_phone}</li>
              <li>Mail: {clientData.company_email}</li>
              <li><a target="_blank" href={clientData.company_social_media_Whatsapp_group} rel="noopener noreferrer">Whatsapp</a></li>
              <li><a target="_blank" href={clientData.company_weblink} rel="noopener noreferrer">Website</a></li>
              <li><a target="_blank" href={clientData.company_social_media_Linkedin} rel="noopener noreferrer">Linkedin</a></li>
              <li><a target="_blank" href={clientData.company_social_media_Instagram} rel="noopener noreferrer">Instagram</a></li>
              <li><a target="_blank" href={clientData.company_social_media_Facebook} rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="profile-footer">
          <Link to='/client_dashboard'>
            <button>Back</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientProfile;
