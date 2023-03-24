
import React from 'react';
import Card from './Card';


const Hero = () => {
    const [cart,setCart] = React.useState(0)
    return (
        <div>
            <Card/>
        </div>
    );
}

export default Hero;
