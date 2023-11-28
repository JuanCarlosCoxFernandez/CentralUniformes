import axios from 'axios';
import { getOptionsToken } from './employeeService';

const endpoint = 'http://localhost:8000/api'; // Servidor


export const getAllNew = async () => {
    try {
        const response = await axios.get(`${endpoint}/news`);
        console.log('Service response:', response.data.data);
        return response.data.data;
      } catch (error) {
        console.error('Error al cargar las noticias');
      }
}

export const getNewById = async (id) => {
    try {
      const response = await axios.get(`${endpoint}/news/${id}`,getOptionsToken(localStorage.getItem("token")));
      return response.data;
    } catch (error) {
      console.error('Error al obtener la noticia especifica');
    }
  };

  export async function createNew(news) {
    console.log(news.title);
    try {
      const response = await axios.post(`${endpoint}/news`, news, getOptionsToken(localStorage.getItem("token")));
      console.log('noticia registrada:', response.data);
    } catch (error) {
      console.log('Error', error);
    }
  }

  export const updateNew = async (id, NewData) => {
    try {
      const response = await axios.put(`${endpoint}/news/${id}`,NewData,getOptionsToken(localStorage.getItem("token")));
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  export const deleteNew = async (id) => {
    try {
      const response = await axios.delete(`${endpoint}/news/${id}`,getOptionsToken(localStorage.getItem("token")));
      console.log("noticia eliminada");
      return response.data;
    } catch (error) {
      console.log('Error', error);
    }
  };