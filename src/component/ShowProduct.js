import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../features/ProductSlice'
import { productSelector } from '../features/ProductSlice'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../features/ProductSlice'

const ShowProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(productSelector.selectAll)
    console.log(products)

    useEffect(()=> {
        dispatch(getProducts())
    }, [dispatch])
  return (
    <div className='box'>
        <Link to={'add'} className='is-success button'>Add Product</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((value, index)=> (                        
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.title}</td>
                            <td>{value.price}</td>
                            <td>
                                <Link to={`edit/${value.id}`} className='button mr-2 is-success'>edit</Link>
                                <Link onClick={()=> dispatch(deleteProduct(value.id))} className='button is-danger'>delete</Link>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowProduct