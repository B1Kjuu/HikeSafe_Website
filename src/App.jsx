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
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import './index.css'


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // reveal animations on scroll: observe elements with common animation classes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const selector = '.fade-in-up, .animate-fade-in-up, .scroll-animate';
    const nodes = Array.from(document.querySelectorAll(selector));
    if (!nodes.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
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
          <nav className="flex gap-2 md:gap-6 ">
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green nav-link-active poppins-link" onClick={() => scrollToSection('home')}>Home</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('safety')}>Safety Tips</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('resources')}>Resources</Button>
            <Button color="inherit" className="nav-link nav-link-lg nav-link-green poppins-link" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
        </Toolbar>
      </AppBar>

      <section id="home"><Home /></section>
      <Container className="content" sx={{ padding: 0 }}>
        <section id="about"><About /></section>
        <section id="safety" ><SafetyTips /></section>
        <section id="resources" ><Resources /></section>
        <section id="contact" ><Contact /></section>
      </Container>
      <Footer />
    </div>
  );
}

export default App
