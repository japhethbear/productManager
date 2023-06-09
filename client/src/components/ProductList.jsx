import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ProductList = (props) => {
  
    const {products, setProducts} = props
    const navigate = useNavigate();

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const filteredProducts = products.filter(product => product._id !== id)
                setProducts(filteredProducts)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])
  
    const navigateToProductForm = () => {
        navigate('/api/products/create')
    }
    
    return (
        <div className='mx-auto'>
            <h1 className="mx-auto">Product List</h1>
            <table className='col-md-6 mx-auto mt-4'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Product Page Link</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        return (
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`/products/${product._id}`}>{product.title}'s Page</Link></td>
                                <td><Link to={`/products/edit/${product._id}`}>Edit {product.title}</Link></td>
                                <button className="btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        <button className="btn btn-info offset-5 mt-2" onClick={navigateToProductForm}>Create Product</button>
        </div>
  )
}

export default ProductList