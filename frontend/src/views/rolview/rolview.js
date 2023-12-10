import React, { useState } from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Roles from '../../components/roles/roles';

function RolesView(){
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <Roles className="content-rolesView"/>
      </div>
    </div>
    );
}
export default RolesView;