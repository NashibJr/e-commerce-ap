import * as React from 'react';
import { useSelector } from 'react-redux';
import Product from './product';

const Category = ({ category }) => {
      const products = useSelector(state => state.products.products);
      const wantedProducts = products.filter(product => product.category === `${category}`);
      return (
            <div>
                  <h1>{ category }</h1>
                  <div>
                      {
                        wantedProducts.map((product) => {
                              return (
                                    <Product product={product} key={product.id}/>
                              );
                        })
                      }  
                  </div>
            </div>
      );
}

export default Category;