import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageDetailComponent = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [caption, setCaption] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/images/${id}`, {
          responseType: 'arraybuffer',
        });

        const base64Image = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        setImageData(`data:image/png;base64,${base64Image}`);
      } catch (error) {
        console.error(error);
     
      }
    };

    const fetchImageDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/images/details/${id}`);
        setCaption(response.data.caption);
        setComments(response.data.comments);
      } catch (error) {
        console.error(error);
       
      }
    };

    fetchImageData();
    fetchImageDetails();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    axios.post(`http://localhost:8080/api/images/${id}/comment?text=${newComment}`)
      .then(response => {
        console.log(response.data);
        
        setComments([...comments, { text: newComment }]); 
        setNewComment('');
      })
      .catch(error => {
        console.error(error);
        
      });
  };

  return (
    <div>
      {imageData && <img src={imageData} alt="Uploaded" />}
      <p>Caption: {caption}</p>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
        <textarea placeholder="Add a comment..." value={newComment} onChange={handleCommentChange} />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default ImageDetailComponent;
