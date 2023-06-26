import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, productSelector, updateProduct } from '../features/ProductSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams();
    
    const product = useSelector((state)=> productSelector.selectById(state, id))

    useEffect(()=> {
        dispatch(getProducts())
    }, [dispatch])

    useEffect(()=> {
        if(product){
            setTitle(product.title)
            setPrice(product.price)
        }
    }, [product])

    const handleSubmit = async (e)=> {
        e.preventDefault();
        await dispatch(updateProduct({price, title, id}))
        navigate('/')
    }
  return (
    <>
        <h1 className='box' style={{textAlign: 'center',fontWeight: 'bold' , fontSize: '1.7rem'}}>Update Data</h1>
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
                        <button className='button is-success'>Update</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default EditProduct