import React from 'react';
import './JobCards.css';
import { MdEdit } from "react-icons/md";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.job_roles}</h3>
      <p>{job.location}</p>
      <p>{job.salary_details}</p>
      <p>{job.no_of_vacancies}</p>
      <button className="edit-button">
        <MdEdit /> Edit
      </button>
    </div>
  );
}

export default JobCard;
