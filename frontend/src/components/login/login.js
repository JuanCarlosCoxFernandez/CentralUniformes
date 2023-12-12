import React, { useState } from 'react';
import './login.css';
import { loginUser } from '../../services/employeeService';
import {Button} from 'antd';
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    console.log(credentials.email, credentials.password);

    await loginUser(credentials);
    gotoHome();
  };

  const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
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
      <h1>User Login</h1>
      <img src='/img/logo.png' alt='LogoCentralUniformes'></img><br></br>
      <form onSubmit={(e) => login(e)}>
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" name="email" value={credentials.email} onChange={handleInputChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleInputChange} />
        </div>
        <br></br>
        {/* <button type="submit" className='register'>Login</button> <button type="reset"  className='cancel'>Cancel</button> */}
        <Button onClick={login} type="submit" className='ButtonUpdate'>Login</Button>&nbsp;
        <Button onClick={Cancel} type="reset" className='ButtonDelete'>Cancel</Button>
      </form>
    </div>
  );
  }
  export default Login;
