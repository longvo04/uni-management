import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage'
import Admin from './pages/Admin'
import Student from './pages/Student'
import Lecturer from './pages/Lecturer'
import { Container } from '@mui/material'

function App() {
  const { currentRole } = useSelector((state) => state.user)
  console.log(currentRole)

  return (
    <Container disableGutters sx={{ width: '100%', minWidth: '100%' }}>
      <BrowserRouter>
        {currentRole == null &&
        <Routes>
          <Route path='/*' element={<LoginPage />} />
        </Routes>}

        {currentRole === 'Admin' && <Admin />}
        {currentRole === 'Student' && <Student />}
        {currentRole === 'Lecturer' && <Lecturer />}
      </BrowserRouter>
    </Container>
  )
}

export default App
