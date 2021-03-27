import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const CartDetail = ({item, indics}) => {
    const {
        title,
        image, 
        description
    } = item;
    const [cart, setCart] = useContext(CartContext);

    const RemoveFromCart = (index) => {
        cart.splice(index, 1);
        setCart((curr) => (cart));
    }

    return (

         <div className="cart_individual">
            <span>
                <img src={image} alt={title} />
            </span>
            <span>
                {title}
            </span>
            <span> 
                {description}
            </span>
            <div>
                <button onClick={(e) => {RemoveFromCart(indics)}}> 
                    Remove from Cart(X)
                </button>
            </div>
         </div>   
    )

};

export default CartDetail;