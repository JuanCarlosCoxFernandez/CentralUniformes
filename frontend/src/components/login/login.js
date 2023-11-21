import React, { useState } from 'react';
import './login.css';

function Login() {
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');

  const handlepasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Call the createEmployee function to create a new employee
  };
  return (
    <div className='content-register'>
      <h1>User Login</h1>
      <img src='/img/logo.png' alt='LogoCentralUniformes'></img><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input type="password" id="password" value={password} onChange={handlepasswordChange} />
        </div>
        <br></br>
        <button type="submit" className='register'>Login</button> <button type="reset"  className='cancel'>Cancel</button>
      </form>
    </div>
  );
  }
  export default Login;
