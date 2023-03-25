import React from 'react';
import Header from './components/Header';
import { useContext } from 'react';
import Data from './components/Data';
import './components/Style.css'
import CartContext from './context/CartContext';
const Cart = () => {
    const {removeFromCart} = useContext(CartContext)
    let b = useContext(CartContext)
    console.log(b.cart)
    return (
            <>
            <Header/>
            <div className='card-div'>
            {Data.map(d=>{
               if (b.cart[d.id]>0)
               return <div className='w-25 h-25'>
               <div className="card" style={{width: "18rem"}}>
               <img src={d.img} className="card-img-top img-thumbnail w-50" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">{d.name}</h5>
                   <p className="card-text">{d.description}.</p>
                   <div className='btn-group'>
                   <button className="btn btn-danger btn-sm "  onClick={()=>removeFromCart(d.id)}>Remove</button>
                   </div>
               </div>
               </div>
              </div>
            return null
            })}
            </div>
        </>
    );
}

export default Cart;
