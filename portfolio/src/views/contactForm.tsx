import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom';



function ContactRequestIntake() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
         
        }}
        component={Link}
        to="/contact"
      >
        <Typography variant="h4" component="span">
          Wanna Liven Your Space? Click here!
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Your imagination is your only limit.
      </Typography>
    </Container>
  );
}

export default ContactRequestIntake;
