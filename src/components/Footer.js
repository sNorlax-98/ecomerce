import { Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Container sx={{bgcolor:'tomato',height:'100vh',m:0 }} >
            <Typography sx={{p:1}} variant='h1' > 
                hi
            </Typography> 
           
        </Container>
    );
}

export default Footer;
