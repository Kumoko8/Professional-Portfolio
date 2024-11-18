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
      <Container sx={{ my: 5, display: 'flex' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: '9em' }}
            >
              <Grid item>
                <SocialIcon href="https://www.instagram.com/taylor.golden.33"
                  url="www.instagram.com" target="_blank" />
                <SocialIcon href="https://www.linkedin.com/in/taylor-golden-212b19257" url="www.linkedin.com" target="_blank" />
                <SocialIcon href="https://www.github.com/kumoko8" url="www.github.com" target="_blank" />
                <SocialIcon href="https://www.facebook.com/taylor.golden.33" url="www.facebook.com" target="_blank" />
                <SocialIcon href="https://www.twitter.com/tAuen8" url="wwww.twitter.com" target="_blank" />
              </Grid>
              <Grid item >
                <a target='blank' href= '/pdf/GoldenPortfolioResume24.pdf' style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'rgb(249 219 56)', mb: 2, transition: 'color 0.3s ease' }} hover={{ textDecoration: 'white' }}>
                  View My Resume
                </Typography>
                </a>
              <Grid item >
                <Copyright />
              </Grid>

              </Grid>
            </Grid>

          </Grid>

        </Grid>
      </Container>
    </Typography>
  );
}
