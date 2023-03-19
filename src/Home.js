import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'
import Hero from './components/Hero';
import Card from './components/Card';

const Home = () => {
    return (
        <div className='home-div'> 
           <Header/> 
           <Hero/>
           <Footer/>
        </div>
    );
}

export default Home;
