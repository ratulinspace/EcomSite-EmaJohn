import React from 'react';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import './Order.css'

const Orders = () => {

    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Trebuchet MS' }}>Items in num: {products.length}</h2>
            <p>Cart has : {cart.length}</p>
        </div>
    );
};

export default Orders;