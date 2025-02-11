import React from 'react';
import './AppliedJobs.css';
import Footer from '../../Home/Footer/footer';
import HRHeader from '../HRHeader/HRHeader';

const HRAppliedJobs = () => {
  const users = [
    {
      id: 1,
      name: 'Pandiusha k',
      role: 'Software dev',
      gender: 'Female',
      experience: '2 Years',
      phone: '7904081870',
      email: 'pandi@gmail.com',
      cv: 'File',
    },
    {
      id: 2,
      name: 'valli',
      role: 'Software eng',
      gender: 'Female',
      experience: '3 Years',
      phone: '7485081870',
      email: 'valli@gmail.com',
      cv: 'File',
    },
  ];

  return (
    <div>
      <HRHeader/>
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>user id</th>
            <th>Name <br /> (first name+lastname)</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Experience</th>
            <th>Phone</th>
            <th>Email</th>
            <th>CV</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.gender}</td>
              <td>{user.experience}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td><button className="cv-button">{user.cv}</button></td>
              <td>
                <div className="action-menu">
                  <button className="action-button">...</button>
                  <div className="sub-menu">
                    {/* <button>Edit</button> */}
                    {/* <button>Delete</button> */}
                    <button>View</button>
                    <button>Send mail</button>
                    <button>WhatsApp</button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  );
};

export default HRAppliedJobs;
