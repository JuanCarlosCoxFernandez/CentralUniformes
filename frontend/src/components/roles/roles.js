import React, { useEffect, useState } from 'react';
import './roles.css';
import { getAllRoles, getRolById, createRol, updateRol, deleteRol } from '../../services/roleService';
import {Button} from 'antd';
function Roles() {
    const [Roles, setRoles] = useState([]);

    useEffect(() => {
        // Llama a la función de servicio para obtener roles cuando el componente se monta
        getAllRoles().then((data) => {
            setRoles(data); // Actualiza el estado con los roles obtenidos
            console.log('Data received:', data);
            console.log("datos obtenidos");
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Call the deleteRol function to delete a Rol
        deleteRol(id);
      };
    
      const handleUpdate = (id) => {
        console.log("update");
      };


    return (
        <div className='content-roles'>
            <div className='block'>

                <div className='list-roles'>
                    <h3>Name:</h3>
                </div>
                <div className='list-roles'>
                    <h3></h3>
                </div>

            </div>

            {Array.isArray(Roles) &&
                Roles.map((rol) => (
                    <div key={rol.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-roles'>
                            <p className='borders'>{rol.name}</p>
                        </div >
                        <div className='list-roles email-space'>
                            <p className='borders'>
                                <Button onClick={() => handleDelete(rol.id)} type="primary" className='ButtonDelete'>Delete</Button>
                                &nbsp;&nbsp;
                                <Button onClick={() => handleUpdate(rol.id)} type="primary" className='ButtonUpdate'>Update</Button>
                            </p>
                        </div>
                    </div>


                ))}

        </div>
    );
}

export default Roles;