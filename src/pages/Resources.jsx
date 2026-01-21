
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { BookOpen, Compass, Video, FileText, MapIcon, Book, Smartphone, Download, Apple } from 'lucide-react';
import SplitText from '../components/SplitText';
import BlurText from '../components/BlurText';
import TextType from '../components/TextType';
import ScrollReveal from '../components/ScrollReveal';

const resources = [
  {
    icon: BookOpen,
    title: 'Trail Guides',
    description: 'Comprehensive guides for popular hiking trails across the country.',
    link: 'http://www.pinoymountaineer.com/'
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
      backgroundColor: '#e8f9f0'
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

    {/* Download Our App Section */}
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 4, md: 10 }, 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      fontFamily: 'Poppins, Arial, sans-serif',
      backgroundColor: '#e8f9f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: 6,
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {/* Left Side - Content */}
        <Box>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 3, 
              color: '#1e4620', 
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Download Our App
          </Typography>
          
          <Typography 
            sx={{ 
              color: '#4b5563',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              mb: 4
            }}
          >
            Take HikeSafe with you on every adventure. Get real-time trail updates, offline maps, safety alerts, and emergency features right at your fingertips.
          </Typography>

          {/* Features List */}
          <Box sx={{ mb: 4 }}>
            {[
              { icon: MapIcon, text: 'Offline trail maps and GPS tracking' },
              { icon: Book, text: 'Comprehensive safety guides and tips' },
              { icon: Smartphone, text: 'Emergency SOS and location sharing' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2
                  }}
                >
                  <Box sx={{ 
                    backgroundColor: '#d1fae5',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={20} className="text-green-700" />
                  </Box>
                  <Typography 
                    sx={{ 
                      color: '#1e4620',
                      fontSize: '1rem',
                      fontWeight: 500
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Download Buttons */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Link
              href="#"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontWeight: 600,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: '#000',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              <Apple size={24} />
              <Box>
                <Typography sx={{ fontSize: '0.7rem', lineHeight: 1 }}>Download on the</Typography>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 700 }}>App Store</Typography>
              </Box>
            </Link>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Link
                href="#"
                sx={{
                  backgroundColor: '#1e3a8a',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#1e3a8a',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <Box sx={{ fontSize: '1.5rem' }}>▶</Box>
                <Box>
                  <Typography sx={{ fontSize: '0.7rem', lineHeight: 1 }}>Get it on</Typography>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700 }}>Google Play</Typography>
                </Box>
              </Link>

              <Link
                href="#"
                sx={{
                  backgroundColor: '#2d5a27',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#2d5a27',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <Download size={24} />
                <Box>
                  <Typography sx={{ fontSize: '0.7rem', lineHeight: 1 }}>Direct download</Typography>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700 }}>APK File</Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Phone Illustration */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Box sx={{
            backgroundColor: '#d1fae5',
            borderRadius: '24px',
            padding: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '250px', md: '320px' },
            height: { xs: '250px', md: '320px' }
          }}>
            <Box sx={{
              backgroundColor: '#2d5a27',
              borderRadius: '32px',
              width: '70%',
              height: '85%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}>
              <Box sx={{
                backgroundColor: '#d1fae5',
                borderRadius: '24px',
                width: '100%',
                height: '100%',
                position: 'relative'
              }}>
                <Box sx={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#2d5a27',
                  borderRadius: '50%'
                }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}
