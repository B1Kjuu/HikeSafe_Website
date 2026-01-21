
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CheckCircle2, MapPin, Cloud, Backpack, Phone } from 'lucide-react';
import SplitText from '../components/SplitText';
import BlurText from '../components/BlurText';
import ScrollReveal from '../components/ScrollReveal';

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
        component="div"
        sx={{ 
          fontWeight: 700, 
          mb: 2, 
          color: '#fff', 
          fontSize: { xs: '2.5rem', md: '3rem' }
        }}
      >
        <SplitText text="Hiking Safety Tips" tag="h2" className="text-center" style={{ color: '#fff' }} />
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
        component="div"
        sx={{ 
          fontWeight: 700, 
          mb: 6, 
          color: '#1e4620', 
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        <ScrollReveal>
          <SplitText text="Before You Hit the Trail" tag="h3" className="inline-block" />
        </ScrollReveal>
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

    {/* HIKESAFE Essentials Section */}
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 4, md: 10 }, 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      fontFamily: 'Poppins, Arial, sans-serif',
      backgroundColor: '#f9fafb'
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
        <ScrollReveal>
          <SplitText text="HIKESAFE: Essentials Using the Device" tag="h3" className="inline-block" />
        </ScrollReveal>
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: 3,
        px: { xs: 2, md: 4 }
      }}>
        {[
          'Route Planning & Trail Info – Set your route in the HIKESAFE device before hiking.',
          'Location Tracking – Keep GPS tracking active for navigation and safety.',
          'Emergency SOS – Use the SOS feature to send distress alerts when needed.',
          'Offline Navigation – Access saved maps even without mobile signal.',
          'Battery Management – Monitor device power and enable low-power mode.',
          'Check-In Alerts – Send scheduled status updates to emergency contacts.',
          'Health & Condition Alerts – Track basic activity or safety indicators if available.',
          'Environmental Awareness – Receive alerts for hazardous conditions along the trail.',
          'Post-Hike Confirmation – Use HIKESAFE to notify contacts when you safely exit the trail.',
          'Battery Status Monitoring – Check device power levels and manage usage efficiently.'
        ].map((item, index) => (
          <Box 
            key={index}
            sx={{ 
              backgroundColor: '#d1fae5',
              borderRadius: '8px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)'
              }
            }}
          >
            <CheckCircle2 size={24} className="text-green-700" style={{ flexShrink: 0 }} />
            <Typography 
              sx={{ 
                color: '#1e4620',
                fontSize: '1rem',
                lineHeight: 1.6,
                fontWeight: 500
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    </>
  );
}
