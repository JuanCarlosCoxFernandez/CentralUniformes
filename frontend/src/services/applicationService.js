import axios from 'axios';
import { getOptionsToken } from './employeeService';

const endpoint = 'http://localhost:8000/api'; // Servidor

export const getAllApplication = async () => {
    try {
        const response = await axios.get(`${endpoint}/applications`,getOptionsToken(localStorage.getItem("token")));
        console.log('Service response:', response.data.data);
        return response.data.data;
      } catch (error) {
        console.error('Error al cargar las aplicaciones');
      }
}

export const getApplicationById = async (id) => {
    try {
      const response = await axios.get(`${endpoint}/applications/${id}`,getOptionsToken(localStorage.getItem("token")));
      return response.data;
    } catch (error) {
      console.error('Error al obtener la aplicacion especifica');
    }
  };

  export async function createApplication(app) {
    console.log(app.URL);
    const body= new FormData();
    body.append('URL', app.URL);
    body.append('icon', app.icon)
    try {
      const response = await axios.post(`${endpoint}/applications`, body, getOptionsToken(localStorage.getItem("token")));
      console.log('Aplicacion registrada:', response.data);
    } catch (error) {
      console.log('Error', error);
    }
  }

  export const updateApplication = async (id, ApplicationData) => {
    const body= new FormData();
    body.append('URL', ApplicationData.URL);
    body.append('icon', ApplicationData.icon)
    try {
      const response = await axios.post(`${endpoint}/applications/${id}`,body,getOptionsToken(localStorage.getItem("token")));
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  export const deleteApplication = async (id) => {
    try {
      const response = await axios.delete(`${endpoint}/applications/${id}`,getOptionsToken(localStorage.getItem("token")));
      console.log("aplicacion eliminada");
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  
export async function addRoleApplication(app,rol){
    try {
      const response = await axios.get(`${endpoint}/application/${app}/add-role/${rol}`,getOptionsToken(localStorage.getItem("token")));
      console.log('Rol añadido a la aplicacion',response.data);
    } catch (error) {
      console.error('Error al asignar rol:', error.response.data);
    }
  };
  
  export async function loadRoleApplication(app) {
    try {
      const response = await axios.get(`${endpoint}/application/${app}/show-roles`,getOptionsToken(localStorage.getItem("token")));
      return response.data.data;
    } catch (error) {
      console.error('Error al mostrar los roles');
    }
  };
  
  export async function removeRoleApplication(app,rol) {
    try {
      const response = await axios.get(`${endpoint}/application/${app}/remove-role/${rol}`,getOptionsToken(localStorage.getItem("token")));
      console.log('Rol eliminado de la aplicacion',response.data);
    } catch (error) {
      console.error('Error al eliminar el rol de la aplicacion');
    }
  };