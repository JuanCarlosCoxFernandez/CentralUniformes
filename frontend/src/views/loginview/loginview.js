import React, { useState } from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Login from '../../components/login/login';

function LoginView() {
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <Login />
        {/* <Employees /> */}
      </div>
    </div>
    );
}

export default LoginView;