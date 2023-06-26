import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveProduct } from '../features/ProductSlice'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        await dispatch(saveProduct({title, price}))
        navigate('/')
    }
  return (
    <div className='box'>
        <form onSubmit={handleSubmit} className='box'>
            <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                    <input type="text"  className='input' placeholder='Title'
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Price</label>
                <div className='control'>
                    <input type="number"  className='input' placeholder='Price'
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button className='button is-success'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddProduct