

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import './/Feedback.css';
import Footer from './Footer';
import He from './navbar';

const CustomFeedbackForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    interactionType: '',
    officers: '',
    description: '',
    satisfaction: '',
    behavior: '',
    concerns: '',
    evidence: null,
    isAnonymous: false,
    language: '',
    suggestions: '',
    contactInfo: '',
    useAutoLocation: true,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  const [autoLocation, setAutoLocation] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setFormData((prevData) => ({
      ...prevData,
      date: currentDate,
      time: currentTime,
    }));
  }, []);

  useEffect(() => {
    if (formData.useAutoLocation && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=15b41d7b819c440590ef22b8ab3accf9`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              setPlaceName(data.results[0].formatted);
              setAutoLocation(data.results[0].formatted);
            }
          } catch (error) {
            console.error('Error fetching place name:', error.message);
          }
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, [formData.useAutoLocation]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === 'isAnonymous') {
      setFormData((prevData) => ({
        ...prevData,
        isAnonymous: checked,
        contactInfo: checked ? '' : prevData.contactInfo,
        language: checked ? '' : prevData.language,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!user.loggedIn) {
     
      navigate('/login');
      return;
    }
navigate("/")
    const formDataWithLocation = {
      ...formData,
      location: formData.useAutoLocation ? placeName || 'Location not available' : formData.location,
      autoLocation: formData.useAutoLocation ? autoLocation || 'Auto location not available' : '',
    };

    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
      const response = await axios.post('http://localhost:8080/api/reports', formDataWithLocation);

      console.log('Form Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending form data:', error.message);
    }
  };

  return (
    <>
    <He/>
    <div className="custom-feedback-container">
      <br></br>
      <br></br>
      <h2>Police Feedback Form</h2>
      <form onSubmit={handleSubmit} className="custom-feedback-form">
    <label>
      Name:
      <textarea
      required
        name="concerns"
        value={formData.concerns}
        onChange={handleChange}
        placeholder="Any specific concerns or issues raised"
        />
    </label>
        <label>
          Date:
          <input requried type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>

        <label>
          Time:
          <input requried type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>

        <label>
  Case Type:
  <select
  required
    name="interactionType"
    value={formData.interactionType}
    onChange={handleChange}
  >
    <option value="">Select case type</option>
    <option value="rape">Rape Case</option>
    <option value="robbery">Robbery Case</option>
    <option value="abuse">Abuse Case</option>
    <option value="murder">Murder Case</option>
    <option value="kidnap">Kidnap Case</option>
  </select>
</label>

        <label>
          Officers Involved:
          <input
            type="text"
            name="officers"
            value={formData.officers}
            onChange={handleChange}
            placeholder="Names or badge numbers"
            />
        </label>

        <label>
          Description:
          <textarea
          required
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of the incident"
            />
        </label>

        <label>
          Satisfaction:
          
          <select required name="satisfaction" value={formData.satisfaction} onChange={handleChange}>
            <option value="">Select satisfaction level</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
          </select>
        </label>

        <label>
          Behavior of Police Officers:
          <textarea
            name="behavior"
            value={formData.behavior}
            onChange={handleChange}
            placeholder="Describe the behavior of the police officers"
            />
        </label>


       

        <label>
          Anonymous:
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            />
        </label>

        <label>
          Email:
          <input
          required
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="Language of interaction"
            disabled={formData.isAnonymous}
            />
        </label>

        <label>
          Suggestions:
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            placeholder="Any suggestions for improvement"
            />
        </label>

        <label>
          Contact Information:
          <input
          required
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Optional: Provide contact information for follow-up"
            disabled={formData.isAnonymous}
            />
        </label>

        <label>
          Use Automatic Location:
          <input
          
            type="checkbox"
            name="useAutoLocation"
            checked={formData.useAutoLocation}
            onChange={handleChange}
            />
        </label>

        {formData.useAutoLocation && (
          <label>
            Automatic Location:
            <input required type="text" name="autoLocation" value={autoLocation || ''} disabled />
          </label>
        )}

        {!formData.useAutoLocation && (
          <label>
            Manual Location:
            <input
            required
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location manually"
              />
          </label>
        )}

        {userLocation && (
          <div>
            Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
        </>
  );
};

export default CustomFeedbackForm;
