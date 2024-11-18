import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';
import WithRoot from '../components/WithRoot';
import WithScrollToTop from '../components/WithScrollToTop';
import DevProjectsSection from '../views/DevProjectsSection';


    const allProjects = [
      
        
        
        {
            imageSrc: '/images/DnDThumb.webp',
            title: 'D&D Character Generator',
            description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
            url: 'https://kumoko8.github.io/Front-End-App-DnD-Character-Project/'

        },
        {
            imageSrc: '/images/invis-art.JPG',
            title: "Invisible Story Artwork",
            description: '//Coming soon// Meet the characters behind the unseen story',
            url: '/Artwork'
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