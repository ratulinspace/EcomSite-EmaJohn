import React from 'react';
import useProducts from '../hooks/useProducts';
import './Order.css'

const Orders = () => {

    const [products, setProducts] = useProducts();

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Trebuchet MS' }}>Items in num: {products.length}</h2>
        </div>
    );
};

export default Orders;