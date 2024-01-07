import React from 'react';
import { Box, Typography } from '@mui/material';

const TransparentBackgroundText = ({ text }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        maxWidth: '600px', // Adjust as needed
        margin: 'auto', // Center horizontally
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom style={{color: 'white'}}>
        {text}
      </Typography>
      <Box
        component="span"
        className="transparent-background"
        sx={{
          position: 'absolute',
          top: 28,
          left: -450,
          right: -450,
          bottom: 47,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value as needed
          zIndex: -1,
        }}
      />
    </Box>
  );
};

const TransparentBox = () => {
  return <TransparentBackgroundText text="Transform your mindset" />;
};

export default TransparentBox;
