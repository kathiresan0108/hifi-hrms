import React from 'react';
import './ClientDatabasePage.css'; // Import the CSS file
import Footer from '../../Home/Footer/footer';
import HRHeader from '../HRHeader/HRHeader';

const HRClientDatabasePage = () => {
  return (
    <div>
      <HRHeader/>
    <div className="dashboard">
    <h2 className="head">Client Details</h2>
      <div className="filters">
        <select className="dropdown">
          <option>Select Skill</option>
        </select>
        <select className="dropdown">
          <option>Select Job Role</option>
        </select>
        <select className="dropdown">
          <option>Select Location</option>
        </select>
        <select className="dropdown">
          <option>Select Salary</option>
        </select>
        <select className="dropdown">
          <option>Select Experience</option>
        </select>
        <select className="dropdown">
          <option>Select Job Type</option>
        </select>
      </div>

      <div className="table-container2">
        {/* You can use a table or divs to create your dynamic content */}
        <div className="table-content"></div>
      </div>

      <div className="actions1">
        <button className="export-btn">Export(xls)</button>
        <div className="print-dropdown">
          <button className="print-btn">Print</button>
          <select className="print-options">
            <option>Selected</option>
            <option>Print all</option>
          </select>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default HRClientDatabasePage;
