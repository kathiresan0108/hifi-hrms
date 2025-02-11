import React, { useState, useEffect } from 'react';
import './CandidateUpdateForm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../Home/Footer/footer';
import Header from '../../Home/Header/header';
import axios  from 'axios'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CandidateUpdateForm() {
  const technicalSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'];
  const nonTechnicalSkills = ['Communication', 'Problem-solving', 'Teamwork', 'Time Management', 'Leadership'];
  const [about_me,  setAboutMe] = useState([{ photo: null, firstname: '', lastname: '', dob: '', gender: '', email: '', phone: '', current_position: '' , current_position_at: '' , marital_status: '' , country: '' , state: '' , city: '' , pincode: ''  , address: '' }]);
  const [educationDetails, setEducationDetails] = useState([{ schoolName: '', board: '', qualification: '',percentage:'', specialization: '', startYear: '', endYear: '', cgpa: '' }]);
  const [certifications, setCertifications] = useState([{ certificateName: '', issuedOrganization: '', issueOfDate: '', certification_input: '' }]);
  const[course ,setCourse]=useState([{course_name:'',institute_name:'',course_duration_start:'', course_duration_end:'',license:''}])
  const [selectedexpType, setSelectedexpType] = useState('Experienced'); 
  const [experienceDetails, setExperienceDetails] = useState([{ experience_status: selectedexpType, companyName: '', domain: '', jobRole: '', yearOfExperience: '', salaryPerAnnum: '' }]); 
  const[required_files ,setRequiredFiles]=useState([{resume:'',signature:'',declaration: false }])
  const [selectedSkill, setSelectedSkill] = useState('Technical');
  const [skill ,setSkill]= useState([{skill_type: selectedSkill,skill:'',area_of_interest:'',expected_ctc:''}]);
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to access passed state
  const [userData, setUserData] = useState(null);

  // Define the fetchUserData function
    const fetchUserData = async () => {
      try {
        const userId = location.state?.user_id || localStorage.getItem('user_id');
        console.log(userId);
        const response = await axios.get(`http://localhost:8000/api/user-profile/${userId}`);
        const data = response.data;
        console.log('Fetched data:', response.data);

        setUserData(response.data); // Store the fetched data in state
        setAboutMe(data.about_me);
        setEducationDetails(data.educationDetails || []);
        setExperienceDetails(data.experienceDetails || []);
        setCertifications(data.certifications || []);
        setCourse(data.courses || []);
        setSkill(data.skills || []);
        setRequiredFiles([{ 
          resume: data.resume, 
          signature: data.signature, 
          declaration: data.declaration 
        }]);
        
        console.log('about_me state:', about_me);
        console.log('course state:', course);
        console.log('skill state:', skill);
  
        console.log();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

  const handleabout_meChange = (e, index) => {
    const { name, value, files } = e.target;
    const newAboutMe = [...about_me];
  
    if (name === "photo" && files.length > 0) {
      // If the input is for the photo field
      newAboutMe[index][name] = files[0]; // Store the file object
    } else {
      // For other text fields
      newAboutMe[index][name] = value;
    }
  
    setAboutMe(newAboutMe);
  };
  
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationDetails = [...educationDetails];
  
    // Update the value of the specific field for the selected index
    updatedEducationDetails[index][name] = value;
  
    // Update the state
    setEducationDetails(updatedEducationDetails);
  };

  const handleexpChange = (type) => {
    setSelectedexpType(type); // Update the selected experience type
  
    if (type === 'Fresher') {
      // If "Fresher" is selected, reset the experienceDetails with fresher-specific fields
      setExperienceDetails([
        {
          experience_status: 'Fresher',
          companyName: null,
          domain: null,
          jobRole: null,
          yearOfExperience: null,
          salaryPerAnnum: null,
        },
      ]);
    } else if (type === 'Experienced') {
      // If "Experienced" is selected, reset the experienceDetails with experienced-specific fields
      setExperienceDetails([
        {
          experience_status: 'Experienced',
          companyName: '',
          domain: '',
          jobRole: '',
          yearOfExperience: '',
          salaryPerAnnum: '',
        },
      ]);
    }
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperienceDetails = [...experienceDetails];
  
    // Update the specific field for the selected experience index
    updatedExperienceDetails[index][name] = value;
  
    // Update the state
    setExperienceDetails(updatedExperienceDetails);
  };

  const handleCourse = (index, e) => {
    const { name, value } = e.target;
    const updatedCourses = [...course];
  
    // Update the specific field for the selected course index
    updatedCourses[index][name] = value;
  
    // Update the state
    setCourse(updatedCourses);
  };
  
  const handleCertificationChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedCertifications = [...certifications];
  
    if (name === "certification_input" && files.length > 0) {
      // Handle file input for certification
      updatedCertifications[index][name] = files[0]; // Store the file object
    } else {
      // Update the specific field for the selected certification index
      updatedCertifications[index][name] = value;
    }
  
    // Update the state
    setCertifications(updatedCertifications);
  };

  const handleSkill = (index, { name, value }) => {
    const updatedSkills = [...skill];
  
    // Update the specific field for the selected skill index
    updatedSkills[index][name] = value;
  
    // Update the state
    setSkill(updatedSkills);
  };

  const handleRequiredFiles = (index, e) => {
    const { name, value, files } = e.target;
    const updatedRequiredFiles = [...required_files];
  
    if (files.length > 0) {
      // If the field is a file input, update with the selected file
      updatedRequiredFiles[index][name] = files[0]; // Store the file object
    } else {
      // For other fields, just update the value
      updatedRequiredFiles[index][name] = value;
    }
  
    // Update the state
    setRequiredFiles(updatedRequiredFiles);
  };
  

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userId = location.state?.user_id || localStorage.getItem('user_id');
    const formData = new FormData();
  
    // Populate formData similar to registration
    formData.append('user', userId);
    formData.append('about_me', JSON.stringify(about_me[0]));
    formData.append('education_details', JSON.stringify(educationDetails));
    formData.append('experience_details', JSON.stringify(experienceDetails));
    formData.append('certifications', JSON.stringify(certifications));
    formData.append('course', JSON.stringify(course));
    formData.append('skill', JSON.stringify(skill));
    formData.append('required_files', JSON.stringify(required_files));
  
    try {
      await axios.put(`http://localhost:8000/api/user-profile/${userId}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Profile updated successfully!', {
        onClose: () => navigate('/candidate_welcome'), // Navigate after the toast closes
    });
    } catch (error) {
      toast.error('Update failed. Please try again.');
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit} className="candidate-form">
        <div className="section about">
          <h2>About Me</h2>
          
          <label>Photo</label>
          <input
            type="file"
            accept="image/*"
            name="photo"
            className="input-file"
            onChange={(e) => handleabout_meChange(e, 0)}
          />
          {about_me[0]?.photo && (
            <img
              src={`http://localhost:8000${about_me[0].photo}`}
              alt="Current"
              className="preview-photo"
          />
          )}

          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="input-field"
            value={about_me[0]?.firstname || ""}
            onChange={(e) => handleabout_meChange(e, 0)}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="input-field"
            value={about_me[0]?.lastname || ""}
            onChange={(e) => handleabout_meChange(e, 0)}
          />

          <label>D.O.B</label>
          <input
            type="date"
            name="dob"
            className="input-field"
            value={about_me[0]?.dob || ""}
            onChange={(e) => handleabout_meChange(e, 0)}
          />

          <label>Gender</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={about_me[0]?.gender === "Male"}
                onChange={(e) => handleabout_meChange(e, 0)}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={about_me[0]?.gender === "Female"}
                onChange={(e) => handleabout_meChange(e, 0)}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={about_me[0]?.gender === "Others"}
                onChange={(e) => handleabout_meChange(e, 0)}
              /> Others
            </label>
          </div>
          <label>Email</label>
          <input type="text" name="email" placeholder="email" className="input-field" onChange={(e) => handleabout_meChange( e,0)} value={about_me[0]?.email || ""}/>

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="phoneNumber" className="input-field" onChange={(e) => handleabout_meChange( e,0)} value={about_me[0]?.phone || ""} />

          <label>Current Position</label>
          <input type="text" name="current_position" placeholder="Current Position" className="input-field" onChange={(e) => handleabout_meChange(e,0)} value={about_me[0]?.current_position || ""}/>

          <label>Current Position at</label>
          <input type="text" name="current_position_at" placeholder="Current Position At" className="input-field" onChange={(e) => handleabout_meChange(e,0)} value={about_me[0]?.current_position_at || ""}/>

          <label>Marital Status</label>
          <div className="marital-group">
            <label><input type="radio" name="marital_status" value="Single"  checked={about_me[0]?.marital_status === "Single"} onChange={(e) => handleabout_meChange(e, 0)} />  Single</label>
            <label><input type="radio" name="marital_status" value="Married"  checked={about_me[0]?.marital_status === "Married"} onChange={(e) => handleabout_meChange(e, 0)}/> Married</label>
            <label><input type="radio" name="marital_status" value="Others"  checked={about_me[0]?.marital_status === "Others"}  onChange={(e) => handleabout_meChange(e, 0)}/>  Others</label>
          </div>


          <label>Address</label>
          <input type="text" name="address" placeholder="Enter your address" className="input-field" onChange={(e) => handleabout_meChange(e,0)} value={about_me[0]?.address || ""}/>

          <label>City</label>
          <input type="text" name="city" placeholder="City" className="input-field" onChange={(e) => handleabout_meChange(e,0)} value={about_me[0]?.city || ""}/>

          <label>Pincode</label>
          <input type="text" name="pincode" placeholder="Pincode" className="input-field" onChange={(e) => handleabout_meChange(e,0)} value={about_me[0]?.pincode || ""}/>

          <label>State</label>
          <input type="text" name="state" placeholder="State" className="input-field" onChange={(e) => handleabout_meChange( e,0)} value={about_me[0]?.state || ""}/>

          <label>Country</label>
          <input type="text" name="country" placeholder="Country" className="input-field" onChange={(e) => handleabout_meChange(e,0)} value={about_me[0]?.country || ""}/>
        </div>

        <div className="section">
          <h2>Education Details</h2>
          {educationDetails.map((education, index) => (
            <div key={index} className="education-group">
              <label>School/College Name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="School/College Name"
                className="input-field"
                value={education.schoolName || ""}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <label>Board/University</label>
              <input
                type="text"
                name="board"
                placeholder="Board/University"
                className="input-field"
                value={education.board || ""}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <label>Qualification/Degree</label>
              <input
                type="text"
                name="qualification"
                placeholder="Qualification/Degree"
                className="input-field"
                value={education.qualification || ""}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <label>Specialization/Department</label>
              <input
                type="text"
                name="specialization"
                placeholder="Specialization/Department"
                className="input-field"
                value={education.specialization || ""}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <label>Start Year</label>
              <input
                type="date"
                name="startYear"
                className="input-field"
                value={education.startYear || ""}
                onChange={(e) => handleEducationChange(index, e)}
              />

              <label>End Year</label>
              <input
                type="date"
                name="endYear"
                className="input-field"
                value={education.endYear || ""}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Experience Details</h2>

          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <button
              type="button"
              className={`exp-button ${selectedexpType === 'Fresher' ? 'active' : ''}`}
              onClick={() => handleexpChange('Fresher')}
            >
              Fresher
            </button>
            <button
              type="button"
              className={`exp-button ${selectedexpType === 'Experienced' ? 'active' : ''}`}
              onClick={() => handleexpChange('Experienced')}            
            >
              Experienced
            </button>
          </div>

          {experienceDetails.map((experience, index) => (
            <div key={index} className="experience-group">
              {selectedexpType === 'Experienced' && (
                <>
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="input-field"
                    value={experience.companyName || ""}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />

                  <label>Domain</label>
                  <input
                    type="text"
                    name="domain"
                    placeholder="Domain"
                    className="input-field"
                    value={experience.domain || ""}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />

                  <label>Job Role</label>
                  <input
                    type="text"
                    name="jobRole"
                    placeholder="Job Role"
                    className="input-field"
                    value={experience.jobRole || ""}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />

                  <label>Year of Experience</label>
                  <input
                    type="text"
                    name="yearOfExperience"
                    placeholder="Year of Experience"
                    className="input-field"
                    value={experience.yearOfExperience || ""}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />

                  <label>Salary per Annum</label>
                  <input
                    type="number"
                    name="salaryPerAnnum"
                    placeholder="Salary per Annum"
                    className="input-field"
                    value={experience.salaryPerAnnum || ""}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Courses</h2>
          {course.map((courseData, index) => (
            <div key={index} className="course-group">
              <label>Course Name</label>
              <input
                type="text"
                name="course_name"
                placeholder="Course Name"
                className="input-field"
                value={courseData.course_name || ""}
                onChange={(e) => handleCourse(index, e)}
              />

              <label>Institute Name</label>
              <input
                type="text"
                name="institute_name"
                placeholder="Institute Name"
                className="input-field"
                value={courseData.institute_name || ""}
                onChange={(e) => handleCourse(index, e)}
              />

              <label>Course Duration</label>
              <div className="coursestart">
                <label><b>Start</b></label>
                <input
                  type="date"
                  name="course_duration_start"
                  className="input-field"
                  value={courseData.course_duration_start || ""}
                  onChange={(e) => handleCourse(index, e)}
                />
                <label><b>End</b></label>
                <input
                  type="date"
                  name="course_duration_end"
                  className="input-field"
                  value={courseData.course_duration_end || ""}
                  onChange={(e) => handleCourse(index, e)}
                />
              </div>

              <label>License</label>
              <input
                type="text"
                name="license"
                placeholder="License"
                className="input-field"
                value={courseData.license || ""}
                onChange={(e) => handleCourse(index, e)}
              />
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Certifications</h2>
          {certifications.map((certification, index) => (
            <div key={index} className="certification-group">
              <label>Certificate Name</label>
              <input
                type="text"
                name="certificateName"
                placeholder="Certificate Name"
                className="input-field"
                value={certification.certificateName || ""}
                onChange={(e) => handleCertificationChange(index, e)}
              />

              <label>Issued Organization</label>
              <input
                type="text"
                name="issuedOrganization"
                placeholder="Issued Organization"
                className="input-field"
                value={certification.issuedOrganization || ""}
                onChange={(e) => handleCertificationChange(index, e)}
              />

              <label>Date of Issue</label>
              <input
                type="date"
                name="issueOfDate"
                className="input-field"
                value={certification.issueOfDate || ""}
                onChange={(e) => handleCertificationChange(index, e)}
              />

              <label>Certification Input</label>
              <input
                type="file"
                name="certification_input"
                className="input-file"
                onChange={(e) => handleCertificationChange(index, e)}
              />
              {certification.certification_input && (
                <a
                  href={`http://localhost:8000${certification.certification_input}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Uploaded File
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Skills</h2>
          {skill.map((sk, index) => (
            <div key={index} className="skill-group">
              <label>Skill</label>
              <select
                className="input-field"
                name="skill"
                value={sk.skill || ""}
                onChange={(e) => handleSkill(index, { name: 'skill', value: e.target.value })}
              >
                <option value="">Select Skill</option>
                {technicalSkills.concat(nonTechnicalSkills).map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label>Area of Interest</label>
              <input
                type="text"
                name="area_of_interest"
                placeholder="Area of Interest"
                className="input-field"
                value={sk.area_of_interest || ""}
                onChange={(e) => handleSkill(index, { name: 'area_of_interest', value: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Required Files</h2>
          {required_files.map((fileData, index) => (
            <div key={index} className="required-group">
              <label>Resume</label>
              <input
                type="file"
                name="resume"
                className="input-file"
                onChange={(e) => handleRequiredFiles(index, e)}
              />
              {fileData.resume && (
                <a
                  href={`http://localhost:8000${fileData.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Uploaded Resume
                </a>
              )}

              <label>Signature</label>
              <input
                type="file"
                name="signature"
                className="input-file"
                onChange={(e) => handleRequiredFiles(index, e)}
              />
              {fileData.signature && (
                <a
                  href={`http://localhost:8000${fileData.signature}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Uploaded Signature
                </a>
              )}
            </div>
          ))}
        </div>
      
        <div className="candidate-submit-div">
          <button type="submit" className="candidate-submit-button">Update</button>
          <button type="button" onClick={fetchUserData} className="cancel-button">Reset</button>
        </div>
      </form>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}
export default CandidateUpdateForm;
