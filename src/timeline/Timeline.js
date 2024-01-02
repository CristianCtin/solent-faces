import React from 'react';
import "./Timeline.css";
import Sugesstions from './Sugesstions';

function Timeline() {
  return <div className='timeline'>
    <div className='timeline__left'>Timeline</div>
    <div className='timeline__right'></div>
    <Sugesstions />
  </div>
  
}

export default Timeline