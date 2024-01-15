import React, { useState } from 'react';
import './MessageSender.css';
// @material-ui dependency clash opt to @mui
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {Avatar } from '@mui/material';
import { useStateValue } from '../../StateProvider';

import db from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




function MessageSender() {
  
  const [{user} , dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [inputURL, setInputURL] = useState("");
  const [likeCount, setLikeCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: inputURL,
      like: likeCount,
    });

    setInput("");
    setInputURL("");
    setLikeCount(0);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
