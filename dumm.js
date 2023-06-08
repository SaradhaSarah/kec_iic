import React, { useState } from 'react';
import axios from 'axios';
import '../css/userregister.css'

function Register() {
  const [adminRoll, setadminRoll] = useState('');
  const [adminName, setadminName] = useState('');
  const [adminMail, setadminMail] = useState('');
  const [adminPassword, setadminPassword] = useState('');
  const [adminCPassword, setadminCPassword] = useState('');

  const handleSubmit = () => {
    if (!adminName || !adminMail || !adminPassword || !adminRoll || !adminCPassword) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(adminMail)) {
      alert('Invalid email format.');
      return;
    }

    // Check if passwords match
    if (adminPassword !== adminCPassword) {
      alert('Passwords do not match.');
      return;
    }

    const article = {
      admin_rollno: adminRoll,
      admin_name: adminName,
      admin_email: adminMail,
      admin_password: adminPassword,
      admin_cpassword: adminCPassword
    };

    axios.post('http://localhost:27000/admin/signup', article)
      .then(function (response) {
        alert('Registered successfully');
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else if (error.message) {
          alert(error.message);
        } else {
          alert('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <>
     {/*  <form onSubmit={handleSubmit} id="suggestion">
        rollno: <input type="text" value={adminRoll} onChange={(e) => setadminRoll(e.target.value)} /> <br />
        Name: <input type="text" value={adminName} onChange={(e) => setadminName(e.target.value)} /> <br />
        Mail: <input type="text" value={adminMail} onChange={(e) => setadminMail(e.target.value)} /> <br />
        Password: <input type="text" value={adminPassword} onChange={(e) => setadminPassword(e.target.value)} /> <br />
        Confirm Password: <input type="text" value={adminCPassword} onChange={(e) => setadminCPassword(e.target.value)} />
        <input type="submit" value="Submit" />
      </form> */}
        <form onSubmit={handleSubmit} id="suggestion">
        <div className="form-group">
          <label htmlFor="adminRoll">Roll No:</label>
          <input
            type="text"
            className="form-control"
            id="adminRoll"
            value={adminRoll}
            onChange={(e) => setadminRoll(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="adminName">Name:</label>
          <input
            type="text"
            className="form-control"
            id="adminName"
            value={adminName}
            onChange={(e) => setadminName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="adminMail">Email:</label>
          <input
            type="text"
            className="form-control"
            id="adminMail"
            value={adminMail}
            onChange={(e) => setadminMail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="adminPassword">Password:</label>
          <input
            type="password"
            className="form-control"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setadminPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="adminCPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="adminCPassword"
            value={adminCPassword}
            onChange={(e) => setadminCPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Submit" />
    
      </form>
    </>
  );
}

export default Register;