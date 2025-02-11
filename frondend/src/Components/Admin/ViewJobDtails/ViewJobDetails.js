import React from 'react';
import './ViewJobDetails.css';
import Footer from '../../Home/Footer/footer';
import AdminHeader from '../AdminHeader/AdminHeader';
import { Link } from 'react-router-dom';

const ViewJobDetails = () => {
  const details = [
    { label: 'Company Name', value: 'From Database' },
    { label: 'Job Role', value: 'From Database' },
    { label: 'Job Details', value: 'From Database' },
    { label: 'Skill', value: 'From Database' },
    { label: 'Qualification', value: 'From Database' },
    { label: 'Gender', value: 'From Database' },
    { label: 'Area of Interest', value: 'From Database' },
    { label: 'Specialization', value: 'From Database' },
    { label: 'Fresher / Experience', value: 'From Database' },
    { label: 'Degree', value: 'From Database' },
    { label: 'Passed Out Year', value: 'From Database' },
    { label: 'Age', value: 'From Database' },
    { label: 'Location', value: 'From Database' },
    { label: 'Part-time/Full-time', value: 'From Database' },
    { label: 'Bond', value: 'From Database' },
    { label: 'Interview Date', value: 'From Database' },
    { label: 'Interview Location', value: 'From Database' },
    { label: 'No. of Vacancy', value: 'From Database' },
    { label: 'Salary Details', value: 'From Database' },
    { label: 'Description', value: 'From Database' },
    { label: 'No. of Vacancy Required', value: 'From Database' },
    { label: 'Certification', value: 'From Database' },
    { label: 'Course', value: 'From Database' },
  ];

  return (
    <div>
      <AdminHeader/>
    <div className="job-details-container">
      <h1 className="title">View Job Details</h1>
      <table className="details-table">
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="detail-row">
              <td className="detail-label">{detail.label}</td>
              <td className="detail-separator">:</td>
              <td className="detail-value">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className='link' to="/applied_jobs">
      <button className="view-candidates-button">View Applied Candidates</button>
      </Link>
    </div>
    <Footer/>
    </div>
  );
};

export default ViewJobDetails;
