import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    return (
        <div className='cart'>
           <h3>Selected Books</h3>
           <p>Selected item: {cart.length}</p>
           <button className='btn-cart'>Select One For me</button> <br />
           <button className='btn-cart btnCart2'>Select Again</button>
        </div>
    );
};

export default Cart;