import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../index.css';
import TransparentBox from '../components/TransparentBackgroundText';


function Hero() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div>


        <Container component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        
        <img src='/images/visionBack.webp' style={{ position: 'absolute', width: '100%', maxHeight: '100rem', objectFit: 'fill' }} />


          {/* Content overlay */}
          <Box
            sx={{
              display: 'inline-block',
              
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              color: 'black', // Adjust text color
              textAlign: 'center',
              paddingY: '10rem',
            }}
          >
            <TransparentBox />
            {/* <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
              Transform your mindset
            </Typography> */}


          </Box>

        </Container>
        <Box sx={{
            display: 'flex',
            pt: 2,
            mt: 8
             // Center horizontally
             // Center text
          }}>

        <Typography
          variant="h3"
          sx={{textAlign: 'center', margin: 'auto'}}
        >
          Taylor Golden
        </Typography>

        </Box>
        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            pt: 1,
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
            pt: 5,
            marginBottom: 2,
            maxWidth: 700,
            margin: 'auto', // Center horizontally
            textAlign: 'center', 
            color: 'black'// Center text
          }}
        >
          I use my art and education experience to create wonderfully intuitive applications. I love to make content that helps people transform the way they think about themselves and what they can do.
        </Typography>

    </div>
  );
}

export default Hero;