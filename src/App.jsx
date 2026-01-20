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

import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-container">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: '#2d5a27',
        }}
        className="z-50"
      >
        <Toolbar className="container mx-auto px-4 md:px-12 min-h-[80px]">
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 900, letterSpacing: '-2px', color: '#fff', fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: '2rem', md: '2.5rem' } }}
            onClick={() => scrollToSection('home')}
          >
            HIKESAFE
          </Typography>
          <nav className="flex gap-2 md:gap-6">
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green nav-link-active poppins-link" onClick={() => scrollToSection('home')}>Home</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('safety')}>Safety Tips</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('resources')}>Resources</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
        </Toolbar>
      </AppBar>

      <section id="home"><Home /></section>
      <Container className="content">
        <section id="about" className="py-20 scroll-mt-24 animate-fade-in-up"><About /></section>
        <section id="safety" className="py-20 scroll-mt-24 animate-fade-in-up"><SafetyTips /></section>
        <section id="resources" className="py-20 scroll-mt-24 animate-fade-in-up"><Resources /></section>
        <section id="contact" className="py-20 scroll-mt-24 animate-fade-in-up"><Contact /></section>
      </Container>
    </div>
  );
}

export default App
