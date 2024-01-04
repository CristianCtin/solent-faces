import React from 'react';
import "./Sidenav.css";


function Sidenav() {
  return <div className='sidenav'>
    <img className='sidenav__logo' src='https://th.bing.com/th/id/OIG.lH9fj81ayjsGuUNzLS7d?pid=ImgGn' 
    alt='' 
    />
    <div className='sidenav__buttons'>
        <div className='side__button'>
            {/* Icons */}
            <span>Home</span>
        </div>
    </div>
  </div>
  
}

export default Sidenav