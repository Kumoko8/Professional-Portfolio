import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../modules/components/Typography';
import withRoot from '../modules/withRoot';
import AppAppBar from '../modules/views/AppAppBar';
import withScrollToTop from '../modules/withScrollToTop';

function AboutMe() {
  return (
    <React.Fragment>
      <AppAppBar />
      <div>
        <Container component="section" sx={{ mt: -6, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
          <img
            src="images/golden-fam.webp"
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              color: 'white',
              textAlign: 'center',
              padding: '2rem',
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
              Taylor Golden
            </Typography>
          </Box>
        </Container>
        <Typography variant="h5" sx={{ margin: 5, mt: 15, mb: 0 }}>
          Web Developer | Illustrator | Educator | Family Man
        </Typography>

      </div>
        <Typography variant="h6" sx={{ marginBottom: 2, padding: 10, maxWidth: 1000, display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <p style={{ justifyContent: 'center', display: 'flex' }}>

            Seven years experience teaching middle school math and science gives me insight into how people think & learn and has developed a love for helping people excel. A lifetime of being an artist has given me an eye for design and love for character development and illustration. My experience as a full-stack web developer has allowed me the opportunity to bring it all together and breathe life into learning.
            We are based in Austin, TX and we enjoy playing sports, growing our own food, and crafting!
          </p>
        </Typography>
        <Typography sx={{ mb: 5 }}>
          <p>
            Art illuminates the heart. Education illuminates the mind. Technology brings them together.
          </p>
        </Typography>
    </React.Fragment>
  );
}
export default withRoot(withScrollToTop(AboutMe));
