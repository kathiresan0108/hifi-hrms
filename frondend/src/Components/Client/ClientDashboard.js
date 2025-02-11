// Dashboard.js
import React from 'react';
import './Dashboard.css';
import JobCard from './Jobcards';
import { Link } from 'react-router-dom';
import Header from '../Home/Header/header';    
import ClientHeader from './ClientHeader/ClientHeader';
import Footer from '../Home/Footer/footer';

function ClientDashboard() {
  const jobData = [
    { company: "Company Name", role: "Role", salary: "Salary", vacancies: "No. of Vacancies" },
    { company: "Company Name", role: "Role", salary: "Salary", vacancies: "No. of Vacancies" },
    { company: "Company Name", role: "Role", salary: "Salary", vacancies: "No. of Vacancies" },
    { company: "Company Name", role: "Role", salary: "Salary", vacancies: "No. of Vacancies" },
  ];

  return (
    <div>
      <ClientHeader/>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>WELCOME TO HI-FI HRMS</h1>
        </div>
        <div className="posted-jobs">
          <h2>Posted Jobs</h2>
          <div className="job-cards-grid">
            {jobData.map((job, index) => (
          <Link className='link' to="/post_detail">
              <JobCard key={index} job={job} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>  
  );
}

export default ClientDashboard;
