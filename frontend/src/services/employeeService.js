import axios from 'axios';

const endpoint = 'http://localhost:8000/api'; // Reemplaza con la URL de tu servidor

// Función para obtener todos los empleados
export const getAllUsers = async () => {
  // try {
  //   const response = await axios.get(`${endpoint}/users`);
  //   console.log(response);
  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
  try {
    const response = await axios.get(`${endpoint}/users`);
    console.log('Service response:', response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener un empleado por ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${endpoint}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para crear un nuevo empleado
export const createUser = async (employeeData) => {
  try {
    const response = await axios.post(`${endpoint}/users`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para actualizar un empleado por ID
export const updateUser = async (id, employeeData) => {
  try {
    const response = await axios.put(`${endpoint}/users/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar un empleado por ID
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${endpoint}/employees/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
