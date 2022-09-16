import { useState } from 'react'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'

function setToken(userToken){
  localStorage.setItem("token",JSON.stringify(userToken));
}

function getToken(){
  const token = localStorage.getItem("token")
  return token
};

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/aleatoire" element={<FirstPage />} />
      <Route path="/Liste" element={<SecondPage/>} />

    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App;
