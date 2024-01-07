import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/discord'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'


function Copyright() {
  const copyrightStyle = {
    color: "white"
  }

  return (
    

    <React.Fragment >
      <span style={copyrightStyle}> {'© '}
        Taylor Golden
      {new Date().getFullYear()}

      </span>
     
    </React.Fragment>
  
  );
}




export default function AppFooter() {
  const resumeStyle = {
    color: "white"
  }
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#1e1e1f' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item>
              <SocialIcon href="https://www.instagram.com/taylor.golden.33"
          url="www.instagram.com" target="_blank" />
        <SocialIcon href="https://www.linkedin.com/in/taylor-golden-212b19257" url="www.linkedin.com" target="_blank" />
        <SocialIcon href="https://www.github.com/kumoko8" url="www.github.com" target="_blank" />
        <SocialIcon href="https://www.facebook.com/taylor.golden.33" url="www.facebook.com" target="_blank" />
        <SocialIcon href="https://www.twitter.com/tAuen8" url="wwww.twitter.com" target="_blank" />
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
              
            </Grid>
    
          </Grid>
        
        </Grid>
      </Container>
    </Typography>
  );
}
