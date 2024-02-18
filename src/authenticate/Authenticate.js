import React, {useState} from 'react'
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className='authenticate'>
    <div className='auth__left'>
      <img src='https://th.bing.com/th/id/OIG.lH9fj81ayjsGuUNzLS7d?pid=ImgGn' alt='' />   
       </div>
    <div className='auth__right'>
      {active === "login" ? (<Login /> ):(<Signup />)}
   
      <div className='auth__more'>
       
        <span>
        {active ==="login" ? (
        <>
        Don't have an account? <button onClick={handleChange}>Sign Up</button>
        </>
        ) : (
        <>
        Have an account? <button onClick={handleChange}>Login</button>
        </>
        )}
         </span>
      </div>
    </div>

    </div>


  
  );
  
        }

export default Authenticate