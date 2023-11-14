import React, { useState } from 'react';
import { createEmployee } from '../../services/employeeService.js';

function Register() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');

  const handleusernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployeeData = {
      name: username,
      email: email,
      rol: password,
    };

    // Call the createEmployee function to create a new employee
    createEmployee(newEmployeeData)
      .then((createdEmployee) => {
        console.log('Employee created:', createdEmployee);
        // You can add further actions like clearing the form or updating the employee list
      })
      .catch((error) => {
        console.error('Error creating employee:', error);
      });
  };

  return (
    <div>
      <h1>User Sign Up</h1><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label><br></br>
          <input type="text" id="username" value={username} onChange={handleusernameChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input type="password" id="password" value={password} onChange={handlepasswordChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <br></br>
        <button type="submit">Sign in</button> <button type="submit">Cancel</button>
      </form>
    </div>
  );
}

export default Register;
