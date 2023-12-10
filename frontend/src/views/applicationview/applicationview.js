import React, { useState } from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Applications from '../../components/applications/applications';

function ApplicationView(){
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <Applications className="content-applicationsView"/>
      </div>
    </div>
    );
}

export default ApplicationView;