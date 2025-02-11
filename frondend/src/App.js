// import PostDetailsForm from './Components/Client/PostDetailsForm';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/HomePage/Home";
import ContactUs from "./Components/Home/Contact/contact";
import AboutUs from "./Components/Home/About/about";
import Login from "./Components/Home/login";
import Forgot from "./Components/Home/forgot";
import Changepassword from "./Components/Home/Changepassword/Changepassword";
import Signup from "./Components/Home/signup";
import NewPassword from "./Components/Home/newPassword";
import Otp from "./Components/Home/otp";
import CandidateRegistrationForm from "./Components/Candidate/Registration/CandidateRegistrationForm";
import CandidateDashboard from "./Components/Candidate/CandidateDashboard/CandidateDashboard";
import CandidateJob from "./Components/Candidate/CandidateJob/CandidateJob";
import JobDetails from "./Components/Candidate/CandidateJobDetails/JobDetails";
import CandidateProfile from "./Components/Candidate/CandidateProfile/CandidateProfile";
import CompanyDetails from "./Components/Client/ClientRegistration/CompanyDetails";
import ChooseUserType from "./Components/Home/ChooseUserType/ChooseUserType";
import PostDetailsForm from "./Components/Client/PostDetailsForm";
import ClientProfile from "./Components/Client/ClientPofile/ClientProfile";
// import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";
// import CandidateDatabasePage from "./Components/Admin/CandidateDatabasePage/CandidateDatabasePage";
// import ClientDatabasePage from "./Components/Admin/ClientDatabasePage/ClientDatabas/ePage";
// import ViewJobDetails from "./Components/Admin/ViewJobDtails/ViewJobDetails";
// import AppliedJobs from "./Components/Admin/AppliedJobs/AppliedJobs";
import ClientDashboard from "./Components/Client/ClientDashboard/ClientDashboard";
// import Dashboard from "./Components/HR/HRDashboard/HRDashboard";
// import AdminHeader from "./Components/Admin/AdminHeader/AdminHeader";
// import AdminCandidateJob from "./Components/HR/CandidateJobDetails/HRCandidateJobDetails";
// import HRViewJobDetails from "./Components/HR/ViewJobDtailsHR/HRViewJobDetails";
// import HRAppliedJobs from "./Components/HR/HRAppliedJobs/HRAppliedJobs";
// import HRCandidateDatabasePage from "./Components/HR/HRCandidateDatabasePage/HRCandidateDatabasePage";
// import HRClientDatabasePage from "./Components/HR/HRClientDatabasePage/HRClientDatabasePage";
import WelcomePage from "./Components/welcomePage";
// import CandidateFeedback from "./Components/Candidate/CandidateFeedback/CandidateFeedback";
// import FeedbackForm from "./Components/Client/ClientFeedback/CandidateFeedback";
// import HRCandidateJob from "./Components/HR/CandidateJobDetails/HRCandidateJobDetails";
import WelcomeForClient from "./Components/welcomeForClient";
import Careers from "./Components/Home/Careers/Careers";
import HRDetailsForm from "./Components/Admin/HRDetailsForm/HRDetailsForm";
import VerifyOtp from "./Components/Home/VerifyOtp";
import CandidateUpdateForm from './Components/Candidate/Update/CandidateUpdateForm';
import CompanyDetailsUpdate from './Components/Client/ClientRegistration/ClientRegistrationUpdate';


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/careers" element={<Careers/>} />
         <Route path="/contact" element={<ContactUs/>}/>
         <Route path="/about" element={<AboutUs/>}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/forgot" element={<Forgot />}/>
         <Route path="/changepassword" element={<Changepassword/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/verify_otp" element={<VerifyOtp/>} />
         <Route path="/newpassword" element={<NewPassword/>}/>
         <Route path="/otp" element={<Otp/>}/>
         <Route path="/candidate_reg" element={<CandidateRegistrationForm/>}/>
         <Route path="/candidate_update" element={<CandidateUpdateForm/>}/>
         <Route path="/candidate_welcome" element={<WelcomePage/>}/>
         <Route path="/candidate_dashboard" element={<CandidateDashboard/>} />
         <Route path="/candidate_job" element={<CandidateJob/>} />
         <Route path="/candidate_jobdetails" element={<JobDetails/>} />
         <Route path="/candidate_profile" element={<CandidateProfile/>} />
         <Route path="/choose_user_type" element={<ChooseUserType/>} />
         <Route path="/client_reg" element={<CompanyDetails/>}/>
         <Route path="/client_welcome" element={<WelcomeForClient/>}/>
         <Route path="/client_dashboard" element={<ClientDashboard/>}/>
         <Route path="/post_detail" element={<PostDetailsForm/>}/>
         <Route path="/client_profile" element={<ClientProfile/>}/>
         <Route path="/hrdetail" element={<HRDetailsForm/>}/>
         <Route path="/CompanyDetailsUpdate" element={<CompanyDetailsUpdate/>}/>
         
         {/* <Route path="/" element={<AdminDashboard/>} />
         <Route path="/candidate_database_page" element={<CandidateDatabasePage/>} />
         <Route path="/client_database_page" element={<ClientDatabasePage/>} />
         <Route path="/view_job_details" element={<ViewJobDetails/>} />
         <Route path="/applied_jobs" element={<AppliedJobs/>} /> */}
         {/* <Route path="/" element={<Dashboard/>} /> 
         <Route path="/job_details_hr" element={<HRViewJobDetails/>} /> 
         <Route path="/applied_jobs_hr" element={<HRAppliedJobs/>} />
         <Route path="/candidate_database_page_hr" element={<HRCandidateDatabasePage/>} /> 
         <Route path="/client_database_page_hr" element={<HRClientDatabasePage/>} /> */}    
    </Routes> 
{/* <CandidateFeedback/> */}
{/* <FeedbackForm/> */}
    {/* <HRCandidateJob/> */}
    {/* <HRDetailsForm/> */}
    </div>
  );
}

export default App;