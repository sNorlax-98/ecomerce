import React from 'react';
import Data  from './Data';
import './Style.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Card = () => {
    const {cart,addToCart,removeFromCart} = useContext(CartContext)
    
    return (
        <div className='card-div'>
        {Data.map(d=>{
            const cartItemCount = cart[d.id];
           return(
            <div className='w-25 h-25'>
            <div className="card" style={{width: "18rem"}}>
            <img src={d.img} className="card-img-top img-thumbnail w-50" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{d.name}</h5>
                <p className="card-text">{d.description}.</p>
                <div className='btn-group'>
                <button className="btn btn-primary btn-sm "  onClick={()=>addToCart(d.id)}>Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>} </button>
                <button className="btn btn-danger btn-sm "  onClick={()=>removeFromCart(d.id)}>Remove</button>
                </div>
            </div>
            </div>
           </div>)
            })}
        </div>
    );
}

export default Card;
