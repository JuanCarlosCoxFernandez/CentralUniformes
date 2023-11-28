import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { getAllUsers, deleteUser } from '../../services/employeeService';
import './employees.css';
import {Button} from 'antd';

function Employees() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    // Llama a la función de servicio para obtener empleados cuando el componente se monta
    getAllUsers().then((data) => {
        setUsers(data); // Actualiza el estado con los empleados obtenidos
        console.log('Data received:', data);
        console.log("datos obtenidos");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = (id) => {
    // Call the deleteEmployee function to delete an employee
    deleteUser(id);
  };

  const handleUpdate = (id) => {
    console.log("update");
  };

  const handleRoles = (id) => {
    console.log("roles");
  };

  return (
  <div className='content-employees'>

    <div className='block'>
     <div className='list-employees'>
     <h3>Name:</h3>
      </div>
      <div className='list-employees'>
      <h3>Email:</h3>
      </div>
      <div className='list-employees'>
      <h3></h3>
      </div>
      
    </div>

      {Array.isArray(Users) &&
        Users.map((user) => (
          <div key={user.id} style={{ marginBottom: '20px' }} className='block'>
            <div className='list-employees'>
              <p className='borders'>{user.name}</p> 
            </div >
            <div className='list-employees email-align'>
              <p className='borders'>{user.email}</p> 
            </div>
            <div className='list-employees email-space'>
              <p className='borders'> 
                {/* <button onClick={() => handleDelete(user.id)} className='ButtonDelete'>Delete</button> */}
                <Button onClick={() => handleDelete(user.id)} type="primary" className='ButtonDelete'>Delete</Button>
                &nbsp;&nbsp;  
                {/* <button onClick={() => handleDelete(user.id)} className='ButtonUpdate'>Update</button> */}
                <Button onClick={() => handleUpdate(user.id)} type="primary" className='ButtonUpdate'>Update</Button>
                &nbsp;&nbsp;  
                {/* <button onClick={() => handleDelete(user.id)} className='ButtonUpdate'>Update</button> */}
                <Button onClick={() => handleRoles(user.id)} type="primary">Roles</Button>
              </p> 
            </div>
          </div>

          
        ))}
    </div>
  // </div>

  );


}

export default Employees;
