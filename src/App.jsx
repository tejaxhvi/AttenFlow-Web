import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/login'
import Signin from './pages/signin'
import Admin from './pages/admin';
import Home from './pages/home';
import AdminDashboard from './pages/admin_dashboard';

function App() {


  return (
    <>
     <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="admin" element={<Admin />} />
          <Route path="login" element={<Login />} />
          <Route path="faculty" element={<Signin/>} />
          <Route paths="admin/dashboard" element={<AdminDashboard/>} />
            
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
