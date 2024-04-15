import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react'
import ThemeSelect from './components/ThemeSelect'
import Auth from './pages/Auth'
import Admin from './pages/Admin'
import Student from './pages/Student'
import Lecturer from './pages/Lecturer'
import { Container } from '@mui/material'

function App() {
  const { currentRole } = useState('Student');

  return (
    <Container disableGutters sx={{ width: '100%', minWidth: '100%' }}>
      <BrowserRouter>
        {currentRole == null &&
        <Routes>
          <Route path="/" element={<Navigate to="/admin/*" />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path='/student/*' element={<Student />} />
          <Route path='/lecturer/*' element={<Lecturer />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>}

        {currentRole === "Admin" && <Admin />}
        {currentRole === "Student" && <Student />}
        {currentRole === "Teacher" && <Teacher />}
      </BrowserRouter>
      {/* <ThemeSelect />
      <Auth /> */}
    </Container>
  )
}

export default App
