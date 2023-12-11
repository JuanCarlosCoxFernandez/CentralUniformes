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
  const body= new FormData();
    body.append('name', user.name);
  try {
    const response = await axios.post(`${endpoint}/register`,body,getOptionsAuth(user));
    console.log('Usuario registrado:', response.data.data.token);

    if (response.user) {
      localStorage.setItem('token', response.data.data.token);
    }
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
}

// Función para actualizar un usuario por ID
export const updateUser = async (id, employeeData) => {
  console.log(employeeData.password);
  const body= new FormData();
    body.append('name', employeeData.name);
    body.append('email', employeeData.email);
    body.append('password', employeeData.password);
  try {
    const response = await axios.put(`${endpoint}/users/${id}`, employeeData, getOptionsToken(localStorage.getItem("token")));
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
    const response = await axios.post(`${endpoint}/login`,null,getOptionsAuth(user));
    // Si la solicitud fue exitosa, actualizamos el estado para indicar que el usuario está conectado.
    console.log('Usuario autenticado:', response.data.data.token);
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("IdUser", response.data.data.idUser);
    return response.data.data.token;
  } catch (error) {
    // Si hay un error en la autenticación, puedes manejarlo aquí.
    console.error('Error de autenticación:', error.response.data);
  }
};

export async function logoutUser(user) {
  try {
    const response = await axios.post(`${endpoint}/users/logout`,null,getOptionsToken(localStorage.getItem("token")));
    localStorage.removeItem("token");
    localStorage.removeItem("idUser");
    localStorage.removeItem("id");
    console.log("Usuario deslogueado");
    return response.data;
  } catch (error) {
    console.error('Error de logout:', error.response.data);
  }
}

export function setTokenOptions() {
  const token = localStorage.getItem("token");

  let options = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  return options;
};

export async function addRoleUser(user,rol){
  try {
    const response = await axios.get(`${endpoint}/user/${user}/add-role/${rol}`,getOptionsToken(localStorage.getItem("token")));
    console.log('Rol añadido al usuario',response.data);
  } catch (error) {
    console.error('Error al asignar rol:', error.response.data);
  }
};

export async function loadRoleUser(user) {
  try {
    const response = await axios.get(`${endpoint}/user/${user}/show-roles`,getOptionsToken(localStorage.getItem("token")));
    return response.data.data;
  } catch (error) {
    console.error('Error al mostrar los roles');
  }
};

export async function removeRoleUser(user,rol) {
  try {
    const response = await axios.get(`${endpoint}/user/${user}/remove-role/${rol}`,getOptionsToken(localStorage.getItem("token")));
    console.log('Rol eliminado del usuario',response.data);
  } catch (error) {
    console.error('Error al eliminar el rol del usuario');
  }
};
