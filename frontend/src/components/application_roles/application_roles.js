import React, { useEffect, useState } from 'react';
import { addRoleApplication, loadRoleApplication, removeRoleApplication } from '../../services/applicationService';
import { getAllRoles } from '../../services/roleService';

import { Button, Popover } from 'antd';
import './application_roles.css';
function Application_roles() {

    const [AppR, setAppR] = useState({
        app_id: localStorage.getItem('id'),
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
        getAllRoles().then((dataR)=>{
            setRoles(dataR);
            console.log("Roles obtenidos");

        })
            .catch((error) => {
                console.error('Error:', error);
            });

        loadRoleApplication(localStorage.getItem('id')).then((data) => {
            setAppR(data);
            console.log(localStorage.getItem('id'));
            console.log('Data received:', data);
            console.log("datos obtenidos");
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleCreate = (rol_id) => {
        addRoleApplication(AppR.app_id, rol_id);
    };

    const handleDelete = (rol_id) => {
        removeRoleApplication(AppR.user_id, rol_id);
    };

    const generalForm = (
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
            <div>
                <label htmlFor="title">Id Rol:</label><br />
                <input
                    type="text"
                    id="rol"
                    value={AppR.rol_id}
                    onChange={(e) => setAppR({ ...AppR, rol_id: e.target.value })}
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
        <div className='content-application_roles'>

            <div className='block'>
                <div className='list-application_roles'>
                    <h3>Rol:</h3>
                </div>
                <div className='list-application_roles'>
                    <h3></h3>
                </div>
                <div className='list-application_roles popover'>
                    <br></br>
                    <Popover content={generalForm} trigger="click" open={openC}
                        onOpenChange={handleOpenChangec}>
                        <Button type="primary" className='ButtonUpdate'>Create</Button>
                    </Popover>
                </div>

            </div>
            {Array.isArray(AppR) &&
                AppR.map((appR) => (
                    <div key={appR.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-application_roles'>
                            <p className='borders'>{appR.name}</p>
                        </div >
                        <div className='list-application_roles'>
                            <p className='borders'></p>
                        </div >
                        <div className='list-application_roles email-space'>
                            <p className='borders'>
                                <Button onClick={() => handleDelete(appR.id)} type="primary" className='ButtonDelete'>Delete</Button>
                            </p>
                        </div>
                    </div>


                ))}
            {Array.isArray(Roles) &&
                Roles.map((rol) => (
                    <div key={rol.id} style={{ marginBottom: '20px' }} className='block RolesPreview'>
                        <div className='list-application_roles'>
                            <p className='borders'>ID: {rol.id}</p>
                        </div >
                        <div className='list-application_roles'>
                            <p className='borders'>Rol: {rol.name}</p>
                        </div >
                        
                    </div>


                ))}
        </div>
    );

}

export default Application_roles;