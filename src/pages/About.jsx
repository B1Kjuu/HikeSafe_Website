import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function About() {
  return (
    <Box className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <Typography variant="h3" className="animate-fade-in-up" sx={{ fontWeight: 800, mb: 2, color: 'var(--brand)', letterSpacing: '-1px', animationDelay: '0.1s', animationFillMode: 'both' }}>
        About HIKESAFE
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 800, color: '#374151', fontSize: '1.25rem', mb: 2 }}>
        HIKESAFE is dedicated to raising awareness about hiking safety, emergency preparedness, and community outreach. Our mission is to empower beginner hikers and tour guides with the knowledge and resources needed for safe and enjoyable outdoor adventures.
      </Typography>
      <Typography variant="body2" sx={{ color: '#388e3c', fontWeight: 500, fontSize: '1.1rem' }}>
        "Preparedness is the key to every great adventure."
      </Typography>
    </Box>
  );
}
