import React, { useEffect, useState } from 'react';
import './home.css';
import { getAllNew, getNewById, createnew, updateNew, deleteNew } from '../../services/newService';
import { Carousel } from 'antd';

function Home(props) {
    const [News, setNews] = useState([]);
    useEffect(() => {
        // Llama a la función de servicio para obtener aplicaciones cuando el componente se monta
        getAllNew().then((data) => {
            setNews(data); // Actualiza el estado con las aplicaciones obtenidas
            console.log('Data received:', data);
            console.log("datos obtenidos");
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);


    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const dotStyles = {
        background: '#94C564', // Cambia el color de los dots
      }
    const carouselStyles = {
        backgroundColor: '#f0f0f0', // Cambia el color de fondo del carrusel
    };


    return (
        // main container
        <div className='content-home'>
        <Carousel afterChange={onChange}>
            {Array.isArray(News) &&
                News.map((news) => (
                    // Container
                    <div key={news.id} style={{ marginBottom: '20px'}}>
                        <div className='hometitle'>
                            <h2>{news.title}</h2>
                        </div >
                        <br></br>
                        {/* carrousel container */}
                        <div className='homeContainer'>
                            {/* right */}
                            <div className='half-home-content cont1'>
                                <textarea  readOnly className='cont1-text'>{news.content}</textarea>
                            </div>
                            {/* left */}
                            <div className='half-home-content cont2'>
                                <img alt='icon1' src={`http://localhost:8000/images/${news.image}`} className='image-home'></img>
                            </div>
                        </div > 
                        <br/>{/* pone abajo las flechas del carrousel */}
                    </div>
                ))}
        </Carousel>
        </div>
    )
}

export default Home;