import React from 'react';

const Product = ({ id, name, description, price, addToCart }) => {
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Product;
