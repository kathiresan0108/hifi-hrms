import React from 'react';
import './Careers.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Lottie from "lottie-react";
import admin from "../../about.json";
import hrms from "../../hrms.json";
import hrms1 from "../../hrms1.json";
import hrms2 from "../../hrms2.json";


function Careers() {
  return (
    <div className="App">
      <Header />
      <div id="outer-main">
        <div className="main-container">
          <div className="secoundary-container" id="sc2">
            <h1 className="home-title">
              <span>Welcome to Hifi HRMS</span>
            </h1>
            <h1 id="HRMSanime">
           <Lottie animationData={admin} style={{ height: 400, width: 400 }} />
            </h1>
          </div>
          <div className="secoundary-container" id="SC1">
            <div className="secoundary-container-2">
              <div className="secoundary-container-1">
                <div className="job-card">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h2>Accountant</h2><br />
                  <div className="salary">8000 - 12000</div>
                  <a href="hifi" className="apply-btn">Apply Job</a>
                </div>
                <div className="job-card">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h2>Technician</h2>
                  <div className="salary">8000 - 12000</div>
                  <a href="hifi" className="apply-btn">Apply Job</a>
                </div>
              </div>
              <div className="jobb">
                <div className="job-card">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h2>Physical Marketing</h2>
                  <div className="salary">8000 + incentive</div>
                  <a href="hifi" className="apply-btn">Apply Job</a>
                </div>
                <div className="job-card">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h2>ITI Welders</h2>
                  <div className="salary">10000</div>
                  <a href="hifi" className="apply-btn">Apply Job</a>
                </div>
              </div>
            </div>
            <div className="gstbtn">
              <button className="gstbtn2">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="filler-container">
        <div className="f-container">
          <h1>
          <Lottie animationData={hrms1} style={{ height: 400, width: 400 }} />
           
          </h1>
          <p>
            <b className="card-head">Human Resources Information System - HRIS</b> <br /> <br />
            Core HR, also known as the Human Resources Information System (HRIS), is the backbone of HR operations,
            centralizing employee information and streamlining essential HR processes. It manages comprehensive
            employee records, including personal details, job history, and performance data, ensuring data accuracy
            and accessibility. The system facilitates attendance and time tracking, enabling efficient management of
            work hours, leave balances, and absenteeism. Overall, HRIS enhances organizational efficiency by
            automating routine HR tasks and providing a reliable repository of employee data.
          </p>
        </div>
        <div className="f-container">
          <div className="gif-con">
            <p>
              <b className="card-head">Talent Management</b>
              <br /> <br />
              Talent management methods have developed to cater to people-specific trends, much like all other work aspects. They have evolved in swift paces over the last few years. Strategic talent management is a compulsion in today’s hyper-change landscape. Global trends in talent and HCM have driven a revival of the employee-employer equation.
            </p>
            <h1>
            <Lottie animationData={hrms} style={{ height: 400, width: 400 }} />
    
            </h1>
          </div>
        </div>
        <div className="f-container">
          <h1>
          <Lottie animationData={hrms2} style={{ height: 400, width: 400 }} />
          
          </h1>
          <p>
            <b className="card-head">Payroll and Benefits Administration</b>
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex dolore repellat sed debitis,
            asperiores, explicabo fugiat molestias, cupiditate commodi similique facere sit nemo accusamus aliquid
            neque. Hic , consequatur quasi?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;
