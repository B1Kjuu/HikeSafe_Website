
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Shield, BookOpen, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';



const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  return (
    <>
    <Box
      className="flex flex-col items-center justify-center text-center fade-in-up"
      sx={{
        height: '100vh',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        px: { xs: 2, md: 8 },
        fontFamily: 'Poppins, Arial, sans-serif',
        backgroundImage: 'url(https://i.pinimg.com/1200x/5c/6e/3d/5c6e3d68cc9e2b04628b7df9ebf19039.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          zIndex: 1,
        }
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography
        variant="h5"
        className="animate-fade-in-up"
        sx={{ fontStyle: 'italic', color: '#fff', mb: 2, fontFamily: 'Poppins, Arial, sans-serif', animationDelay: '0.1s', animationFillMode: 'both' }}
      >
        "Stay connected. Stay safe."
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.7rem', md: '4.5rem' }, color: '#fff', fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.2s', letterSpacing: '-2px' }}
      >
        Hike Smart. Hike Safe.
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#e5e7eb', maxWidth: 700, mb: 5, fontSize: { xs: '1.15rem', md: '1.35rem' }, fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.4s' }}
      >
        Discover essential hiking safety tips, emergency readiness, and survival basics. Your journey to safer adventures starts here.
      </Typography>
      <Box className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" sx={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="#safety"
          sx={{ px: 5, fontWeight: 600, borderRadius: 6, fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.6s', fontSize: '1rem', boxShadow: 3 }}
          onClick={(e) => { e.preventDefault(); scrollToSection('safety'); }}
        >
          Explore Safety Tips
        </Button>
        <Button
          variant="outlined"
          color="success"
          size="large"
          href="#resources"
          sx={{ px: 5, fontWeight: 600, borderRadius: 6, fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.8s', fontSize: '1rem', color: '#fff', borderColor: '#fff', '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' } }}
          onClick={(e) => { e.preventDefault(); scrollToSection('resources'); }}
        >
          Explore Resources
        </Button>
      </Box>
      </Box>
    </Box>

    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 8 }, backgroundColor: '#f0fdf4', mb: 0, pb: 0 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h3"
          sx={{ textAlign: 'center', fontWeight: 800, mb: 8, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif', fontSize: { xs: '2rem', md: '2.5rem' } }}
        >
          Why Choose HikeSafe?
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {/* Card 1 - Safety First */}
          <Box sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ backgroundColor: '#c6f6d5', borderRadius: '50%', p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={32} color="#1f7a3a" />
              </Box>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Safety First
            </Typography>
            <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.6, fontFamily: 'Poppins, Arial, sans-serif' }}>
              Comprehensive safety guidelines and best practices to keep you protected on every trail.
            </Typography>
          </Box>

          {/* Card 2 - Expert Resources */}
          <Box sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ backgroundColor: '#c6f6d5', borderRadius: '50%', p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={32} color="#1f7a3a" />
              </Box>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Expert Resources
            </Typography>
            <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.6, fontFamily: 'Poppins, Arial, sans-serif' }}>
              Access to curated trail maps, weather forecasts, and essential hiking resources.
            </Typography>
          </Box>

          {/* Card 3 - Community Support */}
          <Box sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ backgroundColor: '#c6f6d5', borderRadius: '50%', p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={32} color="#1f7a3a" />
              </Box>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Community Support
            </Typography>
            <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.6, fontFamily: 'Poppins, Arial, sans-serif' }}>
              Join a community of passionate hikers sharing experiences and valuable tips.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}
