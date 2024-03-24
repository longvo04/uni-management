import './App.css'
import ThemeSelect from './components/ThemeSelect'
import Auth from './pages/Auth'
import { Container } from '@mui/material'

function App() {
  return (
    <>
      <Container>
        <ThemeSelect />
        <Auth />
      </Container>
    </>
  )
}

export default App
