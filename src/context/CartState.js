import React from 'react';
import CartContext from './CartContext';
import { useState } from 'react';
import Data from '../components/Data';




    function getDefaultCart(){
        let state = {}
        for (let i =1; i<Data.length+1; i++){
            state[i] = 0
        }
        return state
    }

const CartState = (props)=>{
    
    const [cart, setcart] = useState(getDefaultCart());

    function addToCart(itemid){
        setcart((prev)=>({...prev, [itemid]: prev[itemid]+1}))
    }

    function removeFromCart(itemid){
        setcart((prev)=>({...prev, [itemid]: prev[itemid]-1}))
    } 

     return (
        <CartContext.Provider value = {{cart,addToCart,removeFromCart}} >
            {props.children}
        </CartContext.Provider>
     )
}


export default CartState;