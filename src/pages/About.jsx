import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';
import WithRoot from '../components/WithRoot';
import WithScrollToTop from '../components/WithScrollToTop';

function AboutMe() {
  return (
    <React.Fragment>
      <div>
        <Container component="section" sx={{ mt: -6, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40em',maxHeight:'50em', position: 'relative' }}>
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
              textAlign: 'center'
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 2, color: 'white' }}>
              Taylor Golden
            </Typography>
          </Box>
        </Container>
        <Typography variant="h4" sx={{ margin: 5, mt: 12, mb: 5 }}>
          Web Developer | Illustrator | Educator | Family Man
        </Typography>

      </div>
        <Typography variant="body1" sx={{ marginBottom: 10, padding: 2, minWidth: '60%', maxWidth: '70%', margin: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center', color: 'black' }}>

            Seven years experience teaching middle school math and science gives me insight into how people think & learn and has developed a love for helping people excel. A lifetime of being an artist has given me an eye for design and love for character development and illustration. My experience as a full-stack web developer has allowed me the opportunity to bring it all together and breathe life into learning.
            We are based in Austin, TX and we enjoy playing sports, growing our own food, and crafting!
      
        </Typography>
        <Typography sx={{ color: 'black', mb: 5, mt: 6 }}>
       
            Art illuminates the heart. Education illuminates the mind. Technology brings them together.
          
        </Typography>
    </React.Fragment>
  );
}
export default WithRoot(WithScrollToTop(AboutMe));
