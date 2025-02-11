import React, { useState } from 'react';
import './CandidateFeedback.css';
import { IoCloseCircleSharp } from "react-icons/io5";

const FeedbackForm = () => {
  const [ratings, setRatings] = useState({ experience: 0, company: 0 });

  const handleRating = (type, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [type]: value }));
  };

  return (
    <div className="container">
      <div className="close-button"><IoCloseCircleSharp /></div>
      <h1 className="title">Client Feedback</h1>
      <form>
        <label className="label">Enter your Company Name :</label><br/>
        <input type="text" placeholder="Please enter Your Name" className="input" />
<br/>
        <label className="label">Enter your Company Email :</label><br/>
        <input type="email" placeholder="Please enter Your Email" className="input" />

        <div className="rating-container">
          <span className="star-label">Your Overall experience with us?</span>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= ratings.experience ? 'selected' : ''}`}
                onClick={() => handleRating('experience', star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
{/* 
        <div className="rating-container">
          <span className="star-label">Your Overall experience about Company?</span>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= ratings.company ? 'selected' : ''}`}
                onClick={() => handleRating('company', star)}
              >
                ★
              </span>
            ))}
          </div>
        </div> */}

        <label className="label">Any other Suggestion</label>
        <textarea placeholder="Enter your text here..." className="textarea"></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
