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
        <div className='card-div'>
            <Header/>
            <div><h1>Cart</h1></div>
            {Data.map(d=>{
               if (b.cart[d.id]>0)
               return <div className="card " style={{width: "18rem"}}>
               <img src={d.img} className="card-img-top product-img" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">{d.name}</h5>
                 <p className="card-text">{d.description}</p>
                 <button  onClick={()=>removeFromCart(d.id)} className="btn btn-primary">Remove from cart</button>
               </div>
             </div>
            })}
        </div>
    );
}

export default Cart;
