import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../index.css'


function Hero() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div>


        <Container component="section" sx={{ marginBottom: '10', display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', height: 'auto', position: 'relative' }}>
        
          <img src='/images/visionBack.webp' style={{ position: 'absolute', width: '100%', maxHeight: '15rem', objectFit: 'cover' }} />


          {/* Content overlay */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              color: 'white', // Adjust text color
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
              Transform your mindset
            </Typography>


          </Box>

        </Container>

        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            pb: 5,
            maxWidth: 310,
            margin: 'auto', // Center horizontally
            textAlign: 'center', // Center text
          }}
        >
          Full-Stack Web Developer
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            marginBottom: 2,
            maxWidth: 700,
            margin: 'auto', // Center horizontally
            textAlign: 'center', // Center text
          }}
        >
          I use my art and education experience to create wonderfully intuitive applications and content that helps people transform the way they think about themselves and what they can do
        </Typography>

    </div>
  );
}

export default Hero;