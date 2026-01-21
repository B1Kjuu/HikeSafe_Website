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
import ClickSpark from './components/ClickSpark';
import { useEffect, useState } from 'react';
import './index.css'
import hikesafeLogo from './assets/hikesafe_logo.png'


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
    <ClickSpark sparkColor="#fff" sparkSize={8} sparkRadius={18} sparkCount={8} duration={420}>
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
          <div 
            className="flex items-center gap-3 cursor-pointer flex-grow"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src={hikesafeLogo} 
              alt="HikeSafe Logo" 
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <Typography
              variant="h4"
              sx={{ fontWeight: 900, letterSpacing: '-2px', color: '#fff', fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: '2rem', md: '2.5rem' } }}
            >
              HIKESAFE
            </Typography>
          </div>
          <nav className="flex gap-2 md:gap-6 items-center">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Safety Tips', id: 'safety' },
              { label: 'Resources', id: 'resources' },
              { label: 'Contact', id: 'contact' }
            ].map((it) => (
              <button
                key={it.id}
                className="nav-pill poppins-link"
                onClick={() => scrollToSection(it.id)}
                aria-label={it.label}
              >
                <span className="nav-text">{it.label}</span>
              </button>
            ))}
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
    </ClickSpark>
  );
}

export default App