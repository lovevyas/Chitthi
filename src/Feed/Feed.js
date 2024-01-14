import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';
import db from '../firebase'


function Feed() {
  const [posts, setPosts] = useState([]);
  console.log(db.collection('posts'));
   useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])
  
  

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://rb.gy/dq0big"
        message="This is working"
        timestamp="Timeing : here"
        username="user1"
        image="https://rb.gy/kk5ted"
      />
      <Post
        profilePic="https://rb.gy/mpdmhm"
        message="This is working"
        timestamp="Timeing : here"
        username="user1"
        image="https://rb.gy/4sg71k"
      />
      <Post
        profilePic="https://rb.gy/mpdmhm"
        message="This is working"
        timestamp="Timeing : here"
        username="user1"
        image="https://rb.gy/gljf4u"
      />
      {posts.map(post => (
      <Post
        key={post.data.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp ? post.data.timestamp.toDate() : null}
        username={post.data.username}
        image={post.data.image}
      />
      ))}
    </div>
  );
}

export default Feed;
