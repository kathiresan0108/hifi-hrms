// src/CandidateDashboard.js
import React from 'react';
import './CandidateDashboard.css';
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/footer';
import CandidateHeader from '../CandidateHeader/CandidateHeader';

const CandidateDashboard = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }
    return (
        <div>
            <CandidateHeader/>
        <div className="dashboard-container">
            <aside className="progress-bar">
                <ul>
                    <li className="active">
                        <span>Profile Completion</span>
                    </li>
                    <li>
                        <span>Profile Verification / Mock Interview</span>
                    </li>
                    <li>
                        <span>Main Interview</span>
                    </li>
                    <li>
                        <span>Onboarding</span>
                    </li>
                </ul>
            </aside>
            <main className="job-cards">
                {[...Array(9)].map((_, index) => (
                    <div className="job-card" key={index}>
                        <div className="job-icons">
                            <i className="icon save-icon" title="Save"><FaBookmark /></i>
                            <i className="icon share-icon" title="Share"><FaShareAlt /></i>
                            <i className="icon review-icon" title="Review"><BsFillChatLeftTextFill /></i>
                        </div>
                        <div className="avatar">
                            <img
                                src={`https://via.placeholder.com/50?text=${index + 1}`}
                                alt="Avatar"
                            />
                        </div>
                        <div className="job-info">
                            <h3 className="job-title">Web Developer</h3>
                            <p className="salary-range">$25,000 - $40,000</p>
                        </div>
                       <Link to="/candidate_job"> <button className="apply-button">Apply Now</button></Link>
                    </div>
                ))}
            </main>
        </div>
        <Footer/>
        </div>
    );
};

export default CandidateDashboard;
