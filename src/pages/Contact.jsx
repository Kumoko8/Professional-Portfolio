import * as React from 'react';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';
import WithRoot from '../components/WithRoot';
import HubSpotForm from 'react-hubspot-form';
import WithScrollToTop from '../components/WithScrollToTop';




function Contact() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div>
                <div>
                    <Typography variant="h3" component="h3" gutterBottom sx={{ marginBottom: 2, color: 'black' }}>
                        Contact Me
                    </Typography>
                </div>
                <Typography variant="h3" component="h3" gutterBottom sx={{ marginBottom: 2, color: 'black' }}>
                    Let's Collaborate!
                </Typography>

                <Box sx={{ display: 'flexbox', flexDirection: 'column', flexGrow: 1 }}>
                    <HubSpotForm
                        sx={{}}
                        portalId="44406398"
                        formId="b8e767ed-bf30-47bc-b2e3-150d52611e2c"
                        onSubmit={() => console.log('Form submitted')}
                        onReady={(form) => console.log('Form ready:', form)}
                        loading={<div>Loading...</div>}
                    />
                </Box>
                <p style={{ color: 'black' }}>
                    Contact form not working? Try <a href="https://share.hsforms.com/1uOdn7b8wR7yy4xUNUmEeLAqfs72" target="_blank"> this </a> link
                </p>
                <div>
                    <Typography variant="h3" component="h3" gutterBottom sx={{ marginBottom: 2, color: 'black' }}>
                        or Set Up a Time to Chat!
                    </Typography>
                </div>

                <div style={{display: 'flexbox', flexDirection: 'column', flexGrow: 1 }} className="meetings-iframe-container">
                    <iframe
                        src="https://meetings.hubspot.com/taylor-golden?embed=true"
                        width="800"
                        height="600"
                        style={{ border: '0' }}
                        allowFullScreen
                    />
                </div>
                <p style={{ color: 'black' }}>
                    Meeting form not working? Try <a href="https://meetings.hubspot.com/taylor-golden" target="_blank"> this </a> link
                </p>
            </div>
        </React.Fragment>
    )
};
export default WithRoot(WithScrollToTop(Contact));
