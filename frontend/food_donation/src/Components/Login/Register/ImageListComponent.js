import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import './List1.css'; 
import He from '../navbar';
import Footer from '../Footer';

const ImageListComponent = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
       
        const token = localStorage.token;
        if (!token) {
         
          navigate('/login');
          return;
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await axios.get('http://localhost:8080/api/images/all');
        setImages(response.data);
      } catch (error) {
        console.error(error);
       
      }
    };

    fetchImages();
  }, [navigate]);

  const handleButtonClick = () => {
    navigate("/upload")
    console.log('Button clicked!');
  };

  return (
    <>
    <He/>
    <div>
      <div className="button-container">

  <button  onClick={handleButtonClick}>Upload Image </button>
</div>

      <div className="image-list-container">
        <ul className="image-list">
          {images.map((image) => (
            <li key={image.id} className="image-item">
              <Link to={`/images/${image.id}`} className="image-link-container">
                <div className="image-container">
                  <img src={`data:image/jpeg;base64,${image.data}`} alt={image.caption} />
                </div>
              </Link>
              <div className="image-details">
                <p className="image-caption">
                  <strong>Caption:</strong> {image.caption}
                </p>
                <p className="image-location">
                  <strong>Location:</strong> {image.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
     </>
  );
};

export default ImageListComponent;
