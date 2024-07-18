import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../index.css';


function Hero() {
  return (
    <div>
      <Container component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

        <img src='/images/visionBack.webp' style={{ position: 'relative', width: '100%', display: 'grid', maxHeight: '35rem', minHeight: '17rem', objectFit: 'cover', marginBottom: 2 }} />

      </Container>
      <Box sx={{
        display: 'block',
        pt: 2,
        mt: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
      }}>

        <Typography
          variant="h3"
          sx={{ textAlign: 'center', margin: 'auto' }}
        >
          Taylor Golden
        </Typography>

      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          pt: 1,
          maxWidth: '80%',
          margin: 'auto', 
          textAlign: 'center', 
          justifyContent: 'center',
          color: 'rgb(249 219 56)'
        }}
      >
        Developer * Artist * Educator
      </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          pt: 5,
          marginBottom: 2,
          maxWidth: '90%',
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