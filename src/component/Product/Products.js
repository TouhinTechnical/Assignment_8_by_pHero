import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';
const Product = (props) => {
    // console.log(props.product);
    const {img, id, name, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="Book item" />
            <div className="product-info">
                <span>Book id: {id}</span>
                <p>Book Name: {name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handlerAddToCart(props.product)}className='btnCart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} className='iconStyle'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;