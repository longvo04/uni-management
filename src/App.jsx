import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage'
import Admin from './pages/Admin'
import Student from './pages/Student'
import Lecturer from './pages/Lecturer'
import { Container } from '@mui/material'
import Cookies from 'universal-cookie'

function App() {
  const { currentRole, status } = useSelector((state) => state.user)
  console.log(status, currentRole)
  // get cookies
  const cookies = new Cookies()
  const sessionId = cookies.get('session')
  console.log('sessionId', sessionId)
  if (!sessionId) {
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
    cookies.remove('session', { path: '/' });
  }
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
        {currentRole === 'teacher' && <Lecturer />}
      </BrowserRouter>
    </Container>
  )
}

export default App
