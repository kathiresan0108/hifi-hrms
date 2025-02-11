// JobCard.js
import React from 'react';
import './JobCards.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p>{job.salary}</p>
      <p>{job.vacancies}</p>
      <button className="edit-button">Edit</button>
    </div>
  );
}

export default JobCard;
