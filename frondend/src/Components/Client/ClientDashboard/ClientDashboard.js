import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import JobCard from "./Jobcards";
import { Link } from "react-router-dom";
import ClientHeader from "../ClientHeader/ClientHeader";
import Footer from "../../Home/Footer/footer";
import axios from "axios";

function ClientDashboard() {
  const [clientData, setClientData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  // Fetch Company and Jobs Details
  const fetchCompanyDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");

      // Validate user ID
      if (!userId || isNaN(userId)) {
        throw new Error("Invalid User ID found in localStorage");
      }

      console.log("Stored User ID:", userId);

      const [companyResponse, jobsResponse] = await Promise.all([
        axios.get(`http://localhost:8000/api/company-details/?user_id=${parseInt(userId)}`),
        axios.get(`http://localhost:8000/api/hiringdetails/?user_id=${parseInt(userId)}`)
      ]);

      console.log("Company Details in clientDasboard:", companyResponse.data);
      console.log("Jobs Details in clientDasboard:", jobsResponse.data);

      if (companyResponse.data && Array.isArray(companyResponse.data)) {
        // Assuming the data is an array, and we want the first element
        setClientData(companyResponse.data[0]);
      } else {
        throw new Error("Company details structure is not as expected");
      }

      if (jobsResponse.data && Array.isArray(jobsResponse.data)) {
        setJobs(jobsResponse.data);
      } else {
        throw new Error("Jobs details structure is not as expected");
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching details:", err);
      setError(err.message || "Failed to fetch details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyDetails();
  }, []);

  // Check if data is loading or an error occurred
  if (loading) {
    return (
      <div className="loading-pulsing-circles">
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (err) {
    return <div className="error-message">Error: {err}</div>;
  }

  // Handle case where clientData is not found
  if (!clientData) {
    return <div className="error-message">Error: Client data not found!</div>;
  }

  return (
    <div>
      <ClientHeader />
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Welcome, {clientData.company_name}!</h1>
        </div>
        <div className="client-details">
          <h3>Client Details</h3>
          <p>Company: {clientData.company_name}</p>
          <p>Email: {clientData.company_email}</p>
          <p>Phone: {clientData.company_phone}</p>
        </div>
        <div className="posted-jobs">
          <h2>Posted Jobs</h2>
          {jobs.length > 0 ? (
            <div className="job-cards-grid">
              {jobs.map((job) => (
                <Link
                  className="link"
                  to={`/post_detail/${job.id || job._id}`}
                  key={job.id || job._id}
                >
                  <JobCard job={job} />
                </Link>
              ))}
            </div>
          ) : (
            <p>No jobs posted yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClientDashboard;
