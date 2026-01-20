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


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <div className="app-container">
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar className="container mx-auto">
          <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
            HIKESAFE
          </Typography>
          <nav>
            <Button color="inherit" className="nav-link" onClick={() => scrollToSection('home')}>Home</Button>
            <Button color="inherit" className="nav-link" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" className="nav-link" onClick={() => scrollToSection('safety')}>Safety Tips</Button>
            <Button color="inherit" className="nav-link" onClick={() => scrollToSection('resources')}>Resources</Button>
            <Button color="inherit" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
        </Toolbar>
      </AppBar>

      <Container className="content">
        <section id="home" className="py-20 scroll-mt-24"><Home /></section>
        <section id="about" className="py-20 scroll-mt-24"><About /></section>
        <section id="safety" className="py-20 scroll-mt-24"><SafetyTips /></section>
        <section id="resources" className="py-20 scroll-mt-24"><Resources /></section>
        <section id="contact" className="py-20 scroll-mt-24"><Contact /></section>
      </Container>
    </div>
  );
}

export default App
