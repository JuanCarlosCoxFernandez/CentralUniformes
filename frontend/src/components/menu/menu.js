import React, { useEffect, useState } from 'react';
import { loadRoleApplication, getAllApplication } from '../../services/applicationService';
import { loadRoleUser } from '../../services/employeeService';
import './menu.css';

function Menu() {
  const [UserRoles, setUserRoles] = useState({});
  const [AppRoles, setAppRoles] = useState([]);
  const userRoleIds = {};


  const fetchData = async () => {
    try {
      // Cargar roles de usuario
      const userData = await loadRoleUser(localStorage.getItem('IdUser'));
      for (let i = 0; i < userData.length; i++) {
        userRoleIds[i] = userData[i].id;
      }
      console.log("UserRole", userRoleIds);

      // Cargar roles de aplicación
      const appData = await getAllApplication();
      console.log("All Applications", appData);

      for (let i = 0; i < appData.length; i++) {
        const currentAppId = appData[i].id;
        const appRolesData = await loadRoleApplication(currentAppId);
        console.log(`Application ${currentAppId} Roles`, appRolesData);

        // Lógica de comparación
        const commonRoles = appRolesData.filter(role => userRoleIds.hasOwnProperty(role.id));
        console.log(`Common Roles for Application ${currentAppId}`, commonRoles);
        // Verificar si la aplicación ya está en el estado AppRoles
        const appExists = AppRoles.some(app => Number(app.data.id) === Number(currentAppId));
        console.log(`Application ${currentAppId} Exists in AppRoles?`, appExists);

        if (commonRoles.length > 0 && !appExists) {
          console.log(`Adding Application ${currentAppId} to AppRoles`);
          setAppRoles((prevRoles) => [...prevRoles, { data: appData[i], commonRoles }]);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores aquí
    }
  };

  useEffect(() => {
    fetchData();
    console.log("Control");
    console.log(AppRoles);
  }, []); // Se ejecutará solo una vez después de la montura inicial

  return (
    <div className="menu">
      <ul>
        {Array.isArray(AppRoles) &&
          AppRoles.map((app, index) => (
            <li key={index}>
              <p>URL: {app.data.URL}</p>
              <img
                className='applicationIcon'
                alt={`icon${index}`}
                src={`http://localhost:8000/images/${app.data.icon}`}
              />
              <p>Common Roles: {app.commonRoles.map(role => role.name).join(', ')}</p>
            </li>
          ))}
        <li>hola</li>
      </ul>
    </div>
  );
}

export default Menu;
