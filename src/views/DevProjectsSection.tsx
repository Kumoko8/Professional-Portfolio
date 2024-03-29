import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import * as PropTypes from 'prop-types';


const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const imageContainer: SxProps<Theme> = {
  position: 'relative',
  '&:hover img': {
    transform: 'scale(1.2)', // Increase the size on hover
  },
};

function DevProjectsSection({ projects, sectionTitle, additionalProps, button }) {
  const mergedProjects = projects.map((project, index) => ({
    ...project,
    ...(additionalProps?.[index] || {}), // Check if additionalProps is defined
  }));

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" marked="center" component="h3" sx={{ mb: 1, mt: 10 }}>
              {sectionTitle}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'warning.main', justifyContent: 'center' }}>
        <div>
          <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
            <Grid container spacing={5}>
              {mergedProjects.map((project, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Box sx={{ ...item, ...imageContainer } as SxProps<Theme>}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Box
                        component="img"
                        src={project.imageSrc}
                        alt={`project-${index}`}
                        sx={{ height: '15em', transition: 'transform 0.3s ease-in-out', mb:3}}
                      />
                    </a>
                    <Typography variant="h5" sx={{ my: 1, color: 'rgb(26, 71, 146)' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="h6" sx={{ my: 5, color: 'black', maxWidth: '80%', margin: 'auto' }}>{project.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Box>
      {button && (
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href={button.url}
          sx={{ mt: -40 }}
        >
          {button.label}
        </Button>
      )}
    </div>
  );
}

DevProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  sectionTitle: PropTypes.string,
  additionalProps: PropTypes.arrayOf(PropTypes.object),
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default DevProjectsSection;
