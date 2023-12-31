import React, { useEffect, useState } from 'react';
import { UserOutlined, UserAddOutlined, CloseCircleOutlined,InfoCircleOutlined } from '@ant-design/icons';

import './header.css';
import { logoutUser } from '../../services/employeeService';

function Header() {
  const [user, setUser] = useState(null);
  // Función para manejar el inicio de sesión
  useEffect(() => {
    // Aquí puedes realizar operaciones asíncronas, suscripciones, etc.
    // Por ejemplo, una llamada a una API simulada.
    const handleLogin = async () => {
      // Aquí puedes realizar la lógica de autenticación y obtener la información del usuario
      const userData = localStorage.getItem('IdUser');
      setUser(userData);
    }
    handleLogin();
  }, []);

  const handleLogout = async () => {
    // Lógica para cerrar sesión, por ejemplo, eliminar la información del usuario
    console.log("entraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    await logoutUser();
    console.log("despues de holaaaaaaaaaaaaaaaaa")
    setUser(null);
  };

  return (
    <div className='HeaderView'>
      <header className="header">
        <div className="header-container">
          {user ? (
            // Contenido para usuarios autenticados
            <nav className="header-nav">
              <ul>
                <li><a className="name1" href="/">Central</a><a className="name2" href="/">Uniformes</a></li>
                <li>
                      <a href='/Manual_Usuario/Manual CentralUniformes.html' target='Blank'><InfoCircleOutlined /></a>
                </li>
                <li className='right-align IconsHeader' onClick={handleLogout}><CloseCircleOutlined /></li>
              </ul>
            </nav>
          ) : (
            // Contenido para usuarios no autenticados
            <nav className="header-nav">
              <ul>
                <li><a className="name1" href="/">Central</a><a className="name2" href="/">Uniformes</a></li>
                <li className="right-align IconsHeader"><a href="/loginview"><UserOutlined /></a></li>
                <li className='IconsHeader'><a href="/registerview"><UserAddOutlined /></a></li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;

