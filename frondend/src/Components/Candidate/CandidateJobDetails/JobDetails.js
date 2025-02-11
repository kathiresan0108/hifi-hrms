// src/components/JobDetails.js
import React from 'react';
import './JobDetails.css';
import Footer from '../../Home/Footer/footer';
import CandidateHeader from '../CandidateHeader/CandidateHeader';

function JobDetails() {
  return (
    <div>
      <CandidateHeader/>
    <div className="candidate-job-page">
      <div className="job-details">
        <h2>Job Details</h2>
        <ul>
          <li>No. of Vacancies: 5</li>
          <li>Education: BSC</li>
          <li>Skills: Python, Java</li>
          <li>Course: Python</li>
          <li>Certificate: Python</li>
          <li>Year of Experience: 20</li>
          <li>Age: 19</li>
          <li>Passed Out: 2024</li>
          <li>Gender: Female</li>
          <li>Job Type: Full Time</li>
        </ul>
      </div>

      <div className="job-description">
        <div>
          <p><strong>Role:</strong> Developer</p>
          <p><strong>Salary:</strong> 1,00,000</p>
          <p><strong>City:</strong> Gotham City</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>★ Mens are brave</p>
          <p>★ Create power with Great Responsibility</p>
        </div>
        <div>
          <h3>Responsibility:</h3>
          <p>★ Wake up to Reality</p>
          <p>★ The world Should know Pain</p>
        </div>
        <div className="actions">
          <button>Apply</button>
          <button>Share</button>
          <button>Print</button>
          <button>Save</button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default JobDetails;
