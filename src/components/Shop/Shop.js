import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStordedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProducts([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = getStordedCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products]);


    const handleAddToCart = (selcetedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selcetedProduct.id);
        if (!exists) {
            selcetedProduct.quantity = 1;
            newCart = [...cart, selcetedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selcetedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selcetedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/orders'}>
                        <button className='black-btn'>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;