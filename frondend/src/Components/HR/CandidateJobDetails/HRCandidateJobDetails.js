import React, { useState } from 'react';
import './HRCandidateJobDetails.css';
import { Link } from 'react-router-dom';

function HRCandidateJob() {
  const jobData = [
    { company: "Company Name 1", role: "Software Engineer", location: "New York", salary: "80k-100k", type: "Full time", experience: "2-3 Yrs", datePosted: "Posted 2 days ago", skills: "JavaScript" },
    { company: "Company Name 2", role: "Data Analyst", location: "San Francisco", salary: "70k-90k", type: "Part time", experience: "1-2 Yrs", datePosted: "Posted 5 days ago", skills: "Python" },
    { company: "Company Name 3", role: "Product Manager", location: "Seattle", salary: "90k-120k", type: "Full time", experience: "3-5 Yrs", datePosted: "Posted 3 days ago", skills: "Management" },
    { company: "Company Name 1", role: "Software Engineer", location: "New York", salary: "80k-100k", type: "Full time", experience: "2-3 Yrs", datePosted: "Posted 2 days ago", skills: "JavaScript" },
    { company: "Company Name 2", role: "Data Analyst", location: "San Francisco", salary: "70k-90k", type: "Part time", experience: "1-2 Yrs", datePosted: "Posted 5 days ago", skills: "Python" },
    { company: "Company Name 3", role: "Product Manager", location: "Seattle", salary: "90k-120k", type: "Full time", experience: "3-5 Yrs", datePosted: "Posted 3 days ago", skills: "Management" }
    // Add more job listings as needed
  ];

  // State for filters
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Function to filter job data based on selected filters
  const filteredJobs = jobData.filter((job) => {
    return (
      (selectedSkill === '' || job.skills === selectedSkill) &&
      (selectedRole === '' || job.role === selectedRole) &&
      (selectedLocation === '' || job.location === selectedLocation) &&
      (selectedSalary === '' || job.salary === selectedSalary) &&
      (selectedExperience === '' || job.experience === selectedExperience) &&
      (selectedType === '' || job.type === selectedType)
    );
  });

  return (
    <div className='hrcandidatejob'>
      <div className="filter-container">
        <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)}>
          <option value="">Select Skill</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Management">Management</option>
          {/* Add more skills as needed */}
        </select>

        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
          <option value="">Select Job Role</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Product Manager">Product Manager</option>
          {/* Add more roles as needed */}
        </select>

        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Seattle">Seattle</option>
          {/* Add more locations as needed */}
        </select>

        <select value={selectedSalary} onChange={(e) => setSelectedSalary(e.target.value)}>
          <option value="">Select Salary</option>
          <option value="70k-90k">70k-90k</option>
          <option value="80k-100k">80k-100k</option>
          <option value="90k-120k">90k-120k</option>
          {/* Add more salary ranges as needed */}
        </select>

        <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
          <option value="">Select Experience</option>
          <option value="1-2 Yrs">1-2 Yrs</option>
          <option value="2-3 Yrs">2-3 Yrs</option>
          <option value="3-5 Yrs">3-5 Yrs</option>
          {/* Add more experience ranges as needed */}
        </select>

        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">Select Job Type</option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          {/* Add more job types as needed */}
        </select>
      </div>

      <div className="job-card-grid">
        {filteredJobs.map((job, index) => (
          <div className="hr-can-job-card" key={index}>
            <h2>{job.company}</h2>
            <h3>{job.role}</h3>
            <p>{job.location} | {job.salary} | {job.type} | {job.experience}</p>
            <hr />
            <div className="job-footer">
              <span>{job.datePosted}</span>
              <Link to='/job_details_hr'>
              <button className="view-details">View Details</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HRCandidateJob;
