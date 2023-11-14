import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Reemplaza con la URL de tu servidor

// Función para obtener todos los empleados
export const getAllEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener un empleado por ID
export const getEmployeeById = async (employeeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para crear un nuevo empleado
export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para actualizar un empleado por ID
export const updateEmployee = async (employeeId, employeeData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/employees/${employeeId}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar un empleado por ID
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
