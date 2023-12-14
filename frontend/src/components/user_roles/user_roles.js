import React, { useEffect, useState } from 'react';
import { addRoleUser, loadRoleUser, removeRoleUser } from '../../services/employeeService';
import { getAllRoles } from '../../services/roleService';

import { Button, Popover, notification } from 'antd';
import './user_roles.css';
function User_roles() {

    const [UsersR, setUsersR] = useState({
        user_id: localStorage.getItem('id'),
        rol_id: '',
    });

    const [newR, setNewR] = useState({
        user_id: localStorage.getItem('id'),
        rol_id: '',
    });

    const [Roles, setRoles] = useState([]);

    const [openC, setOpenC] = useState(false);

    const hidec = () => {
        setOpenC(false);
    };
    const handleOpenChangec = (newOpen) => {
        setOpenC(newOpen);
    };

    useEffect(() => {
        getAllRoles().then((dataR) => {
            setRoles(dataR);
            console.log("Roles obtenidos");

        })
            .catch((error) => {
                console.error('Error:', error);
            });

        loadRoleUser(localStorage.getItem('id')).then((data) => {
            setUsersR(data);
            console.log(localStorage.getItem('id'));
            console.log('Data received:', data);
            console.log("datos obtenidos");
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleCreate = async () => {
        let userId = localStorage.getItem('id');
        let rolId = newR.rol_id;
        console.log(rolId);
        try {
            console.log("Datos del formulario:", newR);
            console.log(rolId);
            // Llama a la función para crear una nueva noticia en el servidor
            await addRoleUser(userId,rolId);

            notification.success({message:'Rol added',duration:5})

            // Reinicia los valores del formulario
            setNewR({
                user_id: localStorage.getItem('id'),
                rol_id: '',
            });

            // Cierra el formulario


        } catch (error) {
            console.error('Error al crear la relacion de roles:', error);
            notification.error({message:'Error adding rol to user',duration:5})
        }
    };

    const handleDelete = async (rol_id) => {
        let userId = localStorage.getItem('id');
        console.log(userId);
        await removeRoleUser(userId, rol_id);
        notification.error({message:'rol deleted successfully',duration:5})
    };

    const generalForm = (
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
            <div>
                <label htmlFor="title">Id Rol:</label><br />
                <input
                    type="text"
                    id="rol"
                    value={newR.rol_id}
                    onChange={(e) => setNewR({ ...newR, rol_id: e.target.value })}
                />
            </div>
            <div><br />
                <Button type="primary" htmlType="submit" className='ButtonUpdate'>Create</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={hidec} className='ButtonDelete'>Cancel</Button>
            </div>
        </form>
    );


    return (
        <div className='content-user_roles'>

            <div className='block'>
                <div className='list-user_roles'>
                    <h3>Rol:</h3>
                </div>
                <div className='list-user_roles'>
                    <h3></h3>
                </div>
                <div className='list-user_roles popover'>
                    <br></br>
                    <Popover content={generalForm} trigger="click" open={openC}
                        onOpenChange={handleOpenChangec}>
                        <Button type="primary" className='ButtonUpdate'>Create</Button>
                    </Popover>
                </div>

            </div>
            {Array.isArray(UsersR) &&
                UsersR.map((userR) => (
                    <div key={userR.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-user_roles'>
                            <p className='borders'>{userR.name}</p>
                        </div >
                        <div className='list-user_roles'>
                            <p className='borders'></p>
                        </div >
                        <div className='list-user_roles email-space'>
                            <p className='borders'>
                                <Button onClick={() => handleDelete(userR.id)} type="primary" className='ButtonDelete'>Delete</Button>
                            </p>
                        </div>
                    </div>


                ))}
            {Array.isArray(Roles) &&
                Roles.map((rol) => (
                    <div key={rol.id} style={{ marginBottom: '20px' }} className='block RolesPreview'>
                        <div className='list-user_roles'>
                            <p className='borders'>ID: {rol.id}</p>
                        </div >
                        <div className='list-user_roles'>
                            <p className='borders'>Rol: {rol.name}</p>
                        </div >

                    </div>


                ))}
        </div>
    );

}

export default User_roles;