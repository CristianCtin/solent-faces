import React from 'react';
import "./Sugesstions.css";
import { Avatar} from '@mui/material';

function Sugesstions() {
  return <div className='sugesstions'>
     <div className='sugesstions__title'>Suggestions for you</div>
     <div className='sugesstions__usernames'>

      <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar>C</Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Cristian_</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar>C</Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Cristian_</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar>C</Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Cristian_</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar>C</Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Cristian_</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

    </div>
  </div>
}

export default Sugesstions