
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
    <Box id="safety" className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'var(--brand)', letterSpacing: '-1px' }}>
        Essential Safety Tips
      </Typography>
      <Typography variant="body1" sx={{ color: '#374151', mb: 4, fontSize: '1.15rem' }}>
        Follow these guidelines to ensure a safe and enjoyable hiking experience:
      </Typography>
      <List sx={{ maxWidth: 700, mx: 'auto', background: 'none', borderRadius: 0, boxShadow: 0 }}>
        {tips.map((t, i) => (
          <ListItem key={i} className="group animate-fade-in-up" sx={{ py: 1, px: 2, display: 'flex', alignItems: 'center', animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'both', transition: 'background 0.2s' }}>
            <CheckCircle2 size={24} className="text-green-700 mr-3 group-hover:scale-125 transition-transform duration-200" />
            <ListItemText primary={t} primaryTypographyProps={{ sx: { fontSize: '1.1rem', color: '#374151', fontFamily: 'Poppins, Arial, sans-serif' } }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
