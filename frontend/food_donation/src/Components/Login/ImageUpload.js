

import React, { useState } from 'react';
import axios from 'axios';
import "./Upload.css"
const ImageUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('caption', caption);
    formData.append('location', location);

    axios.post('http://localhost:8080/api/images/upload', formData)
      .then(response => {
        console.log(response.data);
        // Handle success, e.g., show a success message
      })
      .catch(error => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="container">
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} className="input-field" />
      <input type="text" placeholder="Caption" value={caption} onChange={handleCaptionChange} className="input-field" />
      <input type="text" placeholder="Location" value={location} onChange={handleLocationChange} className="input-field" />
      <button onClick={handleUpload} className="upload-button">Upload</button>
    </div>
  );
};

export default ImageUploadComponent;
