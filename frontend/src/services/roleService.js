import axios from 'axios';
import { getOptionsToken } from './employeeService';

const endpoint = 'http://localhost:8000/api'; // Servidor

export const getAllRoles = async () => {
    try {
        const response = await axios.get(`${endpoint}/roles`,getOptionsToken(localStorage.getItem("token")));
        console.log('Service response:', response.data.data);
        return response.data.data;
      } catch (error) {
        console.error('Error al cargar los roles');
      }
}

export const getRoleById = async (id) => {
    try {
      const response = await axios.get(`${endpoint}/roles/${id}`,getOptionsToken(localStorage.getItem("token")));
      return response.data;
    } catch (error) {
      console.error('Error al obtener el rol especifico');
    }
  };

  export async function createRol(rol) {
    console.log(rol.name);
    try {
      const response = await axios.post(`${endpoint}/roles`, rol, getOptionsToken(localStorage.getItem("token")));
      console.log('Rol registrado:', response.data);
    } catch (error) {
      console.log('Error', error);
    }
  }

  export const updateRol = async (id, RolData) => {
    try {
      const response = await axios.put(`${endpoint}/roles/${id}`,RolData,getOptionsToken(localStorage.getItem("token")));
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  export const deleteRol = async (id) => {
    try {
      const response = await axios.delete(`${endpoint}/roles/${id}`,getOptionsToken(localStorage.getItem("token")));
      console.log("usuario eliminado");
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  