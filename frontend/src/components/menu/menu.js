
import React, { useEffect, useState } from 'react';
import { loadRoleApplication, getAllApplication } from '../../services/applicationService';
import { loadRoleUser } from '../../services/employeeService';
import { RollbackOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './menu.css';

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
            console.log(userRoleIds);
        
            let commonRoles = [];
            for (let x = 0; x < appRolesData.length; x++) {
              let role = appRolesData[x];
              console.log("role: ");
              console.log(role.id);
              console.log("userrole: ");
              console.log(userRoleIds);
        
              // Add a check for undefined before accessing properties
              if (role && role.id !== undefined) {
                const userRoleValues = Object.values(userRoleIds);
                for (let j = 0; j < userRoleValues.length; j++) {
                  console.log("userrole: ");
                  console.log(userRoleValues[j]);
                  if (role.id === userRoleValues[j]) commonRoles.push(role);
                }
              }
              console.log("commonRoles: ");
              console.log(commonRoles);
            }
        
            console.log(userRoleIds)
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


    return () => {
      ignore = true;
    }

  }, []); // Se ejecutará solo una vez después de la montura inicial

  return (

    <div className="menu">

      <ul>
        <li><button className='IconGoBack' onClick={() => navigate(-1)}><RollbackOutlined /></button></li>
        <li><a href='/'><HomeOutlined /></a></li>
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

