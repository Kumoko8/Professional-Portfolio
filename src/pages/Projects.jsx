import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';
import WithRoot from '../components/WithRoot';
import WithScrollToTop from '../components/WithScrollToTop';
import DevProjectsSection from '../views/DevProjectsSection';


    const allProjects = [
        {
            imageSrc: '/images/dnd.webp',
            title: 'Plant Guy',
            description: 'Feel the fresh and pure air that every office plant provides! ',
            url: 'https://kumoko8.github.io/Front-End-App-DnD-Character-Project/'
        },
        {
            imageSrc: '/images/dnd.webp',
            title: 'D&D Character Generator',
            description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
            url: 'https://kumoko8.github.io/Front-End-App-DnD-Character-Project/'
        },
        {
            imageSrc: '/images/Invizlogo.webp',
            title: 'INVIZ Productivity',
            description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of.',
            url: 'https://invizproductivity4.wordpress.com/'
        },
        {
            imageSrc: '/images/collectibles.webp',
            title: 'Collectibles',
            description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
            url: 'https://project-collections-cfb3d3b9c8f8.herokuapp.com/'
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
                All Projects
              </Typography>
           <DevProjectsSection projects={allProjects} button={projectsBackButton} />
          </div>
      </React.Fragment>
    );
  }
  export default WithRoot(WithScrollToTop(Projects));