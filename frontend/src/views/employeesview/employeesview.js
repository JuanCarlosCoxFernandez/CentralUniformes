import React, { useState } from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Employees from '../../components/employees/employees';
    

function RegisterView() {
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <Employees />
      </div>
    </div>
    );
}
export default RegisterView;