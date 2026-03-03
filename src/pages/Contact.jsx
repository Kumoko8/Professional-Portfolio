import * as React from 'react';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';
import WithRoot from '../components/WithRoot';
import ContactFormClient from '../components/ContactFormClient';
import WithScrollToTop from '../components/WithScrollToTop';




function Contact() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div>
                <div>
                    <Typography variant="h3" component="h3" gutterBottom sx={{ margin: 2, color: 'black', textAlign: 'center' }}>
                        Contact Me
                    </Typography>
                </div>
                <Typography variant="h3" component="h3" gutterBottom sx={{ marginBottom: 2, color: 'black' }}>
                    Let&apos;s Collaborate!
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <ContactFormClient />
                </Box>
               
        
            </div>
        </React.Fragment>
    )
};
export default WithRoot(WithScrollToTop(Contact));
