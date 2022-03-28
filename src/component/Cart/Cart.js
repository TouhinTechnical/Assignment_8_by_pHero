import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let name = '';
    for(const product of cart){
        name = name + product.name + ' ';
    }
    const randomSelect = () => {
        console.log(Math.floor(Math.random() * 12));
    }
    return (
        <div className='cart'>
           <h3>Selected Books</h3>
           <p>Selected item: {cart.length}</p>
           <p>{name}</p>
           <button onClick={randomSelect} className='btn-cart'>Select One For me</button> <br />
           <button className='btn-cart btnCart2'>Select Again</button>
        </div>
    );
};

export default Cart;