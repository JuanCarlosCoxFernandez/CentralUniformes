import React, { useEffect, useState } from 'react';
import './roles.css';
import { getAllRoles, getRolById, createRol, updateRol, deleteRol } from '../../services/roleService';
import {Button, Popover, notification} from 'antd';
function Roles() {
    const [Roles, setRoles] = useState([]);
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

    const [newRol, setNewRol] = useState({
        name: '',
    });

    useEffect(() => {
        // Llama a la función de servicio para obtener roles cuando el componente se monta
        getAllRoles().then((data) => {
            setRoles(data); // Actualiza el estado con los roles obtenidos
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
        // Call the deleteRol function to delete a Rol
        await deleteRol(id);
        notification.success({message:'Rol deleted',duration:5})
      };
    
      const handleUpdate = async(rol) => {
        console.log(rol.name);
        if (!newRol.name) {
            newRol.name = rol.name
        }
        try {
            console.log("Datos del formulario:", newRol);

            await updateRol(rol.id, newRol);
            console.log("datos obtenidos");

            // Reinicia los valores del formulario
            setNewRol({
                name: '',
            });

            notification.success({message:'Rol updated',duration:5})

            const updatedRol = await getAllRoles();
            setRoles(updatedRol);


        } catch (error) {
            console.error('Error al actualizar la aplicacion:', error);
            notification.error({message:'Error updating rol',duration:5})
        };
      };

      const handleCreate = async () => {
        try {
            console.log("Datos del formulario:", newRol);

            // Llama a la función para crear una nueva noticia en el servidor
            await createRol(newRol);

            notification.success({message:'Rol created',duration:5})

            // Reinicia los valores del formulario
            setNewRol({
                name: '',
            });

            // Cierra el formulario


        } catch (error) {
            console.error('Error al crear el rol:', error);
            notification.error({message:'Error creating rol',duration:5})
        }
    };

    const generalForm = (
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
            <div>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    value={newRol.name}
                    onChange={(e) => setNewRol({ ...newRol, name: e.target.value })}
                />
            </div>
            <div><br />
                <Button type="primary" htmlType="submit" className='ButtonUpdate'>Create</Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={hidec} className='ButtonDelete'>Cancel</Button>
            </div>
        </form>
    );

    const UpdateForm = (rol, index) => (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(rol); }}>
            <div>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    placeholder={rol.name}
                    value={newRol.name}
                    onChange={(e) => setNewRol({ ...newRol, name: e.target.value })}
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
        <div className='content-roles'>
            <div className='block'>

                <div className='list-roles'>
                    <h3>Name:</h3>
                </div>
                <div className='list-roles'>
                    <h3></h3>
                </div>
                <div className='list-news popover'>
                    <br></br>
                    <Popover content={generalForm} trigger="click" open={openC}
                        onOpenChange={handleOpenChangec}>
                        <Button type="primary" className='ButtonUpdate'>Create</Button>
                    </Popover>
                </div>

            </div>

            {Array.isArray(Roles) &&
                Roles.map((rol, index) => (
                    <div key={rol.id} style={{ marginBottom: '20px' }} className='block'>
                        <div className='list-roles'>
                            <p className='borders'>{rol.name}</p>
                        </div >
                        <div className='list-roles email-space'>
                            <p className='borders'>
                                <Button onClick={() => handleDelete(rol.id)} type="primary" className='ButtonDelete'>Delete</Button>
                                &nbsp;&nbsp;
                                <Popover
                                    content={UpdateForm(rol, index)}
                                    trigger="click"
                                    forceRender={true}
                                    open={open[index]}
                                    onOpenChange={(e) => handleOpenChange(e, index)}
                                >
                                    <Button type="primary" className='ButtonUpdate'>Update</Button>
                                </Popover>
                            </p>
                        </div>
                    </div>


                ))}

        </div>
    );
}

export default Roles;