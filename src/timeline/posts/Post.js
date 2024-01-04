import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorder  from '@mui/icons-material/BookmarkBorder';

function Post() {
  return (
    
    <div className='post'>
        <div className='post_header'>
            <div className='post__headerAuthor'>
            <Avatar>C</Avatar>
           Cristian_ • <span>12h</span>

            </div>

            <MoreHorizIcon />
           
        </div>
        <div className='post_image'>
            <img src="https://studyabroadlife.org/wp-content/uploads/2021/04/Solent-University.jpg"></img>
        </div>
        <div className='post_footer'>
          <div className='post__footerIcons'>
            <div className='post_iconsMain'>
              <FavoriteBorderIcon className='postIcon'/>
              <ChatBubbleOutlineIcon className='postIcon'/>
              <TelegramIcon className='postIcon'/>
              
            </div>

            <div className='post_iconsSave'></div> 
            <BookmarkBorder className='postIcon'/>

          </div>
          Liked by 11 people


        </div>
    </div>
    
    
  );
}

export default Post