import React, { useContext } from 'react';
import { CartContext } from '../CartContext'

const CartList = () => {
    const [cart, setCart] = useContext(CartContext);
    
    return (
        <div> 
            Total Cart Element: {cart.length}
        </div>
    )
};

export default CartList;