import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';

const Main = (props) => {

    const [products, setProducts] = useState([]);

  return (
    <div>
        <ProductForm products={products} setProducts={setProducts}/>
        <ProductList products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main