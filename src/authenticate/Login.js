import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password);
      };


  return (
    <div className='login'>
        <img src="https://th.bing.com/th/id/OIG2.w9e8UQZHNWXevhzLNIoV?pid=ImgGn" alt="" />

        <input onChange = {e => setEmail(e.target.value)} type="email" placeholder="Email"
        value={email}
        />
        <input onChange = {e => setPassword(e.target.value)} type="password" placeholder="Password"
        value={password}
        />
        <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login

