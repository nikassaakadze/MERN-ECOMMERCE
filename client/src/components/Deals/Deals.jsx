 import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as productActions from '../../redux/actions/productActions'
import Card from './Card'
import './Deals.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import {useLocation} from 'react-router-dom'

function Deals() {

  const dispatch = useDispatch()
  const location = useLocation()
  
  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts

  useEffect(() => {
    dispatch(productActions.getProducts())
    return () => {
      dispatch(productActions.removeProductDetails())
    }
  }, [dispatch, location])

  return (
    <div className="deals-wrap">
      <div className="deals-wrap-content">
        <div className="deals-wrap-content-heading">
          <h1>Top deals</h1>
        </div>
        <div className="deals-wrap-content-cards">
        {
          loading 
          ? <div className="loading"> <CircularProgress /></div>
          : error 
          ? <h1>{error}</h1> 
          : products?.map(product => (
            <Card 
              key = { product._id } 
              unique = { product._id } 
              name = { product.name } 
              price = { product.price } 
              category = { product.category } 
              hero = { product.hero } 
              rate = { product.rate }
            />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Deals
