import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const Product = (props) => {
    const { product: {title, image, description } } = props
    const [_, setCart] = useContext(CartContext);
    
    const AddtoCart = (product_elem) =>{
        setCart((curr) => [...curr, product_elem])
    }
    return(
        <div className="item-product">
            <span>
                <img src={image} alt={title} />
            </span>
            <span>
                {title}
            </span>
            <span> 
                {description}
            </span>
            <span >
                <button className="add_to_cart" onClick={AddtoCart}>
                    Add To Cart 
                </button>
            </span>
        </div>
    )

}

export default Product;