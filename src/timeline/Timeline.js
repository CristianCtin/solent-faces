import React, { useState } from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from "./posts/Post";



function Timeline() {

  const[posts, setPosts] = useState([
    {
      user: 'Cristian_',
      postImage: "https://www.britishacademiccenter.com/wp-content/uploads/2019/03/solent-uni.jpg",
      likes: 55,
      timestamp: "2d",
    },
    {
      user: 'Alesandro',
      postImage: "https://mabecs.com/wp-content/uploads/2019/02/UniSolent-slider1.jpg",
      likes: 23,
      timestamp: "12h",
    },
    {
      user: 'Natalia',
      postImage: "https://th.bing.com/th/id/R.86ca6e60aee1798c4bc076e67e7ae8d8?rik=5LAsszx%2fMpcCOw&pid=ImgRaw&r=0",
      likes: 12,
      timestamp: "8h",
    },
    {
      user: 'Stefan',
      postImage: "https://www.installation-international.com/wp-content/uploads/2019/01/savilleav-solent-uni-2016-189-jpg.jpg",
      likes: 7,
      timestamp: "2h",
    },
   
  
  ]);
 
  return (

  
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline