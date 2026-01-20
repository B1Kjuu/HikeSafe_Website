
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CheckCircle2, MapPin, Cloud, Backpack, Phone } from 'lucide-react';

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

const beforeTrailTips = [
  {
    icon: MapPin,
    title: 'Plan Your Route and Inform Others',
    description: 'Research the trail, check difficulty levels, and be aware of weather conditions. Always inform a trusted person about your route and expected return time.'
  },
  {
    icon: Backpack,
    title: 'Check Your Gear and Devices',
    description: 'Ensure your essential gear is complete and in good condition. Fully charge safety devices and bring backup power if possible.'
  },
  {
    icon: Cloud,
    title: 'Prepare for Emergencies',
    description: 'Pack first-aid supplies, enough food and water, and emergency tools. Be ready for unexpected situations such as injuries or sudden weather changes.'
  },
  {
    icon: Phone,
    title: 'Assess Your Physical Readiness',
    description: 'Know your limits and avoid trails beyond your skill level. Proper rest and hydration before hiking reduce the risk of accidents and fatigue.'
  }
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

    {/* Before You Hit the Trail Section */}
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 4, md: 10 }, 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      fontFamily: 'Poppins, Arial, sans-serif',
      backgroundColor: '#fff'
    }}>
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 700, 
          mb: 6, 
          color: '#1e4620', 
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Before You Hit the Trail
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: 4,
        px: { xs: 2, md: 4 }
      }}>
        {beforeTrailTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <Box 
              key={index}
              sx={{ 
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)'
                }
              }}
            >
              <Box sx={{ 
                backgroundColor: '#d1fae5',
                borderRadius: '50%',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
                mb: 2
              }}>
                <Icon size={32} className="text-green-700" />
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#1e4620',
                  fontSize: '1.25rem',
                  mb: 2
                }}
              >
                {tip.title}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#4b5563',
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}
              >
                {tip.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
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
