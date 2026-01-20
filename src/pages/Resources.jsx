
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Map, Contact, Backpack } from 'lucide-react';

export default function Resources() {
  return (
    <Box className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'var(--brand)', letterSpacing: '-1px' }}>
        Resources
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 800, color: '#374151', fontSize: '1.2rem', mb: 4 }}>
        Curated resources for planning, maps, and emergency preparedness.
      </Typography>
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
  );
}
