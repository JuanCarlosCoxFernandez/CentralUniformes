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
    console.log(news);
    console.log(news.title);
    const body= new FormData();
    body.append('title', news.title);
    body.append('content', news.content);
    body.append('image', news.image);
    try {
      const response = await axios.post(`${endpoint}/news`, body, getOptionsToken(localStorage.getItem("token")));
      console.log('noticia registrada:', response.data);
    } catch (error) {
      console.log('Error', error);
    }
  }

  export const updateNew = async (id, NewData) => {

    const body= new FormData();
    body.append('title', NewData.title);
    body.append('content', NewData.content);
    body.append('image', NewData.image)
    try {
      const response = await axios.post(`${endpoint}/news/${id}`,body,getOptionsToken(localStorage.getItem("token")));
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