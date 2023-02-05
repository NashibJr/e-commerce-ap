import * as React from 'react';

const Product = ({ product }) => {
      return (
            <div>
                  <img src={product.image} height="150px" width="10%" alt=""/>
                  <h3>{product.title}</h3>
                  <p>$ {product.price}</p>
                  <p>Rating: {product.rating.rate}</p>
                  <button type="button">Add to Cart</button>
            </div>
      );
}

export default Product;