import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const updatePerson = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err));
        }
    
    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        }

  return (
    <div>
        <h1 className="mx-auto">Update Product</h1>
        <form className="col-md-6 mx-auto" onSubmit={updatePerson}>
            <p>
                <label htmlFor='title'>Title: </label><br/>
                <input type="text" id='title' name='title' value={product.title} onChange = {onChangeHandler}/>
            </p>
            <p>
                <label htmlFor='price'>Price: </label><br/>
                <input type="text" id='price' name='price' value={product.price} onChange = {onChangeHandler}/>
            </p>
            <p>
                <label htmlFor='description'>Description: </label><br/>
                <input type="text" id='description' name='description' value={product.description} onChange = {onChangeHandler}/>
            </p>
            <input type="submit"/>
        </form>

    </div>
  )
}

export default Update