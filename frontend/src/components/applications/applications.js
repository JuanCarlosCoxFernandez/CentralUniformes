import React, { useEffect, useState } from 'react';
import './applications.css';
import { getAllApplication, createApplication, updateApplication, deleteApplication } from '../../services/applicationService';
import { Button, Popover, notification } from 'antd';
import { useNavigate } from "react-router-dom";

function Applications() {
    const [Applications, setApplications] = useState([]);
    const [open, setOpen] = useState([]);
    const [openC, setOpenC] = useState(false);

    const hidec = () => {
        setOpenC(false);
    };
    const handleOpenChangec = (newOpen) => {
        setOpenC(newOpen);
    };

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

    const [newApp, setNewApp] = useState({
        URL: '',
        icon: '', // Cambiado a null ya que el valor inicial de un input de tipo archivo debería ser nulo
    });
    useEffect(() => {
        // Llama a la función de servicio para obtener aplicaciones cuando el componente se monta
        getAllApplication().then((data) => {
            setApplications(data); // Actualiza el estado con las aplicaciones obtenidas


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

    const handleDelete = async (id) => {
        // Call the deleteRol function to delete a Application
        await deleteApplication(id);
        notification.success({message:'Application deleted successfully',duration:5})
    };

    const handleUpdate = async (app) => {
        console.log(app.URL);
        if (!newApp.URL) {
            newApp.URL = app.URL
        }
        if (!newApp.icon) {
            newApp.icon = app.icon
        }
        try {
            console.log("Datos del formulario:", newApp);

            await updateApplication(app.id, newApp);
            console.log("datos obtenidos");

            // Reinicia los valores del formulario
            setNewApp({
                URL: '',
                icon: '',
            });

            const updatedApp = await getAllApplication();
            setApplications(updatedApp);

            //Alert success
            notification.success({message:'Application updated correcly', duration:5})
        } catch (error) {
            console.error('Error al actualizar la aplicacion:', error);
            //Alert error
            notification.error({message:'It wasn´t possible to update the application', duration:5})
        };
    };

    const handleCreate = async () => {
        try {
            console.log("Datos del formulario:", newApp);

            // Llama a la función para crear una nueva noticia en el servidor
            await createApplication(newApp);


            // Reinicia los valores del formulario
            setNewApp({
                URL: '',
                icon: '',
            });

            // Cierra el formulario

            //Alert success
            notification.success({message:'Application created correcly', duration:5})
        } catch (error) {
            console.error('Error al crear la aplicacion:', error);
            //Alert error
            notification.error({message:'It wasn´t possible to create the application', duration:5})
        }
    };
    const navigate = useNavigate();
    const handleRoles = (id) => {
        localStorage.setItem('id', id);
        navigate("/appRolview");
    };

    const generalForm = (
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
            <div>
                <label htmlFor="URL">URL:</label><br />
                <input
                    type="text"
                    id="URL"
                    value={newApp.URL}
                    onChange={(e) => setNewApp({ ...newApp, URL: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="icon">ICON:</label><br />
                <input
                    type="file"
                    id="icon"
                    accept="image/*"
                    onChange={(e) => setNewApp({ ...newApp, icon: e.target.files[0] })}
                />
            </div>
            <div><br />
                <Button type="primary" htmlType="submit" className='ButtonUpdate'>Create</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={hidec} className='ButtonDelete'>Cancel</Button>
            </div>
        </form>
    );

    const UpdateForm = (app, index) => (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(app); }}>
            <div>
                <label htmlFor="URL">URL:</label><br />
                <input
                    type="text"
                    id="URL"
                    placeholder={app.URL}
                    value={newApp.URL}
                    onChange={(e) => setNewApp({ ...newApp, URL: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="icon">ICON:</label><br />
                <input
                    type="file"
                    id="icon"
                    accept="image/*"
                    placeholder={app.icon}
                    onChange={(e) => setNewApp({ ...newApp, icon: e.target.files[0] })}
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
        <div className='content-applications'>
            <div className='block'>

                <div className='list-applications guia'>
                    <h3>Icon:</h3>
                </div>
                <div className='list-applications guia '>
                    <h3>URL:</h3>
                </div>

                <div className='list-news popover'>
                    <br></br>
                    <Popover content={generalForm} trigger="click" open={openC}
                        onOpenChange={handleOpenChangec}>
                        <Button type="primary" className='ButtonUpdate'>Create</Button>
                    </Popover>
                </div>

            </div>

            {Array.isArray(Applications) &&
                Applications.map((application, index) => (
                    <div key={application.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-applications'>
                            <img className='borders applicationIcon' alt='icon1' src={`http://localhost:8000/images/${application.icon}`}></img>
                        </div >
                        <div className='list-applications'>
                            <p className='borders'>{application.URL}</p>
                        </div >
                        <div className='list-applications email-space'>
                            <p className='borders buttons'>
                                <Button onClick={() => handleDelete(application.id)} type="primary" className='ButtonDelete'>Delete</Button>
                                &nbsp;&nbsp;
                                <Popover
                                    content={UpdateForm(application, index)}
                                    trigger="click"
                                    forceRender={true}
                                    open={open[index]}
                                    onOpenChange={(e) => handleOpenChange(e, index)}
                                >
                                    <Button type="primary" className='ButtonUpdate'>Update</Button>
                                </Popover>
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