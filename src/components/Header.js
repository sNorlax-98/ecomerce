import { Box, Button, Container,  } from '@mui/material';
import { display } from '@mui/system';
import React from 'react';
import logo from './snor-store-logo.PNG'
import "./Style.css"
const Header = () => {
    return (
        <Box>
            <Container sx={{bgcolor:'blanchedalmond',m:0}}>
                <img src={logo} className='logo' alt="logo" />
                <Button variant='contained' size='small' sx={{justifyContent:'space-between',float:'right',my:5,mx:1}}>About</Button>
                <Button variant='contained' size='small' sx={{justifyContent:'space-between',float:'right',my:5,mx:1}}>Contact</Button>
                <Button variant='contained' size='small' sx={{justifyContent:'space-between',float:'right',my:5,mx:1}}>Cart</Button>
                <Button variant='contained' size='small' sx={{justifyContent:'space-between',float:'right',my:5,mx:1}} >Home</Button>
            </Container>
        </Box>
    );
}

export default Header;
