import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <ul>
            <li><a className="name1" href="/">Central</a><a className="name2" href="/">Uniformes</a></li>
            <li><a href="/acerca-de">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

