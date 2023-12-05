import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { getAllUsers, deleteUser, updateUser } from '../../services/employeeService';
import './employees.css';
import { Button, Popover } from 'antd';
import { useNavigate } from "react-router-dom";

function Employees() {
  const [Users, setUsers] = useState([]);
  const [open, setOpen] = useState([]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleOpenChange = (newOpen, index) => {
    setOpen(prevState => {
      let newValues = [];
      for (let i = 0; i < prevState.length; i++) {
        newValues[i] = false;
      }
      newValues[index] = true;
      return newValues;
    });
  };

  const hide = () => {
    setOpen(prevState => {
      let newValues = [];
      for (let i = 0; i < prevState.length; i++) {
        newValues[i] = false;
      }
      return newValues;
    });
  };

  useEffect(() => {
    // Llama a la función de servicio para obtener empleados cuando el componente se monta
    getAllUsers().then((data) => {
      setUsers(data); // Actualiza el estado con los empleados obtenidos

      let openValues = [];
      for (let i = 0; i < data.length; i++) {
        openValues[i] = false;
      }

      console.log("useEffect");
      console.log(openValues);

      setOpen(openValues);

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

  const handleUpdate = async (user) => {
    console.log(user.name);
    if (!newUser.name) {
      newUser.name = user.name
    }
    if (!newUser.email) {
      newUser.email = user.email
    }
    if (!newUser.password) {
      newUser.password = user.password
    }
    try {
      console.log("Datos del formulario:", newUser);

      await updateUser(user.id, newUser);
      console.log("datos obtenidos");

      // Reinicia los valores del formulario
      setNewUser({
        name: '',
        email: '',
        password: '',
      });

      const updatedApp = await getAllUsers();
      setUsers(updatedApp);


    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    };
  };

  const navigate = useNavigate();
  const handleRoles = (id) => {
    localStorage.setItem('id', id);
    navigate("/userRolview");
  };

  const UpdateForm = (user, index) => (
    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(user); }}>
      <div>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          id="name"
          placeholder={user.name}
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          placeholder={user.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.files[0] })}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          id="password"
          placeholder={user.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.files[0] })}
        />
      </div>
      <div><br />
        <Button type="primary" htmlType="submit" className='ButtonUpdate'>Update</Button>
        &nbsp;&nbsp;
        <Button onClick={() => hide()} type="primary" className='ButtonDelete' >Cancel</Button>
      </div>
    </form>
  );

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
        Users.map((user, index) => (
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
                <Popover
                  content={UpdateForm(user, index)}
                  trigger="click"
                  forceRender={true}
                  open={open[index]}
                  onOpenChange={(e) => handleOpenChange(e, index)}
                >
                  <Button type="primary" className='ButtonUpdate'>Update</Button>
                </Popover>
                &nbsp;&nbsp;
                {/* <button onClick={() => handleDelete(user.id)} className='ButtonUpdate'>Update</button> */}
                <Button onClick={() => handleRoles(user.id)} type="primary">Roles</Button>
              </p>
            </div>
          </div>


        ))}
    </div>

  );


}

export default Employees;
