import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API calls
import '../ClientRegistration/CompanyDetails.css';
import Header from '../../Home/Header/header';
import Footer from '../../Home/Footer/footer';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { toast, ToastContainer } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function CompanyDetailsUpdate() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const [linkedin, setLinkedin] = useState([{ company_social_media_Linkedin: '' }]);
  const [instagram, setInstagram] = useState([{ company_social_media_Instagram: '' }]);
  const [facebook, setFacebook] = useState([{ company_social_media_Facebook: '' }]);
  const [whatsapp_group, setWhatsapp_group] = useState([{ company_social_media_Whatsapp_group: '' }]);
  const [twitter, setTwitter] = useState([{ company_social_media_Twitter: '' }]);
  const userId = location.state?.user_id || localStorage.getItem('user_id');
  console.log('User ID:', userId);
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/api/company-details/?user_id=${userId}`)
        .then((response) => {
          const existingData = response.data.find(
            (item) => String(item.user) === String(userId)
          ); // Assuming one entry per user
        if (existingData) {
          setFormData({ ...existingData, id: existingData.id });
            setLinkedin(
              existingData?.company_social_media_Linkedin?.length > 0
                ? existingData.company_social_media_Linkedin.map((link) => ({ company_social_media_Linkedin: link }))
                : [{ company_social_media_Linkedin: '' }]
            );
            setInstagram(existingData?.company_social_media_Instagram?.length > 0 
              ? existingData.company_social_media_Instagram.map((link)=> ({company_social_media_Instagram:link}))
              : [{company_social_media_Instagram: ''}]
);
           setFacebook(existingData?.company_social_media_Facebook?.length >0
            ? existingData.company_social_media_Facebook.map((link)=> ({company_social_media_Facebook:link}))
            :[{company_social_media_Facebook:''}]
           )       
           setWhatsapp_group(existingData?.company_social_media_Whatsapp_group?.length >0
            ? existingData.company_social_media_Whatsapp_group.map((link)=>({company_social_media_Whatsapp_group:link}))
            :[{company_social_media_Whatsapp_group:''}]
           );
           setTwitter(existingData?.company_social_media_Twitter?.length >0
            ?existingData.company_social_media_Twitter.map((link)=>({company_social_media_Twitter:link}))
            :[{company_social_media_Twitter:''}]
           )
          }
        })
        .catch((error) => {
          toast.error('Failed to fetch existing data.');
          console.error('Error fetching data:', error);
        });
    }
  }, [userId]);

  const [formData, setFormData] = useState({
    user: location.state?.user_id || '', // Get user_id from state passed through navigate
    company_name: '',
    company_location: '',
    company_email: '',
    company_phone: '',
    company_department: '',
    company_employees: '',
    company_weblink: '',
    start_year: '',
    annual_income: '',
    net_profit: '',
    company_branch_no: '',
    company_certification: '',
    company_license: '',
  });


  const handleSocialChange = (index, e) => {
    const { value } = e.target;
    const newLinkedin = [...linkedin];
    newLinkedin[index].company_social_media_Linkedin = value;
    setLinkedin(newLinkedin);
  };
  
  const handleInstagramChange = (index, e) => {
    const { value } = e.target;
    const newInstagram = [...instagram];
    newInstagram[index].company_social_media_Instagram = value;
    setInstagram(newInstagram);
  };

  const handleFacebookChange = (index, e) => {
    const { value } = e.target;
    const newFacebook= [...facebook];
    newFacebook[index].company_social_media_Facebook = value;
    setFacebook(newFacebook);
  };
  
  const handlewhatsappGroupChange = (index, e) => {
    const { value } = e.target;
    const newWhatsapp_group= [...whatsapp_group];
    newWhatsapp_group[index].company_social_media_Whatsapp_group = value;
    setWhatsapp_group(newWhatsapp_group);
  };

  const handleTwitterGroupChange = (index, e) => {
    const { value } = e.target;
    const newTwitter= [...twitter];
    newTwitter[index].company_social_media_Twitter = value;
    setTwitter(newTwitter);
  };
  
  // const addSocialField = () => {
  //   setSocialMedia([...socialMedia, { company_social_media: '' }]);
  // };

  // const removeSocialField = (index) => {
  //   const newSocialMedia = [...socialMedia];
  //   newSocialMedia.splice(index, 1);
  //   setSocialMedia(newSocialMedia);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const numberRegex = /^[0-9]+$/;
    const charRegex = /^[a-zA-Z\s]+$/;
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    const linkRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w-]*)*\/?$/;
    const errors = [];
    
    if ((formData.company_name) === '') errors.push(' Please fill the Company Name');
    else if (formData.company_name.length < 4) errors.push('Company Name must be at least 4 characters.');
    else if (!formData.company_location) errors.push('Company Location cannot be empty.');
    else if (!emailRegex.test(formData.company_email)) errors.push('Company Email must be a valid @gmail.com address.');
    else if (!numberRegex.test(formData.company_phone) || formData.company_phone.length !== 10)
      errors.push('Company Phone Number must be exactly 10 digits.');
    else if (!linkRegex.test(linkedin[0].company_social_media_Linkedin)) errors.push('LinkedIn must be a valid link.');
    else if (!linkRegex.test(instagram[0].company_social_media_Instagram)) errors.push('Instagram must be a valid link.');
    else if (!linkRegex.test(facebook[0].company_social_media_Facebook)) errors.push('Facebook must be a valid link.');
    else if (!linkRegex.test(whatsapp_group[0].company_social_media_Whatsapp_group)) errors.push('WhatsApp Group must be a valid link.');
    else if (!linkRegex.test(twitter[0].company_social_media_Twitter)) errors.push('Twitter must be a valid link.');
    else if ((formData.company_weblink) === '') errors.push(' Please fill the Company Weblink');
    else if ((formData.company_department) === '') errors.push(' Please fill the Company Department');
    else if (!charRegex.test(formData.company_department)) errors.push('Company Department must contain only letters.');
    else if (!numberRegex.test(formData.company_employees)) errors.push('Company Employees must be a number.');
    else if (!numberRegex.test(formData.start_year) || formData.start_year.length !== 4) errors.push('Start Year must be a 4-digit year.');
    else if (!numberRegex.test(formData.annual_income)) errors.push('Annual Income must be a number.');
    else if (!numberRegex.test(formData.net_profit)) errors.push('Net Profit must be a number.');
    else if (!numberRegex.test(formData.company_branch_no)) errors.push('Company Branch Number must be a number.');
    else if (!charRegex.test(formData.company_certification)) errors.push('Company Certification must contain only letters.');
    else if (!alphanumericRegex.test(formData.company_license)) errors.push('Company License must contain only letters and numbers.');
 
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.user);
    const errors = validateForm();

    if (errors.length > 0) {
      toast.error(errors.join('\n'));
      return;
    }

    const data = {
      ...formData,
      user:userId,
      company_social_media_Linkedin: linkedin.map((social) => social.company_social_media_Linkedin),
      company_social_media_Instagram: instagram.map((social) => social.company_social_media_Instagram),
      company_social_media_Facebook: facebook.map((social) => social.company_social_media_Facebook),
      company_social_media_Whatsapp_group: whatsapp_group.map((social) => social.company_social_media_Whatsapp_group),
      company_social_media_Twitter: twitter.map((social) => social.company_social_media_Twitter),
    };
    localStorage.setItem("userId", formData.user);
    try {
      if (formData.id) {
        // If the formData includes an ID, update the existing record
        await axios.put(`http://localhost:8000/api/company-details/${formData.id}/`, data);
        toast.success('Details updated successfully!', {
          onClose: () => navigate('/client_welcome'),
        });
      } else {
        // If no ID is present, create a new record
        await axios.post(`http://localhost:8000/api/company-details/`, data);
        toast.success('Details submitted successfully!', {
          onClose: () => navigate('/client_welcome'),
        });
      }
    } catch (error) {
      toast.error('Submission failed. Please check the data and try again.');
      console.error('Error submitting form:', error.response?.data || error.message);
    }
  };

  return (
    <div className='details'>
      <Header />
      <form className="client-form1" onSubmit={handleSubmit}>
        <div className="section about">
          <h2>Company Details</h2>
          <label>Company Name</label>
          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name || ''}  
            className="input-field"
            onChange={handleInputChange}
          />
          <label>Company Location</label>
          <input
            type="text"
            name="company_location"
            placeholder="E.g., Bangalore, India"
            value={formData.company_location || ''} 
            className="input-field"
            onChange={handleInputChange}
          />
          <label>Company Email</label>
          <input type="text" name="company_email" value={formData.company_email || ''}  placeholder="Company Email" className="input-field" onChange={handleInputChange} />

          <label>Company Phone Number</label>
          <input type="text" name="company_phone" value={formData.company_phone || ''} placeholder="Company Phone Number" className="input-field" onChange={handleInputChange} />

          <label>Linkedin</label>
          {linkedin.map((item, index) => (
            <div key={index} className="socialmedia-group">
              <input
                type="text"
                placeholder="Company linkedin Link"
                className="input-field"
                value={linkedin[index]?.company_social_media_Linkedin || ''} // Use correct key
                onChange={(e) => handleSocialChange(index, e)}
              />
              {/* <div className="button-group">
                <button type="button" className="add-more" onClick={addSocialField}>+ Add More</button>
                {socialMedia.length > 1 && (
                  <button type="button" className="remove" onClick={() => removeSocialField(index)}>- Remove</button>
                )}
              </div> */}
            </div>
          ))}


<label>Instagram</label>
          {instagram.map((item, index) => (
            <div key={index} className="socialmedia-group">
              <input
                type="text"
                placeholder="Company Instagram Link"
                className="input-field"
                value={instagram[index]?.company_social_media_Instagram || ''} // Use correct key
                onChange={(e) => handleInstagramChange(index, e)}
              />
      
            </div>
          ))}


<label>Facebook</label>
          {facebook.map((item, index) => (
            <div key={index} className="socialmedia-group">
              <input
                type="text"
                placeholder="Company Facebook Link"
                className="input-field"
                value={facebook[index]?.company_social_media_Facebook || ''} // Use correct key
                onChange={(e) => handleFacebookChange(index, e)}
              />
             
            </div>
          ))}




<label>Whatsapp group</label>
          {whatsapp_group.map((item, index) => (
            <div key={index} className="socialmedia-group">
              <input
                type="text"
                placeholder="Company Whatsapp Link"
                className="input-field"
                value={whatsapp_group[index]?.company_social_media_Whatsapp_group || ''} // Use correct key
                onChange={(e) => handlewhatsappGroupChange(index, e)}
              />
              
            </div>
          ))} 

          <label>Twitter</label>
          {twitter.map((item, index) => (
            <div key={index} className="socialmedia-group">
              <input
                type="text"
                placeholder="Company Twitter Link"
                className="input-field"
                value={twitter[index]?.company_social_media_Twitter || ''} // Use correct key
                onChange={(e) => handleTwitterGroupChange(index, e)}
              />
            </div>
          ))}


<label>Company Weblink</label>
<input type="text" name="company_weblink" value={formData.company_weblink} placeholder="Company Weblink" className="input-field" onChange={handleInputChange} />

          <label>Company Department</label>
          <input type="text" name="company_department" value={formData.company_department} placeholder="Company Department" className="input-field" onChange={handleInputChange} />

          

          <label>Company No. of Employees</label>
          <input type="number" name="company_employees" value={formData.company_employees} placeholder="Company No. of Employees" className="input-field" onChange={handleInputChange} />

          

          <label>Start Year</label>
          <input type="number" name="start_year" value={formData.start_year} placeholder="Start Year" className="input-field" onChange={handleInputChange} />

          <label>Annual Income</label>
          <input type="number" name="annual_income" value={formData.annual_income} placeholder="Annual Income" className="input-field" onChange={handleInputChange} />

          <label>Net Profit</label>
          <input type="number" name="net_profit" value={formData.net_profit} placeholder="Net Profit" className="input-field" onChange={handleInputChange} />

          <label>Company Branch No</label>
          <input type="text" name="company_branch_no" value={formData.company_branch_no} placeholder="Company Branch No" className="input-field" onChange={handleInputChange} />

          <label>Company Certification</label>
          <input type="text" name="company_certification" value={formData.company_certification} placeholder="Company Certification" className="input-field" onChange={handleInputChange} />

          <label>Company License</label>
          <input type="text" name="company_license" value={formData.company_license} placeholder="Company License" className="input-field" onChange={handleInputChange} />
        </div>
        <div className="client-submit-div">
          <button type="submit" className="client-submit-button">
            Submit
          </button>
          <button type="button" className="cancel-button" onClick={() => navigate('/client_welcome')}>
            Cancel
          </button>
        </div>
      
      </form>
      
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default CompanyDetailsUpdate;