
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Map, Contact, Backpack } from 'lucide-react';

export default function Resources() {
  return (
    <>
    <Box 
      className="flex flex-col items-center justify-center text-center" 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        px: 4,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: 'linear-gradient(135deg, #1e4620 0%, #2d5a27 50%, #3a7a42 100%)',
        fontFamily: 'Poppins, Arial, sans-serif' 
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 2, 
          color: '#fff', 
          fontSize: { xs: '2.5rem', md: '3rem' }
        }}
      >
        Hiking Resources
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#e0e0e0', 
          fontSize: '1.1rem',
          fontWeight: 400
        }}
      >
        Everything you need for a successful hiking adventure
      </Typography>
    </Box>

    <Box className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
        <li className="bg-white/70 rounded-xl shadow p-6 flex flex-col items-center transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <Map size={40} className="mb-2 text-green-700 group-hover:scale-125 transition-transform duration-200 animate-bounce" />
          <Link href="#" className="font-extrabold text-green-800 hover:text-green-600 transition-colors duration-200">Local trail maps</Link>
        </li>
        <li className="bg-white/70 rounded-xl shadow p-6 flex flex-col items-center transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <Contact size={40} className="mb-2 text-green-700 group-hover:scale-125 transition-transform duration-200 animate-bounce" />
          <Link href="#" className="font-extrabold text-green-800 hover:text-green-600 transition-colors duration-200">Emergency contact templates</Link>
        </li>
        <li className="bg-white/70 rounded-xl shadow p-6 flex flex-col items-center transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <Backpack size={40} className="mb-2 text-green-700 group-hover:scale-125 transition-transform duration-200 animate-bounce" />
          <Link href="#" className="font-extrabold text-green-800 hover:text-green-600 transition-colors duration-200">Recommended gear lists</Link>
        </li>
      </ul>
    </Box>
    </>
  );
}
