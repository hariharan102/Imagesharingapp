
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./List.css";  

const ImageListComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/images/all');
        setImages(response.data);
      } catch (error) {
        console.error(error);
     
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-list-container">
      <h2>All Images</h2>
      <ul className="image-list">
        {images.map((image) => (
          <li key={image.id} className="image-item">
            <Link to={`/images/${image.id}`} className="link-container">
              <div className="image-container">
                <img src={`http://localhost:8080/api/images/${image.id}`} alt={image.caption} />
              </div>
              <div className="image-details">
           Caption: <p className="caption">{image.caption}</p>
       Location:         <p className="location">{image.location}</p>
                <Link to={`/images/${image.id}/add-comment`} className="add-comment-link">
                  Add a Comment
                </Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageListComponent;
