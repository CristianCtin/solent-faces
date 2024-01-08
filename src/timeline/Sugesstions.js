import React from 'react';
import "./Sugesstions.css";

function Sugesstions() {
  return <div className='sugesstions'>
     <div className='sugesstions__title'>Suggestions for you</div>
     <div className='sugesstions__usernames'>
      <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar>C</Avatar>
          </span>
        </div>
        <button className='follow__button'>Follow</button>
        </div> 
    </div>
  
}

export default Sugesstions