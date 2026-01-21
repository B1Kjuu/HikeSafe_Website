import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Medal, Target, Users } from 'lucide-react'
import SplitText from '../components/SplitText'
import BlurText from '../components/BlurText'
import TextType from '../components/TextType'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
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
          <SplitText text="About HikeSafe" tag="h2" className="text-center" style={{ color: '#fff' }} />
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
          text={["Empowering hikers with knowledge, safety, and community since 2025"]}
          typingSpeed={60}
          pauseDuration={1600}
          loop={false}
          className="text-base"
          showCursor={false}
        />
      </Typography>
    </Box>

    <Box sx={{ 
      py: { xs: 0, md: 2 }, 
      px: { xs: 4, md: 10 }, 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      fontFamily: 'Poppins, Arial, sans-serif' 
    }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: { xs: 4, md: 6 }, 
        alignItems: 'center',
        maxWidth: 1400,
        mx: 'auto'
      }}>
        {/* Left side - Our Story Text */}
        <Box>
          <Typography 
            variant="h2" 
            component="div"
            sx={{ 
              fontWeight: 900, 
              mb: 4, 
              color: '#1f7a3a',
              letterSpacing: '-2px',
              fontSize: { xs: '3rem', md: '4rem' }
            }}
          >
            <ScrollReveal>
              <SplitText text="Our Story" tag="h2" className="inline-block" />
            </ScrollReveal>
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#374151', 
              fontSize: '1.1rem', 
              mb: 3, 
              lineHeight: 1.8,
              textAlign: 'justify'
            }}
          >
            HIKESAFE was born from a simple but urgent realization: adventure should never come at the cost of safety. As outdoor activities like hiking, trekking, and camping continue to grow in popularity, so do the risks associated with unpredictable terrain, sudden weather changes, and limited connectivity in remote areas. Many hikers rely solely on smartphones, which can easily fail due to low signal, drained batteries, or harsh environmental conditions.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#374151', 
              fontSize: '1.1rem', 
              mb: 3, 
              lineHeight: 1.8,
              textAlign: 'justify'
            }}
          >
            As Computer Engineering students, we saw an opportunity to bridge technology and outdoor safety. HIKESAFE was conceptualized to provide a reliable, purpose-built solution that goes beyond traditional mobile applications. Our goal was to create a system that supports hikers before, during, and after their journey—ensuring preparedness, real-time awareness, and emergency assistance even in challenging environments.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#374151', 
              fontSize: '1.1rem', 
              mb: 3, 
              lineHeight: 1.8,
              textAlign: 'justify'
            }}
          >
            Driven by innovation and a commitment to user safety, HIKESAFE integrates smart technology, location awareness, and emergency communication into a single platform designed specifically for outdoor adventures. Our story is rooted in the belief that technology should empower people to explore with confidence, knowing that help, guidance, and safety are always within reach.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#374151', 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              textAlign: 'justify'
            }}
          >
            HIKESAFE is not just a project—it is our response to a real-world problem, combining engineering knowledge, user-centered design, and a passion for safer exploration.
          </Typography>
        </Box>

        {/* Right side - Image */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://i.imgur.com/wftNTEv.png"
            alt="Hiking trail through forest"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
    </Box>

    {/* Our Values Section */}
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 4, md: 8 }, 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)'
    }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 6,
            color: '#1f7a3a',
            fontFamily: 'Poppins, Arial, sans-serif',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          <ScrollReveal>
            <SplitText text="Our Values" tag="h3" className="inline-block" />
          </ScrollReveal>
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {/* Safety */}
          <Box sx={{ 
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ backgroundColor: '#c6f6d5', borderRadius: '50%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Medal size={40} color="#1f7a3a" strokeWidth={2} />
              </Box>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Safety First
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.6, fontFamily: 'Poppins, Arial, sans-serif' }}>
              Comprehensive safety guidelines and best practices to keep you protected on every trail.
            </Typography>
          </Box>

          {/* Education */}
          <Box sx={{ 
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ backgroundColor: '#c6f6d5', borderRadius: '50%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={40} color="#1f7a3a" strokeWidth={2} />
              </Box>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Expert Resources
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.6, fontFamily: 'Poppins, Arial, sans-serif' }}>
              Access to curated trail maps, weather forecasts, and essential hiking resources.
            </Typography>
          </Box>

          {/* Community */}
          <Box sx={{ 
            backgroundColor: '#fff',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ backgroundColor: '#c6f6d5', borderRadius: '50%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={40} color="#1f7a3a" strokeWidth={2} />
              </Box>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1f7a3a', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Community Support
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.6, fontFamily: 'Poppins, Arial, sans-serif' }}>
              Join a community of passionate hikers sharing experiences and valuable tips.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}
