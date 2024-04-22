import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage'
import Admin from './pages/Admin'
import Student from './pages/Student'
import Lecturer from './pages/Lecturer'
import { Container } from '@mui/material'

function App() {
  const { currentRole, status } = useSelector((state) => state.user)
  console.log(status, currentRole)

  return (
    <Container disableGutters sx={{ width: '100%', minWidth: '100%' }}>
      <BrowserRouter>
        {currentRole == null &&
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>}

        {currentRole === 'admin' && <Admin />}
        {currentRole === 'student' && <Student />}
        {currentRole === 'lecturer' && <Lecturer />}
      </BrowserRouter>
    </Container>
  )
}

export default App
