import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import HubSpotForm from 'react-hubspot-form';





function ContactForm() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Typography sx={{ mb: 2 }} variant="h4" component="span">
        Let's Create Together!
      </Typography>
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
        <Box sx={{ display: 'flexbox', flexDirection: 'column', flexGrow: 1 }}>
          <HubSpotForm
            id="hubspot-form"
            sx={{}}
            portalId="44406398"
            formId="b8e767ed-bf30-47bc-b2e3-150d52611e2c"
            onSubmit={() => console.log('Form submitted')}
            onReady={(form) => console.log('Form ready:', form)}
            loading={<div>Loading...</div>}
          />
        </Box>

      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Your imagination is your only limit.
      </Typography>

    </Container>
  );
}

export default ContactForm;
