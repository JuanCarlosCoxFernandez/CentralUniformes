import React, { useEffect, useState } from 'react';
import './applications.css';
import { getAllApplication, getApplicationById, createApplication, updateApplication, deleteApplication } from '../../services/applicationService';
import { Button } from 'antd';

function Applications() {
    const [Applications, setApplications] = useState([]);
    useEffect(() => {
        // Llama a la función de servicio para obtener aplicaciones cuando el componente se monta
        getAllApplication().then((data) => {
            setApplications(data); // Actualiza el estado con las aplicaciones obtenidas
            console.log('Data received:', data);
            console.log("datos obtenidos");
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Call the deleteRol function to delete a Application
        deleteApplication(id);
    };

    const handleUpdate = (id) => {
        console.log("update");
    };

    const handleRoles = (id) => {
        console.log("roles");
      };

    return (
        <div className='content-applications'>
            <div className='block'>

                <div className='list-applications'>
                    <h3>Icon:</h3>
                </div>
                <div className='list-applications'>
                    <h3>URL:</h3>
                </div>
                <div className='list-applications'>
                    <h3></h3>
                </div>

            </div>

            {Array.isArray(Applications) &&
                Applications.map((application) => (
                    <div key={application.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-applications'>
                            <img className='borders applicationIcon' alt='icon1' src={`http://localhost:8000/images/${application.icon}`}></img>
                        </div >
                        <div className='list-applications'>
                            <p className='borders'>{application.URL}</p>
                        </div >
                        <div className='list-applications email-space'>
                            <p className='borders'>
                                <Button onClick={() => handleDelete(application.id)} type="primary" className='ButtonDelete'>Delete</Button>
                                &nbsp;&nbsp;
                                <Button onClick={() => handleUpdate(application.id)} type="primary" className='ButtonUpdate'>Update</Button>
                                &nbsp;&nbsp;  
                                <Button onClick={() => handleRoles(application.id)} type="primary">Roles</Button>
                            </p>
                        </div>
                    </div>


                ))}
        </div>
    )
}

export default Applications;