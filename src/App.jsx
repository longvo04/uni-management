import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import HomePage from './pages/HomePage';
import ChooseUser from './pages/ChooseUser'
import LoginPage from './pages/LoginPage'
import Admin from './pages/Admin'
import Student from './pages/Student'
import Lecturer from './pages/Lecturer'
import { Container } from '@mui/material'

function App() {
  const { currentRole } = useSelector((state) => state.user)

  return (
    <Container disableGutters sx={{ width: '100%', minWidth: '100%' }}>
      <BrowserRouter>
        {currentRole == null &&
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/choose' element={<ChooseUser />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/student/*' element={<Student />} />
          <Route path='/lecturer/*' element={<Lecturer />} />

          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Lecturer" />} />
        </Routes>}

        {currentRole === 'Admin' && <Admin />}
        {currentRole === 'Student' && <Student />}
        {currentRole === 'Teacher' && <Teacher />}
      </BrowserRouter>
      {/* <ThemeSelect />
      <Auth /> */}
    </Container>
  )
}

export default App
