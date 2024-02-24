import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ".//up.css";
import He from '../navbar';
import Footer from '../Footer';

const ImageUploadComponent = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [geolocation, setGeolocation] = useState('');
  const [errors, setErrors] = useState({});

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleManualLocationChange = (event) => {
    setGeolocation(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!selectedFile) {
      newErrors.file = 'Please select a file';
    }

    if (!caption.trim()) {
      newErrors.caption = 'Caption is required';
    }

    if (!geolocation.trim()) {
      newErrors.geolocation = 'Location is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    const apiKey = '15b41d7b819c440590ef22b8ab3accf9'; // Replace with your actual API key
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const location = response.data.results[0]?.formatted || '';
      setGeolocation(location);
    } catch (error) {
      console.error(error);
      alert('Error fetching location details. Please try again.');
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          setCoordinates([position.coords.latitude, position.coords.longitude]);
        } catch (error) {
          console.error(error);
          alert('Error getting location. Please try again.');
        }
      } else {
        alert('Geolocation is not supported by your browser. Please try another browser.');
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (coordinates) {
      const [latitude, longitude] = coordinates;
      fetchLocationDetails(latitude, longitude);
    }
  }, [coordinates]);

  const handleUpload = async () => {
    if (!validateForm()) {
      return;
    }

    if (!coordinates) {
      alert('Location coordinates not available. Please enable location services.');
      return;
    }

    const [latitude, longitude] = coordinates;

    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('caption', caption);
    formData.append('location', geolocation);

    try {
     
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

      const response = await axios.post('http://localhost:8080/api/images/upload', formData);
      console.log(response.data);
      alert('Image uploaded successfully');
      navigate('/allimage'); 
    } catch (error) {
      console.error(error);
      alert('Failed to upload image');
    } finally {
     
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  return (
    <>
    <He/>
    <div className="container">
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} className="input-field" />
      {errors.file && <p className="error">{errors.file}</p>}
      <input type="text" placeholder="Caption" value={caption} onChange={handleCaptionChange} className="input-field" />
      {errors.caption && <p className="error">{errors.caption}</p>}
      <input type="text" placeholder="Location" value={geolocation} onChange={handleManualLocationChange} className="input-field" />
      {errors.geolocation && <p className="error">{errors.geolocation}</p>}
      <button onClick={handleUpload} className="upload-button">Upload</button>
    </div>
    <Footer/>
    </>
  );
};

export default ImageUploadComponent;
