import React, { useEffect, useState } from "react";
import './CandidateProfile.css';
import profile from '../CandidateProfile/Assets/user_img.jpg';
import CandidateHeader from '../CandidateHeader/CandidateHeader';
import Footer from '../../Home/Footer/footer';
import { Link } from 'react-router-dom';
import axios from "axios";

const CandidateProfile = () => {
  const [candidateData, setCandidateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  // Retrieve userId from localStorage
  const userId = localStorage.getItem("userId");
  localStorage.setItem('user_id', userId); // Save to localStorage
  localStorage.setItem('userId', userId); // Save to localStorage

  // Log userId for debugging
  console.log("User ID:", userId);

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

  const {
    about_me,
    certifications,
    education_details,
    experience_details,
    courses,
    skills
  } = candidateData;

  return (
    <div>
      <CandidateHeader />
      <div className="profile-container">
        <div className="profile-header">
        <div className="profile-image">
          <img
            src={about_me.photo ? `http://localhost:8000${about_me.photo}` : profile}
            alt="Profile"
          />
        </div>
          <div className="profile-details">
            <h2>{about_me.firstname} {about_me.lastname}</h2>
            <p>Role: {skills.length > 0 ? skills[0].area_of_interest : 'N/A'}</p>
            <p>Location: {about_me.city}</p>
            <Link to={`/candidate_update?userId=${userId}`}>
              <button>Update Profile</button>
            </Link>
          </div>
        </div>
        <div className="profile-objective">
          <h3>Objective</h3>
          <p>{about_me.objective}</p>
        </div>
        <div className="profile-sections">
          <div className="profile-skills">
            <h3>Skills</h3>
            <ul>
              {skills.length > 0 ? (
                skills.map((skill, index) => <li key={index}>{skill.skill}</li>)
              ) : (
                <li>No skills available</li>
              )}
            </ul>
          </div>

          <div className="profile-certifications">
            <h3>Certifications</h3>
            <ul>
              {certifications.length > 0 ? (
                certifications.map((cert, index) => (
                  <li key={index}>{cert.certificate_name} - {cert.issue_date}</li>
                ))
              ) : (
                <li>No certifications available</li>
              )}
            </ul>
          </div>

          <div className="profile-education">
            <h3>Education</h3>
            <ul>
              {education_details.length > 0 ? (
                education_details.map((edu, index) => (
                  <li key={index}>{edu.qualification} from {edu.school_name} ({edu.start_year})</li>
                ))
              ) : (
                <li>No education details available</li>
              )}
            </ul>
          </div>

          <div className="profile-experience">
            <h3>Experience</h3>
            <ul>
              {experience_details.length > 0 ? (
                experience_details.map((exp, index) => (
                  <li key={index}>{exp.job_role} at {exp.company_name} with {exp.year_of_experience} years Experience</li>
                ))
              ) : (
                <li>No experience details available</li>
              )}
            </ul>
          </div>

          <div className="profile-courses">
            <h3>Courses</h3>
            <ul>
              {courses.length > 0 ? (
                courses.map((course, index) => <li key={index}>{course.course_name}</li>)
              ) : (
                <li>No courses available</li>
              )}
            </ul>
          </div>

        </div>
        <div className="profile-footer">
          <Link to='/candidate_dashboard'>
            <button>Back</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandidateProfile;
