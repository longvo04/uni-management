import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react'
import ThemeSelect from './components/ThemeSelect'
import Auth from './pages/Auth'
import Admin from './pages/Admin'
import { Container } from '@mui/material'

function App() {
  const { currentRole } = useState('Student');

  return (
    <>
      <Container>
        <BrowserRouter>
          {currentRole == null &&
          <Routes>
            <Route path="/" element={<Navigate to="/admin/*" />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>}

          {currentRole === "Admin" && <Admin />}
          {currentRole === "Student" && <Student />}
          {currentRole === "Teacher" && <Teacher />}
        </BrowserRouter>
        {/* <ThemeSelect />
        <Auth /> */}
      </Container>
    </>
  )
}

export default App
