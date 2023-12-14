import React, { useState } from 'react';
import { register } from '../../services/employeeService.js';
import './register.css';
import {Button, notification} from 'antd';

function Register() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    console.log(credentials.name, credentials.email, credentials.password);
    // Call the createEmployee function to create a new employee
    await register(credentials)
    notification.success({message:'User registered successfully',duration:5})
  };

  const Cancel = (e) => {
    e.preventDefault();

    setCredentials({
      email: '',
      password: '',
    });

  };

  

  return (
    <div className='content-register'>
      <h1>User Sign Up</h1>
      <img src='/img/logo.png' alt='LogoCentralUniformes'></img><br></br>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="username">Username:</label><br></br>
          <input type="text" id="username" name='name' value={credentials.name} onChange={handleInputChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" name='email' value={credentials.email} onChange={handleInputChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input type="password" id="password" name='password' value={credentials.password} onChange={handleInputChange} />
        </div>
        <br></br>
        {/* <button type="submit" className='register'>Sign in</button> <button type="reset"  className='cancel'>Cancel</button> */}
        <Button onClick={registerUser} type="submit" className='ButtonUpdate'>Login</Button>&nbsp;
        <Button onClick={Cancel} type="reset" className='ButtonDelete'>Cancel</Button>
      </form>
    </div>
  );
}

export default Register;
