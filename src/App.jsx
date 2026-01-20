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
        color="transparent"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(255,255,255,0.7)'
            : 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(16px) saturate(180%)',
          boxShadow: scrolled ? '0 2px 16px 0 rgba(0,0,0,0.07)' : 'none',
          borderBottom: scrolled ? '1px solid #e0e0e0' : 'none',
          transition: 'background 0.3s, box-shadow 0.3s, border-bottom 0.3s',
        }}
        className="z-50"
      >
        <Toolbar className="container mx-auto px-4 md:px-12 min-h-[80px]">
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 900, letterSpacing: '-2px', color: 'var(--brand)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: '2rem', md: '2.5rem' } }}
            onClick={() => scrollToSection('home')}
          >
            HIKESAFE
          </Typography>
          <nav className="flex gap-2 md:gap-6">
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('home')}>Home</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('safety')}>Safety Tips</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('resources')}>Resources</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
        </Toolbar>
      </AppBar>

      <Container className="content pt-28 md:pt-32">
        <section id="home" className="py-20 scroll-mt-24 animate-fade-in-up"><Home /></section>
        <section id="about" className="py-20 scroll-mt-24 animate-fade-in-up"><About /></section>
        <section id="safety" className="py-20 scroll-mt-24 animate-fade-in-up"><SafetyTips /></section>
        <section id="resources" className="py-20 scroll-mt-24 animate-fade-in-up"><Resources /></section>
        <section id="contact" className="py-20 scroll-mt-24 animate-fade-in-up"><Contact /></section>
      </Container>
    </div>
  );
}

export default App
