import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import Feature from './components/Feature';
import { GlobalStyle } from './components/globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import {productData, productDataTwo} from './components/Products/data'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData} />
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
