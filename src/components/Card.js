import { Button } from '@mui/material';
import React from 'react';
import Data  from './Data';
import './Style.css'

const Card = () => {
    console.log(Data)
    return (
        <div className='card-div'>
        {Data.map(d=>{
           return(
            <div>
            <img className='product-img' src={d.img}/>
           <h4>{d.name}</h4>
           <h6>Rating{d.rating}</h6>
           <p>Description: <br></br>{d.description}</p>
           <Button className='product-button' >Buy now</Button>
           <Button className='product-button' >Add to cart</Button>
           </div>)
            })}
            
        </div>
    );
}

export default Card;
