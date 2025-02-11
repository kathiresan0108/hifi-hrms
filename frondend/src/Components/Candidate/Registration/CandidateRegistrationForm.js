import React, { useState, useEffect } from 'react';
import './CandidateRegistrationForm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../Home/Footer/footer';
import Header from '../../Home/Header/header';
import axios  from 'axios'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CandidateRegistrationForm() {
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

  useEffect(() => {
    // Get user_id from location.state or localStorage
    const userId = location.state?.user_id || localStorage.getItem('user_id'); 
    if (userId) {
      localStorage.setItem('user_id', userId); // Save to localStorage
      localStorage.setItem('userId', userId); // Save to localStorage
    }
  }, [location.state]);

  const handleabout_meChange = (e, index) => {
    const { name, value, files } = e.target;
    const newaboutMe = [...about_me];

    if (name === "photo" && files.length > 0) {
      // If the input is for the photo field
      newaboutMe[index][name] = files[0]; // Store the file object
    } else {
      // For other text fields
      newaboutMe[index][name] = value;
    }

    setAboutMe(newaboutMe);
  };



  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducationDetails = [...educationDetails];
    newEducationDetails[index][name] = value;
    setEducationDetails(newEducationDetails);
  };

  const addEducationField = () => {
    setEducationDetails([...educationDetails, { schoolName: '', board: '', qualification: '', specialization: '', startYear: '', endYear: '', cgpa: '' }]);
  };

  const removeEducationField = (index) => {
    const newEducationDetails = [...educationDetails];
    newEducationDetails.splice(index, 1);
    setEducationDetails(newEducationDetails);
  };

  const handleSkill = (index, { name, value }) => {
    const updatedSkills = [...skill];
    updatedSkills[index][name] = value;
    setSkill(updatedSkills);
  };

  const handleSkillChangeValue = (index, value) => {
    const updatedSkills = [...skill];
    updatedSkills[index].skill = value; // Update with plain string
    setSkill(updatedSkills);
  };

  const handleCourse = (index, e) => {
    const { name, value } = e.target;
    const newCourse = [...course];
    newCourse[index][name] = value;
    setCourse(newCourse);
  };
  const addCourse= () => {
    setCourse([...course, { course_name: '', institute_name: '', course_duration_start: '', course_duration_end: '', license:''}]);
  };

  const removeCourse= (index) => {
    const newCourse = [...course];
    newCourse.splice(index, 1);
    setCourse(newCourse);
  };

  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const newCertifications = [...certifications];
    newCertifications[index][name] = value;
    setCertifications(newCertifications);
  };
  const addCertificationField = () => {
    setCertifications([...certifications, { certificateName: '', issuedOrganization: '', issueOfDate: '', certification_input: '' }]);
  };

  const removeCertificationField = (index) => {
    const newCertifications = [...certifications];
    newCertifications.splice(index, 1);
    setCertifications(newCertifications);
  };


  
  const handleRequiredFiles = (index, e) => {
    const { name, value } = e.target;
    const newRequiredFiles = [...required_files];
    newRequiredFiles[index][name] = value;
    setRequiredFiles(newRequiredFiles);
  };

  const handleDeclaration = (index, e) => {
    const { checked } = e.target; // `checked` gives true or false
    setRequiredFiles((prev) =>
        prev.map((item, i) =>
            i === index ? { ...item, declaration: checked } : item
        )
    );
};


   
  // Function to handle skill selection
  const handleSkillChange = (type) => {
    setSelectedSkill(type);
  };
  
    


  const handleexpChange = (type) => {
    setSelectedexpType(type); // Update the selected experience type
    if (type === 'Fresher') {
      setExperienceDetails([{
        experience_status: 'Fresher',
        companyName: null,
        domain: null,
        jobRole: null,
        yearOfExperience: null,
        salaryPerAnnum: null,
      }]);
    } else if (type === 'Experienced') {
      setExperienceDetails([{
        experience_status: 'Experienced',
        companyName: '',
        domain: '',
        jobRole: '',
        yearOfExperience: '',
        salaryPerAnnum: '',
      }]);
    }
  };

  const handleExperienceChange = (index, event) => {
    const newExperienceDetails = [...experienceDetails];
    newExperienceDetails[index][event.target.name] = event.target.value;
    setExperienceDetails(newExperienceDetails);
  };

  const addExperienceField = () => {
    setExperienceDetails([
      ...experienceDetails,
      { companyName: '', domain: '', jobRole: '', yearOfExperience: '', salaryPerAnnum: '' }
    ]);
  };

  const removeExperienceField = (index) => {
    const newExperienceDetails = experienceDetails.filter((_, i) => i !== index);
    setExperienceDetails(newExperienceDetails);
  };

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  
    // Validate About Me section
    for (let index = 0; index < about_me.length; index++) {
      const about = about_me[index];
      if (!about.photo) {
        toast.error('Photo is required');
        return false;
      }
      // if (about.photo) {
      //   const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // Add more types as needed
      //   if (!validImageTypes.includes(about.photo.type)) {
      //     toast.error('Invalid file type. Please upload a valid image (JPG, PNG, etc.).');
      //     return false;
      //   }
      
      //   if (about.photo.size) {
      //     const photoSize = about.photo.size / 1024; // Convert bytes to KB
      //     if (photoSize < 50 || photoSize > 150) {
      //       toast.error('Photo size must be between 50KB and 150KB.');
      //       return false;
      //     }
      //   } else {
      //     toast.error('Invalid photo file.');
      //     return false;
      //   }
      // }
      if (!about.firstname) {
        toast.error('First name is required');
        return false;
      }
      if (!about.lastname) {
        toast.error('Last name is required');
        return false;
      }
      if (!about.dob) {
        toast.error('Please enter your date of birth.');
        return false;
      }
      const age = new Date().getFullYear() - new Date(about.dob).getFullYear();
      if (age < 18) {
        toast.error('Age must be 18 or older.');
        return false;
      }
      if (!about.gender) {
        toast.error('Please select your gender.');
        return false;
      }
      if (!about.email) {
        toast.error('Please enter your email.');
        return false;
      }
      if (!emailRegex.test(about.email)) {
        toast.error('Invalid email');
        return false;
      }
      if (!about.phone) {
        toast.error('Please enter your phone number');
        return false;
      }
      if (!about.phone.match(/^\d{10}$/)) {
        toast.error('Invalid phone number');
        return false;
      }
      if (!about.marital_status) {
        toast.error('Please select your marital status.');
        return false;
      }
      if (!about.address) {
        toast.error('Please enter your address.');
        return false;
      }
      if (!about.city) {
        toast.error('Please enter your city.');
        return false;
      }
      if (!about.pincode) {
        toast.error('Please enter your pincode.');
        return false;
      }
      if (!about.pincode.match(/^\d{6}$/)) {
        toast.error('Invalid pincode.');
        return false;
      }
      if (!about.state) {
        toast.error('Please enter your state.');
        return false;
      }
      if (!about.country) {
        toast.error('Please enter your country.');
        return false;
      }
    }
  
    // Validate Education Details
    for (let index = 0; index < educationDetails.length; index++) {
      const education = educationDetails[index];
      if (!education.schoolName) {
        toast.error('School/College Name is required');
        return false;
      }
      if (!education.board) {
        toast.error('Board Name is required');
        return false;
      }
      if (!education.qualification) {
        toast.error('Qualification is required');
        return false;
      }
      if (!education.percentage) {
        toast.error('Percentage is required');
        return false;
      }
    }
  
    // // Validate Courses
    // for (let index = 0; index < course.length; index++) {
    //   const courses = course[index];
    //   if (!courses.course_name) {
    //     toast.error('Course Name is required');
    //     return false;
    //   }
    // }
  
    // // Validate Certifications
    // for (let index = 0; index < certifications.length; index++) {
    //   const certification = certifications[index];
    //   if (!certification.certificateName) {
    //     toast.error('Certificate Name is required');
    //     return false;
    //   }
    // }
  
    // Validate Required Files
    for (let index = 0; index < required_files.length; index++) {
      const file = required_files[index];
      if (!file.resume) {
        toast.error('Resume is required');
        return false;
      }
      if (!file.signature) {
        toast.error('Sigature is required');
        return false;
      }
      if (!file.declaration) {
        toast.error('Declaration checkbox must be checked');
        return false;
      }
    }
  
    // If all validations pass
    return false;
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validateForm()) {
    //   return; // Stop form submission if validation fails
    // }
    const errors = validateForm();

    if (errors.length > 0) {
      toast.error(errors.join('\n'));
      return;
    }

    console.log(skill.skill);
    // Ensure `about_me` is a dictionary (not a list)
    let aboutMeData = about_me;
    if (Array.isArray(about_me) && about_me.length > 0) {
        aboutMeData = about_me[0]; // Extract the first element
    }

    // Clean the `photo` path in `about_me`
    // if (aboutMeData.photo) {
    //     aboutMeData.photo = aboutMeData.photo.replace("C:\\fakepath\\", "");
    // }

    if (certifications.certification_input) {
      certifications.certification_input = certifications.certification_input.replace("C:\\fakepath\\", "");
  }


    const formData = new FormData();
    formData.append('user', location.state?.user_id || '');



    // Add all fields except `photo` as JSON
    const aboutMeData1 = { ...about_me[0] }; // Assuming single object; adjust if multiple
    const photo = aboutMeData1.photo; // Extract the photo field
    delete aboutMeData1.photo; // Remove photo from JSON data

    formData.append('about_me', JSON.stringify(aboutMeData)); // Pass the corrected dictionary
    formData.append("photo", photo); // Append photo separately

    const formattedCertifications = certifications.map(cert => ({
      certificate_name: cert.certificateName,
      issued_organization: cert.issuedOrganization,
      issue_date: cert.issueOfDate, // Ensure the date is in a correct format, like 'YYYY-MM-DD'
      certification_input: cert.certification_input // Assuming this is the file input
  }));

  const formattedEducationDetails = educationDetails.map(edu => ({
    school_name: edu.schoolName, // Match the field name in the model
    board: edu.board,
    qualification: edu.qualification,
    percentage: edu.percentage,
    specialization: edu.specialization,
    start_year: edu.startYear, // Match the field name in the model
    end_year: edu.endYear, // Match the field name in the model
    cgpa: edu.cgpa
}));

const formattedExperienceDetails = experienceDetails.map(exp => ({
  experience_status: selectedexpType,
  company_name: exp.companyName,  // Match the field name in the model
  domain: exp.domain,  // Match the field name in the model
  job_role: exp.jobRole,  // Match the field name in the model
  year_of_experience: exp.yearOfExperience,  // Match the field name in the model
  salary_per_annum: exp.salaryPerAnnum  // Match the field name in the model
}));

const formattedRequiredFiles = required_files.map(req => ({
  resume: req.resume,  // Match the field name in the model
  signature: req.signature,  // Match the field name in the model
  declaration: req.declaration,  // Match the field name in the model
}));

const formattedTechnicalSkills = technicalSkills.map((skill) => ({ skill }));
const formattedNonTechnicalSkills = nonTechnicalSkills.map((skill) => ({ skill }));

// const formattedSkill = skill.map(skill => ({
//   skill_type: selectedSkill,  // Match the field name in the model
//   skill: formattedTechnicalSkills || formattedNonTechnicalSkills,  // Match the field name in the model
//   area_of_interest: skill.area_of_interest,  // Match the field name in the model
//   expected_ctc: skill.expected_ctc,  // Match the field name in the model
// }));

const formattedSkill = skill.map((item) => {
  const selectedSkills =
      selectedSkill === 'Technical' ? formattedTechnicalSkills : formattedNonTechnicalSkills;

  const matchedSkill = selectedSkills.find((s) => s.skill === item.skill);
  console.log(matchedSkill);

  return {
      skill_type: selectedSkill,
      skill: matchedSkill || {}, // Return the matched skill or empty object
      area_of_interest: item.area_of_interest,
      expected_ctc: item.expected_ctc,
  };
});



    formData.append('certifications', JSON.stringify(formattedCertifications));
    formData.append('education_details', JSON.stringify(formattedEducationDetails));
    formData.append('experience_details', JSON.stringify(formattedExperienceDetails));
    formData.append('course', JSON.stringify(course));
    formData.append('skill', JSON.stringify(formattedSkill));
    formData.append('required_files', JSON.stringify(formattedRequiredFiles));

    try {
        await axios.post('http://localhost:8000/api/user-profile/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Registration successful!', {
        
          onClose: () => navigate('/candidate_welcome'), // Navigate after the toast closes
      });
    }  catch (error) {
      
      toast.error('Form submission failed. Please check the form data and try again.');
      console.error('Error submitting form:', error.response?.data || error.message);
  }
};





  return (
    <div>
      <Header/>
    <form onSubmit={handleSubmit} className="candidate-form">
      {about_me.map((about, index) => (

        <div className="section about" key={index}>
          <h2>About Me</h2>
          
          
          <label>Photo</label>
          <input type="file" accept="image/*" name="photo" className="input-file"  onChange={(e) => handleabout_meChange( e,index)}/>

          <label>First Name</label>
          <input type="text" name="firstname" placeholder="First Name" className="input-field" value={about.firstname} onChange={(e) => handleabout_meChange( e,index)}/>

          <label>Last Name</label>
          <input type="text" name="lastname" placeholder="Last Name" className="input-field" value={about.lastname} onChange={(e) => handleabout_meChange( e,index)}/>

          <label>D.O.B</label>
          <input type="date" name="dob" className="input-field" onChange={(e) => handleabout_meChange( e,index)} value={about.dob}/>

          <label>Gender</label>
          <div className="gender-group" >
            <label><input type="radio" name="gender" value="Male" checked={about.gender === "Male"}  onChange={(e) => handleabout_meChange(e, index)}/> Male</label>
            <label><input type="radio" name="gender" value="Female"  checked={about.gender === "Female"}  onChange={(e) => handleabout_meChange(e, index)}/> Female</label>
            <label><input type="radio" name="gender" value="Others"  checked={about.gender === "Others"} onChange={(e) => handleabout_meChange(e, index)}/> Others</label>
          </div>

          <label>Email</label>
          <input type="text" name="email" placeholder="email" className="input-field" onChange={(e) => handleabout_meChange( e,index)} value={about.email}/>

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="phoneNumber" className="input-field"onChange={(e) => handleabout_meChange( e,index)} value={about.phone} />

          <label>Current Position</label>
          <input type="text" name="current_position" placeholder="Current Position" className="input-field" onChange={(e) => handleabout_meChange(e,index)} value={about.current_position}/>

          <label>Current Position at</label>
          <input type="text" name="current_position_at" placeholder="Current Position At" className="input-field" onChange={(e) => handleabout_meChange(e,index)} value={about.current_position_at}/>

          <label>Marital Status</label>
          <div className="marital-group">
            <label><input type="radio" name="marital_status" value="Single"  checked={about.marital_status === "Single"} onChange={(e) => handleabout_meChange(e, index)} />  Single</label>
            <label><input type="radio" name="marital_status" value="Married"  checked={about.marital_status === "Married"} onChange={(e) => handleabout_meChange(e, index)}/> Married</label>
            <label><input type="radio" name="marital_status" value="Others"  checked={about.marital_status === "Others"}  onChange={(e) => handleabout_meChange(e, index)}/>  Others</label>
          </div>


          <label>Address</label>
          <input type="text" name="address" placeholder="Enter your address" className="input-field" onChange={(e) => handleabout_meChange(e,index)} value={about.address}/>

          <label>City</label>
          <input type="text" name="city" placeholder="City" className="input-field" onChange={(e) => handleabout_meChange(e,index)} value={about.city}/>

          <label>Pincode</label>
          <input type="text" name="pincode" placeholder="Pincode" className="input-field" onChange={(e) => handleabout_meChange(e,index)} value={about.pincode}/>

          <label>State</label>
          <input type="text" name="state" placeholder="State" className="input-field" onChange={(e) => handleabout_meChange( e,index)} value={about.state}/>

          <label>Country</label>
          <input type="text" name="country" placeholder="Country" className="input-field" onChange={(e) => handleabout_meChange(e,index)} value={about.country}/>
        </div>
          ))}
        <div>
      </div>
      <div className="section">
        <h2>Education Details</h2>
        {educationDetails.map((education, index) => (
          <div key={index} className="education-group">
            <label>School/College Name</label>
            <input type="text" name="schoolName" placeholder="School/College Name" className="input-field" value={education.schoolName} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>Board/University</label>
            <input type="text" name="board" placeholder="Board/University" className="input-field" value={education.board} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>Qualification/Degree</label>
            <input type="text" name="qualification" placeholder="Qualification/Degree" className="input-field" value={education.qualification} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>Specialization/Department</label>
            <input type="text" name="specialization" placeholder="Specialization/Department" className="input-field" value={education.specialization} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>Start Year</label>
            <input type="date" name="startYear" className="input-field" value={education.startYear} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>End Year</label>
            <input type="date" name="endYear" className="input-field" value={education.endYear} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>Percentage</label>
            <input type="number" name="percentage" placeholder="Percentage" className="input-field" value={education.percentage} onChange={(e) => handleEducationChange(index, e)} />
            
            <label>CGPA</label>
            <input type="number" name="cgpa" placeholder="CGPA" className="input-field" value={education.cgpa} onChange={(e) => handleEducationChange(index, e)} />

            <div className="button-group">
              <button type="button" className="add-more" onClick={addEducationField}>+ Add More</button>
              {educationDetails.length > 1 && (
                <button type="button" className="remove" onClick={() => removeEducationField(index)}>- Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section">
      <h2>Experience Details</h2>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <button type='button'
          className={`exp-button ${selectedexpType === 'Fresher' ? 'active' : ''}`}
          onClick={() => handleexpChange('Fresher')}
        >
          Fresher
        </button>
        <button type='button'
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
                  value={experience.companyName}
                  onChange={(e) => handleExperienceChange(index, e)}
                />

                <label>Domain</label>
                <input
                  type="text"
                  name="domain"
                  placeholder="Domain"
                  className="input-field"
                  value={experience.domain}
                  onChange={(e) => handleExperienceChange(index, e)}
                />

                <label>Job Role</label>
                <input
                  type="text"
                  name="jobRole"
                  placeholder="Job Role"
                  className="input-field"
                  value={experience.jobRole}
                  onChange={(e) => handleExperienceChange(index, e)}
                />

                <label>Year of Experience</label>
                <input
                  type="text"
                  name="yearOfExperience"
                  placeholder="Year of Experience"
                  className="input-field"
                  value={experience.yearOfExperience}
                  onChange={(e) => handleExperienceChange(index, e)}
                />

                <label>Salary per Annum</label>
                <input
                  type="number"
                  name="salaryPerAnnum"
                  placeholder="Salary per Annum"
                  className="input-field"
                  value={experience.salaryPerAnnum}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </>
            )}

            <div className="button-group">
              {selectedexpType === 'Experienced' && (
                <button type="button" className="add-more" onClick={addExperienceField}>
                  + Add More
                </button>
              )}
              {experienceDetails.length > 1 && (
                <button type="button" className="remove" onClick={() => removeExperienceField(index)}>
                  - Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Courses</h2>
        {course.map((courses, index) => (
          <div key={index} className="certification-group">
            <label>Course Name</label>
            <input type="text" name="course_name" placeholder="Certificate Name" className="input-field" value={courses.course_name} onChange={(e) => handleCourse(index, e)} />
            
            <label>Institute Name</label>
            <input type="text" name="institute_name" placeholder="Institute Name" className="input-field" value={courses.institute_name} onChange={(e) => handleCourse(index, e)} />
            
            <label>Course Duration</label>
            <div className='coursestart'>
            <lable><b>start</b></lable>
            <input type="date" name="course_duration_start" className="input-field" value={courses.course_duration_start} onChange={(e) => handleCourse(index, e)} />
            <lable><b>end</b></lable>
            <input type="date" name="course_duration_end" className="input-field" value={courses.course_duration_end} onChange={(e) => handleCourse(index, e)} />
            </div>
         <label>License</label>
            <input type="text" name="license" placeholder="License" className="input-field" value={courses.license} onChange={(e) => handleCourse(index, e)} />

            <div className="button-group">
              <button type="button" className="add-more" onClick={addCourse}>+ Add More</button>
              {course.length > 1 && (
                <button type="button" className="remove" onClick={() => removeCourse(index)}>- Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Certifications</h2>
        {certifications.map((certification, index) => (
          <div key={index} className="certification-group">
            <label>Certificate Name</label>
            <input type="text" name="certificateName" placeholder="Certificate Name" className="input-field" value={certification.certificateName} onChange={(e) => handleCertificationChange(index, e)} />
            
            <label>Issued Organization</label>
            <input type="text" name="issuedOrganization" placeholder="Issued Organization" className="input-field" value={certification.issuedOrganization} onChange={(e) => handleCertificationChange(index, e)} />
            
            <label> Date of Issue </label>
            <input type="date" name="issueOfDate" className="input-field" value={certification.issueOfDate} onChange={(e) => handleCertificationChange(index, e)} />
           
            <label>Certification Input</label>
            <input type="file" name="certification_input" className="input-file" value={certification.certification_input} onChange={(e) => handleCertificationChange(index, e)} />
              
            <div className="button-group">
              <button type="button" className="add-more" onClick={addCertificationField}>+ Add More</button>
              {certifications.length > 1 && (
                <button type="button" className="remove" onClick={() => removeCertificationField(index)}>- Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section">
      <h2>Skills</h2>
      {skill.map((skill, index) => (
        <div key={index} className="certification-group">
          <label>Skill</label>
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            {/* Button for Technical */}
            <button type='button'
              className={`skill-button ${selectedSkill === 'Technical' ? 'active' : ''}`}
              onClick={() => handleSkillChange('Technical')}
            >
              Technical
            </button>

            {/* Button for Non-Technical */}
            <button type='button'
              className={`skill-button ${selectedSkill === 'Non-Technical' ? 'active' : ''}`}
              onClick={() => handleSkillChange('Non-Technical')}
            >
              Non-Technical
            </button>
          </div>

          {/* Conditional Dropdown */}
          {selectedSkill === 'Technical' && (
          <select
            className="skillset"
            value={skill.skill}
            onChange={(e) => handleSkillChangeValue(index, e.target.value)}
          >
            <option value="">Select Technical Skill</option>
            {technicalSkills.map((techSkill, i) => (
              <option key={i} value={techSkill}>
                {techSkill}
              </option>
            ))}
          </select>
        )}
        {selectedSkill === 'Non-Technical' && (
          <select
            className="skillset"
            value={skill.skill}
            onChange={(e) => handleSkillChangeValue(index, e.target.value)}
          >
            <option value="">Select Non-Technical Skill</option>
            {nonTechnicalSkills.map((nonTechSkill, i) => (
              <option key={i} value={nonTechSkill}>
                {nonTechSkill}
              </option>
            ))}
          </select>
        )}
            <label>Area of Interest</label>
            <input
              type="text"
              name="area_of_interest"
              placeholder="Area of Interest"
              className="input-field"
              value={skill.area_of_interest}
              onChange={(e) => handleSkill(index, { name: 'area_of_interest', value: e.target.value })}
            />

            <label>Expected CTC</label>
            <input
              type="number"
              name="expected_ctc"
              placeholder="Expected CTC"
              className="input-field"
              value={skill.expected_ctc}
              onChange={(e) => handleSkill(index, { name: 'expected_ctc', value: e.target.value })}
            />

              </div>
      ))}
      </div>   

      <div className='section'>
        {required_files.map((required_files, index) => (
        <div key={index} className="required-group">
          <label>Resume CV</label>
          <input type="file" name="resume" className="input-file" value={required_files.resume} onChange={(e) => handleRequiredFiles(index, e)}  />
          <label>Signature</label>
          <input type="file" name="signature" className="input-file" value={required_files.signature} onChange={(e) => handleRequiredFiles(index, e)}  />
        </div>
        ))}
      </div>

        <div className="candidate-submit-div">
          <button type="submit" className="candidate-submit-button">Submit</button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
    </form>
    <Footer/>
    <ToastContainer/>
    </div>
  );
}
export default CandidateRegistrationForm;
