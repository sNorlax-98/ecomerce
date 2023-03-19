import { Container, Typography, } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Style.css';
const Footer = () => {
    return (
        <Container id='footer-container' sx={{color:'white'}} maxWidth='100vh' >
        <Typography variant='h5'  sx={{marginRight:10,p:2}}>socials</Typography>
        <InstagramIcon  fontSize='large' sx={{p:2}}  />
        <FacebookIcon   fontSize='large' sx={{p:2}} />
        <YouTubeIcon   fontSize='large'  sx={{p:2}} />            
        </Container>
    );
}

export default Footer;
