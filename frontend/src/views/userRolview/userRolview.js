import React from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import User_roles from '../../components/user_roles/user_roles';


function UserRoles() {
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <User_roles className="content-UserRolesView"/>
      </div>
    </div>
    );
}

export default UserRoles;