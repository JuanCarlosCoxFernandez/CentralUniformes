import React from 'react';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import './header.css';

function Header() {
  return (
    <div className='HeaderView'>
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <ul>
            <li><a className="name1" href="/">Central</a><a className="name2" href="/">Uniformes</a></li>
            <li className="right-align IconsHeader"><a href="/loginview"><UserOutlined /></a></li>
            <li className='IconsHeader'><a href="/registerview"><UserAddOutlined /></a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  );
}

export default Header;

