import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import search from './images/search.png';
import shoppingCart from './images/cart-icon.jpg';
import Products from './features/products/products';
import Electronics from './features/products/categories/electronics';
import Jewelery from './features/products/categories/jewerly';
import MensClothings from './features/products/categories/mensclothings';
import WomenClothings from './features/products/categories/womensclothing';
import Search from './features/products/search';

function App() {
  return (
    <Router>
      <div className='header'>
        <div>
          <h1>Shumia</h1>
        </div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <div>
            <Link>Categories</Link>
            <div className='hide-links'>
              <Link to='/electronics'>Electronics</Link>
              <Link to='/jewelery'>Jewelery</Link>
              <Link to='/mensclothing'>Men's clothing</Link>
              <Link to='/womensclothing'>Women's clothing</Link>
            </div>
          </div>
          <Link to='/search'><img src={search} width='20px' height='20px' alt=''/></Link>
          <img src={shoppingCart} width='30px' height='30px' alt=''/>
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<Products />}/>
        <Route path='/electronics' element={<Electronics />}/>
        <Route path='/jewelery' element={<Jewelery />}/>
        <Route path='/mensclothing' element={<MensClothings />}/>
        <Route path='womensclothing' element={<WomenClothings />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </Router>
  );
}

export default App;
