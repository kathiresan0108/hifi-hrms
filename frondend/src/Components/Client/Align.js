import React, { useState } from 'react';
import '../Client/Align.css';
import img from '../Assets/HIFI-IT-PARK.png';
import { FaPlus } from "react-icons/fa";

function Align() {
  const [socialMediaFields, setSocialMediaFields] = useState([{ id: Date.now(), value: '' }]);

  const handleAddField = () => {
    setSocialMediaFields([...socialMediaFields, { id: Date.now(), value: '' }]);
  };

  const handleFieldChange = (id, event) => {
    const newFields = socialMediaFields.map(field =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setSocialMediaFields(newFields);
  };

  return (
    <div className="full-page">
      <img className="logo" src={img} alt="Company Logo" />
      <div className="container">
        <div className='line'>
        <form >
          <div className="field-set">
            <label htmlFor="companyName" className="field-label">Company Name</label>
            <input id="companyName" type="text" className="field-input" placeholder="Enter Your Company Name" />
          </div>

          <div className="field-set">
            <label htmlFor="companyLocation" className="field-label">Company Location</label>
            <input id="companyLocation" type="text" className="field-input" placeholder="Enter Your Location" />
          </div>

          <div className="field-set">
            <label htmlFor="companyEmail" className="field-label">Company Email</label>
            <input id="companyEmail" type="email" className="field-input" placeholder="Enter Your Email" />
          </div>

          <div className="field-set">
            <label htmlFor="companyPhone" className="field-label">Company Phone Number</label>
            <input id="companyPhone" type="number" className="field-input half-width-1" placeholder="+91" />
            <input type="number" className="field-input half-width-2" placeholder="Enter Your Number" />
          </div>

          <div className="field-set">
            <label className="field-label">Company Social Media</label>
            <button type="button" className="add-btn" onClick={handleAddField}>
              Add More <FaPlus className="plus-icon" />
            </button>
            {socialMediaFields.map(field => (
              <div key={field.id} className="bordered-field">
                <input
                  type="text"
                  className="field-input"
                  placeholder="Enter Your Social Media"
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.id, e)}
                />
              </div>
            ))}
          </div>

          <div className="field-set">
            <label htmlFor="companyDept" className="field-label">Company Department</label>
            <input id="companyDept" type="text" className="field-input" placeholder="Enter Your Department"  />
          </div>

          <div className="field-set">
            <label htmlFor="numEmployees" className="field-label">Company no-of-Employees</label>
            <input id="numEmployees" type="number" className="field-input" placeholder="Enter Number of Employees" />
          </div>

          <div className="field-set">
            <label htmlFor="companyWeblink" className="field-label">Company Weblink</label>
            <input id="companyWeblink" type="text" className="field-input" placeholder="Enter Your Weblink" />
          </div>

          <div className="field-set">
            <label htmlFor="companyCeo" className="field-label">Company CEO</label>
            <input id="companyCeo" type="text" className="field-input" placeholder="Enter CEO's Name" required />
          </div>

          <div className="field-set">
            <label htmlFor="startYear" className="field-label">Start Year</label>
            <input id="startYear" type="number" className="field-input" placeholder="Enter Start Year" required />
          </div>

          <div className="field-set">
            <label htmlFor="annualIncome" className="field-label">Annual Income</label>
            <input id="annualIncome" type="number" className="field-input" placeholder="Enter Annual Income" />
          </div>

          <div className="field-set">
            <label htmlFor="netProfit" className="field-label">Net Profit</label>
            <input id="netProfit" type="number" className="field-input" placeholder="Enter Net Profit" />
          </div>

          <div className="field-set">
            <label htmlFor="branchNo" className="field-label">Company branch Number</label>
            <input id="branchNo" type="number" className="field-input" placeholder="Enter Branch Number" />
          </div>

          <div className="field-set">
            <label htmlFor="companyCertification" className="field-label">Company Certification</label>
            <input id="companyCertification" type="text" className="field-input" placeholder="Enter Certification" />
          </div>

          <div className="field-set">
            <label htmlFor="companyLicense" className="field-label">Company License</label>
            <input id="companyLicense" type="text" className="field-input" placeholder="Enter License Number" />
          </div>

          <div className="form-actions">
            <button type="reset" className="reset">Reset</button>
            <button type="submit" className="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Align;
