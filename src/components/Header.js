import React from 'react';
import logo from './snor-store-logo.PNG'
import "./Style.css"
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className='logo' />
            <ul>
                <li >  <a href="/">Home</a> </li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/cart">Cart 🛒</a></li>
            </ul>
        </div>
    );
}

export default Header;
