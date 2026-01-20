
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box
      className="flex flex-col items-center justify-center min-h-[60vh] text-center fade-in-up"
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 2, md: 8 },
        fontFamily: 'Poppins, Arial, sans-serif',
        background: 'none',
      }}
    >
      <Typography
        variant="h5"
        className="animate-fade-in-up"
        sx={{ fontStyle: 'italic', color: 'var(--brand)', mb: 2, fontFamily: 'Poppins, Arial, sans-serif', animationDelay: '0.1s', animationFillMode: 'both' }}
      >
        "Stay connected. Stay safe."
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.7rem', md: '4.5rem' }, color: '#1f2937', fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.2s', letterSpacing: '-2px' }}
      >
        Hike Smart,<br /> Hike Safe
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#374151', maxWidth: 700, mb: 5, fontSize: { xs: '1.15rem', md: '1.35rem' }, fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.4s' }}
      >
        Discover essential hiking safety tips, emergency readiness, and survival basics. Your journey to safer adventures starts here.
      </Typography>
      <Box className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" sx={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="#safety"
          sx={{ px: 5, fontWeight: 600, borderRadius: 999, fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.6s', fontSize: '1.1rem', boxShadow: 3 }}
        >
          Explore Safety Tips
        </Button>
        <Button
          variant="outlined"
          color="success"
          size="large"
          href="#resources"
          sx={{ px: 5, fontWeight: 600, borderRadius: 999, fontFamily: 'Poppins, Arial, sans-serif', animation: 'fadeInUp 1.8s', fontSize: '1.1rem' }}
        >
          Resources
        </Button>
      </Box>
    </Box>
  );
}
