import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
        <div className='post_image'></div>
        <div className='post_footer'></div>
    </div>
  )
}

export default Post