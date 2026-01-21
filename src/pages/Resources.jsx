
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { BookOpen, Compass, Video, FileText } from 'lucide-react';
import SplitText from '../components/SplitText';
import BlurText from '../components/BlurText';
import TextType from '../components/TextType';
import ScrollReveal from '../components/ScrollReveal';

const resources = [
  {
    icon: BookOpen,
    title: 'Trail Guides',
    description: 'Comprehensive guides for popular hiking trails across the country.',
    link: '#'
  },
  {
    icon: Compass,
    title: 'Navigation Tools',
    description: 'GPS apps, topographic maps, and navigation essentials.',
    link: '#'
  },
  {
    icon: Video,
    title: 'Tutorial Videos',
    description: 'Learn essential hiking skills through our video library.',
    link: '#'
  },
  {
    icon: FileText,
    title: 'Checklists',
    description: 'Downloadable packing lists and pre-hike preparation checklists.',
    link: '#'
  }
];

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
        component="div"
        sx={{ 
          fontWeight: 700, 
          mb: 2, 
          color: '#fff', 
          fontSize: { xs: '2.5rem', md: '3rem' }
        }}
      >
        <ScrollReveal>
          <SplitText text="Hiking Resources" tag="h2" className="text-center" style={{ color: '#fff' }} />
        </ScrollReveal>
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#e0e0e0', 
          fontSize: '1.05rem',
          fontWeight: 400
        }}
      >
        <TextType
          text={["Everything you need for a successful hiking adventure"]}
          typingSpeed={55}
          pauseDuration={1400}
          loop={false}
          className="text-base"
          showCursor={false}
        />
      </Typography>
    </Box>

    {/* Explore Our Resources Section */}
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
          <SplitText text="Explore Our Resources" tag="h3" className="inline-block" />
        </ScrollReveal>
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, 
        gap: 4,
        px: { xs: 2, md: 4 }
      }}>
        {resources.map((resource, index) => {
          const Icon = resource.icon;
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
                {resource.title}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#4b5563',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  mb: 2
                }}
              >
                {resource.description}
              </Typography>
              <Link 
                href={resource.link}
                sx={{
                  color: '#2d5a27',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Explore →
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
    </>
  );
}
