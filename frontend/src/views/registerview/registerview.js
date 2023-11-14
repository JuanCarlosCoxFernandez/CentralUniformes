import React, { useState } from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Register from '../../components/register/register';
    

function RegisterView() {
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <Register />
        {/* <Employees /> */}
      </div>
    </div>
    );
}
export default RegisterView;