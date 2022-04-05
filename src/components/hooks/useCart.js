import { useEffect, useState } from "react";
import { getStordedCart } from "../utilities/fakedb"

const useCart = (products) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {

        const storedCart = getStordedCart()
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(products => products.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products]);

    return [cart, setCart]

};

export default useCart;