
import React, { useEffect, useState } from 'react';
import { loadRoleApplication, getAllApplication } from '../../services/applicationService';
import { loadRoleUser } from '../../services/employeeService';
import { HomeOutlined, RollbackOutlined  } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './menu.css';

import {notification } from 'antd';

function Menu() {
  
  const navigate = useNavigate();
  console.log("Renderizado");

  // const [userRoles, setUserRoles] = useState({});
  const [appRoles, setAppRoles] = useState([]);

  const [user, setUser] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Cargar roles de usuario
        const userData = await loadRoleUser(localStorage.getItem('IdUser'));
        let userRoleIds = {};
        for (let i = 0; i < userData.length; i++) {
          userRoleIds[i] = userData[i].id;
        }
        console.log("UserRole", userRoleIds);

        // Cargar roles de aplicación
        const appData = await getAllApplication();
        console.log("All Applications", appData);

        let addedAppIds = new Set();

        let newAppRoles = [];
        let currentAppId = 0;

        for (let i = 0; i < appData.length; i++) {
          currentAppId = appData[i].id;

          if (!addedAppIds.has(currentAppId)) {
            const appRolesData = await loadRoleApplication(currentAppId);
            console.log(`Application ${currentAppId} Roles`, appRolesData);

            // Lógica de comparación
            const commonRoles = appRolesData.filter(role => userRoleIds.hasOwnProperty(role.id));
            console.log(`Common Roles for Application ${currentAppId}`, commonRoles);

            if (commonRoles.length > 0) {
              console.log(`Adding Application ${currentAppId} to newAppRoles`);
              newAppRoles.push({ data: appData[i], commonRoles });
              addedAppIds.add(currentAppId);
            }
          }
        }

        if (!ignore) {
          setAppRoles(prevRoles => [...prevRoles, ...newAppRoles]);
        }

      } catch (error) {
        console.error('Error:', error);
        // Manejar errores aquí
      }
    };

    let ignore = false;
    fetchData();

    // const handleAdmin = async () => {
    //   // Aquí puedes realizar la lógica de autenticación y obtener la información del usuario
    //   const User = localStorage.getItem('idUser');
    //   const UserRole = loadRoleUser(User);
    //   for (let i=0; i<UserRole.length; i++){
    //     if (UserRole[i].name === 'Admin'){
    //       setUser(User);
    //     }
    //   }

    // }
    // handleAdmin();

    return () => {
      ignore = true;
    }

  }, []); // Se ejecutará solo una vez después de la montura inicial

  const Prueba = () => (
    notification.error({message:'Error', description:'aaaaaaaaa',duration:5})
  );


  return (

    <div className="menu">

      <ul>
      <li><button className='IconGoBack' onClick={() => navigate(-1)}><RollbackOutlined /></button></li>
        <li><a href={"/"}><HomeOutlined /></a></li>
        {Array.isArray(appRoles) &&
          appRoles.map((app, index) => (
            <li key={index}>
              <a href={`${app.data.URL}`}>
                <img
                  className='menuIcon'
                  alt={`icon${index}`}
                  src={`http://localhost:8000/images/${app.data.icon}`}
                />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;


// {user ? (
//   // Contenido para usuarios autenticados
//   <nav className="header-nav">
//     <ul>
//       <li><HomeOutlined /></li>
//       <li></li>
//       {Array.isArray(appRoles) &&
//         appRoles.map((app, index) => (
//           <li key={index}>
//             <p>URL: {app.data.URL}</p>
//             <a href={`${app.data.URL}`}>
//               <img
//                 className='menuIcon'
//                 alt={`icon${index}`}
//                 src={`http://localhost:8000/images/${app.data.icon}`}
//               />
//             </a>
//           </li>
//         ))}
//     </ul>
//   </nav>
// ) : (
//   // Contenido para usuarios no autenticados
//   <nav className="header-nav">
//     <ul>
//       <li><HomeOutlined /></li>
//       {Array.isArray(appRoles) &&
//         appRoles.map((app, index) => (
//           <li key={index}>
//             <p>URL: {app.data.URL}</p>
//             <a href={`${app.data.URL}`}>
//               <img
//                 className='menuIcon'
//                 alt={`icon${index}`}
//                 src={`http://localhost:8000/images/${app.data.icon}`}
//               />
//             </a>
//           </li>
//         ))}
//     </ul>
//   </nav>
// )}
