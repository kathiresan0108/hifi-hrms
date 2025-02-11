import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import './HRDashboard.css';
import Footer from '../../Home/Footer/footer';
import AdminCandidateJob from '../CandidateJobDetails/HRCandidateJobDetails';
import HRHeader from '../HRHeader/HRHeader';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard() {
    const complexAnimationOptions = {
        duration: 1500, // Animation duration in milliseconds
        easing: 'easeInOutBounce', // Easing function for the animation
    };

    const animationOptions = {
    duration: 2000,
    easing: 'easeOutElastic',
    from: {
        opacity: 0, // Start from opacity 0
        scale: 0.5, // Start from half size
    },
    to: {
        opacity: 1, // End at full opacity
        scale: 1,   // End at full size
    },
    loop: false, // Do not loop the animation
};


    const lineData = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Application Sent',
                data: [20, 40, 30, 50, 60, 70, 90, 80, 100, 110],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Interviews',
                data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105],
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'Rejected',
                data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    const lineOptions = {
        animation: complexAnimationOptions, // Add animation options to line chart
    };

    const barData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
        datasets: [
            {
                label: 'Delivered',
                data: [30, 40, 25, 50, 60, 70, 55, 65, 45, 35, 75, 85, 90],
                backgroundColor: 'orange',
            },
        ],
    };

    const barOptions = {
        animation: complexAnimationOptions, // Add animation options to bar chart
    };

    const doughnutData = {
        labels: ['Figma', 'Adobe XD', 'Photoshop'],
        datasets: [
            {
                label: 'Skills',
                data: [90, 88, 85],
                backgroundColor: ['blue', 'purple', 'pink'],
            },
        ],
    };

    const doughnutOptions = {
        animation: complexAnimationOptions, // Add animation options to doughnut chart
    };

    return (
        <div>
            <HRHeader/>
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <input type="text" placeholder="Search" />
                <button className="add-btn">+</button>
            </header>

            <div className="stats">
                <div className="stat">
                    <p>342</p>
                    <span>Interview Schedules</span>
                </div>
                <div className="stat">
                    <p>984</p>
                    <span>Application Sent</span>
                </div>
                <div className="stat">
                    <p>1,567k</p>
                    <span>Profile Viewed</span>
                </div>
                <div className="stat">
                    <p>437</p>
                    <span>Unread Messages</span>
                </div>
            </div>

            <div className="charts-container">
                <div className="vacancy-stats">
                    <h2>Vacancy Stats</h2>
                    <Line data={lineData} options={lineOptions} />
                </div>

                <div className="chart-section">
                    <h2>Chart</h2>
                    <Bar data={barData} options={barOptions} />
                </div>

                <div className="skills-section">
                    <h2>Skills</h2>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
            </div>
        </div>
        <AdminCandidateJob/>
        <Footer/>
        </div>
    );
}

export default Dashboard;
