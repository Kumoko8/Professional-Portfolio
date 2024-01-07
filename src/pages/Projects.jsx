import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';
import WithRoot from '../components/WithRoot';
import WithScrollToTop from '../components/WithScrollToTop';
import DevProjectsSection from '../views/DevProjectsSection';


    const allProjects = [
      
        {
            imageSrc: '/images/collectiblesLogo.webp',
            title: 'Collectibles',
            description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
            url: 'https://project-collections-cfb3d3b9c8f8.herokuapp.com/'
        },
        
        {
            imageSrc: '/images/infiniteLogo.webp',
            title: 'Infinite Tutoring',
            description: '//Coming soon// Discover the endless journey of learning',
        },
        {
            imageSrc: '/images/dnd.webp',
            title: "How's The Weather?",
            description: '//Coming soon// Prepare yourself for anything',
        },

    ];

    const projectsBackButton =
    {
        label: 'Back',
        url: '/'
    }



function Projects() {
    return (
      <React.Fragment>
        <div>
              <Typography variant="h2" component="h2" gutterBottom sx={{ marginBottom: -3, color: 'black' }}>
                More Projects
              </Typography>
           <DevProjectsSection projects={allProjects} button={projectsBackButton} />
          </div>
      </React.Fragment>
    );
  }
  export default WithRoot(WithScrollToTop(Projects));