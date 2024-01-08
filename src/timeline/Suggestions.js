import React from 'react';
import "./Suggestions.css";
import { Avatar} from '@mui/material';

function Sugesstions() {
  return <div className='sugesstions'>
     <div className='sugesstions__title'><h3>Suggestions</h3></div>
     <div className='sugesstions__usernames'>

      <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
          <Avatar></Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>ALAN</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar></Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Web Dev</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar></Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Mark J</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 

        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            <Avatar></Avatar>
          </span>
          <div className='username__info'>
            <span className='username'>Solent_Uni</span>
            <span className='relation'>New to Solent Faces</span>
          </div>
        </div>  
        <button className='follow__button'>Follow</button>
        </div> 


        <div className='sugesstions__username'>
        <div className='username__left'>
          <span className='avatar'>
            
          </span>
          <div className='username__info'>
          
            <span className='relation'><h3>@2024 SOLENT FACES - by Cristian-Nicusor Constantin</h3></span>
          </div>
        </div>  
        
        </div> 

    </div>
  </div>
}

export default Sugesstions