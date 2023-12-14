import React, { useEffect, useState } from 'react';
import { getAllNew, getNewById, updateNew, deleteNew, createNew } from '../../services/newService';
import './news.css';
import { Button, Popover, notification } from 'antd';


function News() {
  const [News, setNews] = useState([]);
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

  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    image: '', // Cambiado a null ya que el valor inicial de un input de tipo archivo debería ser nulo
  });

  useEffect(() => {
    // Llama a la función de servicio para obtener empleados cuando el componente se monta
    getAllNew().then((data) => {
      setNews(data); // Actualiza el estado con los empleados obtenidos

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

  const handleDelete = (id) => {
    deleteNew(id);
  };

  const handleUpdate = async (news) => {
    console.log(news.title);
    if (!newNews.title) {
      newNews.title = ""
    }
    if (!newNews.content) {
      newNews.content = ""
    }
    if (!newNews.image) {
      newNews.image = ""
    }
    try {
      console.log("Datos del formulario:", newNews);

      await updateNew(news.id, newNews);
      console.log("datos obtenidos");

      // Reinicia los valores del formulario
      setNewNews({
        title: '',
        content: '',
        image: '',
      });

      notification.success({message:'New updated successfully',duration:5})
      // Vuelve a cargar la lista de noticias
      const updatedNews = await getAllNew();
      setNews(updatedNews);


    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
      notification.error({message:'Error trying to update new',duration:5})
    };
    // Cierra el Popover después de la actualización

  };

  const handleCreate = async () => {
    try {
      console.log("Datos del formulario:", newNews);

      // Llama a la función para crear una nueva noticia en el servidor
      await createNew(newNews);


      // Reinicia los valores del formulario
      setNewNews({
        title: '',
        content: '',
        image: '',
      });

      
      notification.success({message:'New created successfully',duration:5})

    } catch (error) {
      console.error('Error al crear la noticia:', error);
      notification.error({message:'Error creating new'})
    }
  };

  const generalForm = (
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
      <div>
        <label htmlFor="title">Título:</label><br />
        <input
          type="text"
          id="title"
          value={newNews.title}
          onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="content">Contenido:</label><br />
        <textarea
          id="content"
          value={newNews.content}
          onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label><br />
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })}
        />
      </div>
      <div><br />
        <Button type="primary" htmlType="submit" className='ButtonUpdate'>Create</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={hidec} className='ButtonDelete'>Cancel</Button>
      </div>
    </form>
  );

  const UpdateForm = (news, index) => (
    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(news); }}>
      <div>
        <label htmlFor="title">Título:</label><br />
        <input
          type="text"
          id="title"
          placeholder={news.title}
          value={newNews.title}
          onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="content">Contenido:</label><br />
        <textarea
          id="content"
          placeholder={news.content}
          value={newNews.content}
          onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label><br />
        <input
          type="file"
          id="image"
          accept="image/*"
          placeholder={news.image}
          onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })}
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
    <div className='content-news'>

      <div className='block'>
        <div className='list-news'>
          <h3>Title:</h3>
        </div>
        <div className='list-news'>
          <h3>Content:</h3>
        </div>
        <div className='list-news'>
          <h3>Image:</h3>
        </div>
        <div className='list-news popover'>
          <br></br>
          <Popover content={generalForm} trigger="click" open={openC}
            onOpenChange={handleOpenChangec}>
            <Button type="primary" className='ButtonUpdate'>Create</Button>
          </Popover>
        </div>

      </div>
      {Array.isArray(News) &&
        News.map((news, index) => (
          <div key={news.id} style={{ marginBottom: '20px' }} className='block'>
            <div className='list-news'>
              <p className='borders'>{news.title}</p>
            </div >
            <div className='list-news'>
              <p className='borders'>{news.content}</p>
            </div >
            <div className='list-news'>
              <img className='borders newsImage' alt='icon1' src={`http://localhost:8000/images/${news.image}`}></img>
            </div>
            <div className='list-news email-space'>
              <p className='borders'>
                <Button onClick={() => handleDelete(news.id)} type="primary" className='ButtonDelete'>Delete</Button>
                &nbsp;&nbsp;
                <Popover
                  content={UpdateForm(news, index)}
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

export default News;