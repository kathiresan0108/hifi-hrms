import React, { useEffect, useState } from 'react';
import './HRDetailsForm.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function HRDetailsForm() {
    const navigate = useNavigate(); 
    const [userId, setUserId] = useState(null);
    const [HRdetails, setHRDetails] = useState([]);  // HR details state should start as an empty array

    // Fetch userId from localStorage
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            toast.error('User ID not found. Please log in again.');
            navigate('/login'); 
        }
    }, [navigate]);

    // Update HRdetails once userId is fetched
    useEffect(() => {
        if (userId) {
            setHRDetails([{ user: userId, hr_name: '', hr_phone_number: '', hr_email: '', hr_social_media: [''] }]);
        }
    }, [userId]);

    const handleHRDetails = (index, e) => {
        const { name, value } = e.target;
        const newHRDetails = [...HRdetails];
        newHRDetails[index][name] = value;
        setHRDetails(newHRDetails);
    };

    const handleSocialMedia = (hrIndex, socialIndex, value) => {
        const updatedHRDetails = [...HRdetails];
        updatedHRDetails[hrIndex].hr_social_media[socialIndex] = value;
        setHRDetails(updatedHRDetails);
    };

    const addHRDetails = () => {
        setHRDetails([...HRdetails, { user: userId, hr_name: '', hr_phone_number: '', hr_email: '', hr_social_media: [''] }]);
    };

    const removeHRDetails = (index) => {
        const newHRDetails = [...HRdetails];
        newHRDetails.splice(index, 1);
        setHRDetails(newHRDetails);
    };

    const addSocialMedia = (hrIndex) => {
        const updatedHRDetails = [...HRdetails];
        updatedHRDetails[hrIndex].hr_social_media.push('');
        setHRDetails(updatedHRDetails);
    };

    const removeSocialMedia = (hrIndex, socialIndex) => {
        const updatedHRDetails = [...HRdetails];
        updatedHRDetails[hrIndex].hr_social_media.splice(socialIndex, 1);
        setHRDetails(updatedHRDetails);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        HRdetails.forEach((hr) => {
            console.log(hr);  // Ensure each hr object has all required fields
        });
    
        try {
            const payload = HRdetails.map((hr) => ({
                user: hr.user,  // user should be included in the payload
                hr_name: hr.hr_name,
                hr_phone_number: hr.hr_phone_number,
                hr_email: hr.hr_email,
                hr_social_media: hr.hr_social_media  // This should be a list of strings
            }));
            
            await axios.post('http://localhost:8000/api/hrdetails/', { hr_details: payload });
            toast.success('All HR details submitted successfully!', {
                onClose: () => navigate('/client_dashboard'),
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response?.data) {
                toast.error(`Submission failed: ${error.response.data.detail || 'Unknown error'}`);
            } else {
                toast.error('An unexpected error occurred. Please try again.');
            }
        }
    };
    
    

    return (
        <div className='detail'>
            <form onSubmit={handleSubmit}>
                {HRdetails.map((hr, hrIndex) => (
                    <div key={hrIndex} className="socialmedia-group">
                        <div className="section about">
                            <h2>HR Details</h2>
                            <label>HR Name</label>
                            <input
                                type="text"
                                name="hr_name"
                                placeholder="HR Name"
                                className="input-field"
                                value={hr.hr_name}
                                onChange={(e) => handleHRDetails(hrIndex, e)}
                            />

                            <label>HR Phone Number</label>
                            <input
                                type="text"
                                name="hr_phone_number"
                                placeholder="HR Phone Number"
                                className="input-field"
                                value={hr.hr_phone_number}
                                onChange={(e) => handleHRDetails(hrIndex, e)}
                            />

                            <label>HR Email</label>
                            <input
                                type="email"
                                name="hr_email"
                                placeholder="HR Email"
                                className="input-field"
                                value={hr.hr_email}
                                onChange={(e) => handleHRDetails(hrIndex, e)}
                            />

                            <label>HR Social Media</label>
                            {hr.hr_social_media.map((social, socialIndex) => (
                                <div key={socialIndex} className="social-media-input">
                                    <input
                                        type="text"
                                        placeholder="HR Social Media"
                                        className="input-field"
                                        value={social}
                                        onChange={(e) => handleSocialMedia(hrIndex, socialIndex, e.target.value)}
                                    />
                                    {hr.hr_social_media.length > 1 && (
                                        <button type="button" className="remove-social" onClick={() => removeSocialMedia(hrIndex, socialIndex)}>
                                            - Remove
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button type="button" className="add-social" onClick={() => addSocialMedia(hrIndex)}>+ Add Social Media</button>

                            <div className="button-group">
                                <button type="button" className="add-more" onClick={addHRDetails}>+ Add More</button>
                                {HRdetails.length > 1 && (
                                    <button type="button" className="remove" onClick={() => removeHRDetails(hrIndex)}>- Remove</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="submit-div">
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default HRDetailsForm;
