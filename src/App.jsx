import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Home from './pages/Home'
import About from './pages/About'
import SafetyTips from './pages/SafetyTips'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar className="container mx-auto" sx={{}}>
            <Typography variant="h6" component={Link} sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit'}}>
              HIKESAFE
            </Typography>
            <nav>
              <Button component={Link} to="/" color="inherit">Home</Button>
              <Button component={Link} to="/about" color="inherit">About</Button>
              <Button component={Link} to="/safety" color="inherit">Safety Tips</Button>
              <Button component={Link} to="/resources" color="inherit">Resources</Button>
              <Button component={Link} to="/contact" color="inherit">Contact</Button>
            </nav>
          </Toolbar>
        </AppBar>

        <Container className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/safety" element={<SafetyTips />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>

      </div>
    </BrowserRouter>
  )
}

export default App
