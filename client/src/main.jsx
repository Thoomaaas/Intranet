import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstPage from './components/FirstPage'
import Login from './components/Login'
 

const root = ReactDOM.createRoot( document.getElementById("root"));
root.render(<App/>);
