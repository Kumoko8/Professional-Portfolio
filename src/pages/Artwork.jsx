import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const artworkItems = [
    {
        thumbnail: '/images/paint-stroke1_thumb.jpg',
        fullImage: '/images/paint-stroke2_full.jpg',
        title: 'Paint Stroke',
    },
    {
        thumbnail: '/images/godlight2_thumb.jpg',
        fullImage: '/images/godlight2_full.jpg',
        title: 'God Light',
    },
    {
        thumbnail: '/images/make-life3_thumb.jpg',
        fullImage: '/images/make-life3_full.jpg',
        title: 'Make Life',
    },
    {
        thumbnail: '/images/Vs_Slime4_thumb.jpg',
        fullImage: '/images/Vs_Slime4_full.jpg',
        title: 'Vs Slime',
    },
    {
        thumbnail: '/images/furi-docs_thumb.jpg',
        fullImage: '/images/furi-docs_full.jpg',
        title: 'Furi Docs',
    },
    // Add more artworks as needed
];

function Artwork() {
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Container>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h2" component="h2" gutterBottom>
                    The Invisible Story Artwork
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {artworkItems.map((art, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <img
                                src={art.thumbnail}
                                alt={art.title}
                                style={{ width: '100%', cursor: 'pointer' }}
                                onClick={() => handleClickOpen(art.fullImage)}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Dialog open={open} onClose={handleClose} maxWidth="md">
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, left: 8 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    {selectedImage && (
                        <Box component="img" src={selectedImage} alt="Full Artwork" sx={{ width: '100%' }} />
                    )}
                </Dialog>
            </Box>
        </Container>
    );
}

export default Artwork;
