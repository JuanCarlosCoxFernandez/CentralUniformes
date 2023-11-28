import React, { useState } from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import Home from '../../components/home/home';
function HomeView(){
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <Home className="content-homeView"/>
      </div>
    </div>
    );
}

export default HomeView;