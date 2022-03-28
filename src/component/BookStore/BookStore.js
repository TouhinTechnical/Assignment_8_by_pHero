import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Products';
import './BookStore.css';
const BookStore = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const handlerAddToCart = (product) => {
        console.log(product);
        setCart([...cart, product]);
    }
    return (
        <div className='BookStore-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handlerAddToCart = {handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default BookStore;