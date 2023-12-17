import React from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Application_roles from '../../components/application_roles/application_roles';


function AppRoles() {
    return(
        <div className="App">
      <Header/>
      <div className="content">
        <Menu />
        <Application_roles className="content-UserRolesView"/>
      </div>
    </div>
    );
}

export default AppRoles;