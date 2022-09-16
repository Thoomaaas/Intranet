import "./css/login.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react'

async function LoginUser(log) {
  let response = await fetch("http://localhost:7000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  });

  if (response.status == 200) {
    let data = await response.json();
    console.log(data.token);
    localStorage.setItem("token", data.token);
  }
}

function Login() {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const submit = async (e) => {
    e.preventDefault();
    const data = await LoginUser({
      email: mail,
      password: password,
    });
    window.location = "/aleatoire";
  };

    
return (
  <div>

<div className="login-box">
  <h2>Login</h2>
  <form onSubmit={submit}>
    <div className="user-box">
      <input onChange={(e) => setMail(e.target.value)} type="email" />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input onChange={(e) => setPassword(e.target.value)} type="password"/>
      <label>Mot de passe</label>
    </div>
      <button type="submit">se connecter</button>
  </form>
</div>


</div>
);
};

export default Login;