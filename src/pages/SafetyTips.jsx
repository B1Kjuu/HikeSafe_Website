
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CheckCircle2 } from 'lucide-react';

const tips = [
  'Plan your route and check the weather before you go.',
  'Tell someone your plans and expected return time.',
  'Carry a map, compass, or GPS device.',
  'Bring enough water, high-energy snacks, and a first-aid kit.',
  'Wear proper footwear and layered clothing.',
  'Know your limits and turn back if needed.',
  'Stay on marked trails and respect wildlife.',
  'Pack out all trash and leave no trace.'
];

export default function SafetyTips() {
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
        Hiking Safety Tips
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#e0e0e0', 
          fontSize: '1.1rem',
          fontWeight: 400
        }}
      >
        Essential guidelines to ensure a safe and enjoyable hiking experience
      </Typography>
    </Box>

    <Box id="safety" className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <List sx={{ maxWidth: 700, mx: 'auto', background: 'none', borderRadius: 0, boxShadow: 0 }}>
        {tips.map((t, i) => (
          <ListItem key={i} className="group animate-fade-in-up" sx={{ py: 1, px: 2, display: 'flex', alignItems: 'center', animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'both', transition: 'background 0.2s' }}>
            <CheckCircle2 size={24} className="text-green-700 mr-3 group-hover:scale-125 transition-transform duration-200" />
            <ListItemText primary={t} primaryTypographyProps={{ sx: { fontSize: '1.1rem', color: '#374151', fontFamily: 'Poppins, Arial, sans-serif' } }} />
          </ListItem>
        ))}
      </List>
    </Box>
    </>
  );
}
