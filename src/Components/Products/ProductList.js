import React from 'react';
import Product from './ProductDisp';

const getProductsdata = () => (
    {
        "products": [
            {
                "_id": "dress1",
                "title": "Dress 1",
                "image": "images/dress1.jpeg",
                "description": "About this dress",
                "prince": 300,
                "availableSizes": ["S", "M", "L", "XL"]
            },
            {
                "_id": "dress2",
                "title": "Dress 2",
                "image": "images/dress2.jpeg",
                "description": "About this dress",
                "prince": 250,
                "availableSizes": ["S", "M", "L", "XL"]
            },
            {
                "_id": "dress3",
                "title": "Dress 3",
                "image": "images/dress3.jpeg",
                "description": "About this dress",
                "prince": 350,
                "availableSizes": ["S", "M", "L", "XL"]
            },
            {
                "_id": "dress4",
                "title": "Dress 4",
                "image": "images/dress4.jpeg",
                "description": "About this dress",
                "prince": 600,
                "availableSizes": ["S", "M", "L", "XL"]
            }
        ]
    }
)

const ProductList = () => {

    const {products} = getProductsdata();

    return(
        <div className="products">
            {
                products.map((product, indics) =>
                    (
                        <Product product={product} />
                    )
                )
            }
        </div>
      
    )

};

export default ProductList;