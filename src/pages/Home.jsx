import * as React from 'react';

import ContactForm from '../views/ContactForm';
import DevProjectsSection from '../views/DevProjectsSection';
import Hero from '../views/Hero';
import WithRoot from '../components/WithRoot';
import WithScrollToTop from '../components/WithScrollToTop';


const mainProjects = [
   
    {
        imageSrc: '/images/Invizlogo.webp',
        title: 'INVIZ Productivity',
        description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of. Currently on WordPress, soon to be application! ',
        url: 'https://invizproductivity4.wordpress.com/'
    },
    {
        imageSrc: '/images/plantGuyLogo.webp',
        title: 'Plant Guy',
        description: 'Feel the fresh and pure air that every office plant provides! ',
        url: 'https://plantguy.netlify.app'
    },
    {
        imageSrc: '/images/infiniteLogo.webp',
            title: 'Infinite Tutoring',
            description: 'Discover the endless journey of learning!',
            url: 'https://infinitetutoring.netlify.app/',

    },

    
];
const currentProjectsButton =
{
    label: 'See More',
    url: '/projects'
}

function Index() {
    return (
        <React.Fragment>
            <Hero />
            <DevProjectsSection projects={mainProjects} sectionTitle="Dev Projects" button={currentProjectsButton} />
        </React.Fragment>
    );
}

export default WithRoot(WithScrollToTop(Index));