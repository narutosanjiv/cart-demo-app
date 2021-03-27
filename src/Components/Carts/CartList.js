import React, { useContext } from 'react';

import { CartContext } from '../CartContext'
import CartDetail from './CartDetail'

const CartList = () => {
    const [cart, _] = useContext(CartContext);
    
    return (
        <div> 
            Total Cart Element: {cart.length}

            <div className="cart_details">
                {
                    cart.map((c, ind) => (
                        <CartDetail item={c} indics={ind} />
                    ))
                }  
            </div>
        </div>
    )
};

export default CartList;