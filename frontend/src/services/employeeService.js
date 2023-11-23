import axios from 'axios';

const endpoint = 'http://localhost:8000/api'; // Servidor

export function getOptionsAuth(user) {
  let base64UserAndPassword = window.btoa(user.email + ":" + user.password);

  let basicAccess = 'Basic ' + base64UserAndPassword;

  let options = {
    headers: {
      'Authorization': basicAccess,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  return options;
}

export function getOptionsToken(token) {
  let bearerAccess = 'Bearer ' + token;

  let options = {
    headers: {
      'Authorization': bearerAccess,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return options;
}

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${endpoint}/users`,getOptionsToken(localStorage.getItem("token")));
    console.log('Service response:', response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener un usuario por ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${endpoint}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para crear un nuevo usuario
export async function register(user) {
  console.log(user.name,user.email,user.password);
  try {
    const response = await axios.post(`${endpoint}/register`,user);
    console.log('Usuario registrado:', response.data.token);

    if (response.user) {
      localStorage.setItem('token', response.data.token);
    }
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
}

// Función para actualizar un usuario por ID
export const updateUser = async (id, employeeData) => {
  try {
    const response = await axios.put(`${endpoint}/users/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar un usuario por ID
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${endpoint}/users/${id}`,getOptionsToken(localStorage.getItem("token")));
    console.log("usuario eliminado");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Función para loguear el usuario
export async function loginUser(user) {
  console.log(user.email);
  try {
    const response = await axios.post(`${endpoint}/login`,user);
    // Si la solicitud fue exitosa, actualizamos el estado para indicar que el usuario está conectado.
    console.log('Usuario autenticado:', response.data.token);
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    // Si hay un error en la autenticación, puedes manejarlo aquí.
    console.error('Error de autenticación:', error.response.data);
  }
};

export function setTokenOptions() {
  const token = localStorage.getItem("token");

  let options = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  return options;
};
