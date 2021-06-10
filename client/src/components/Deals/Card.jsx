import React from 'react'
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import  { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {message} from 'antd'

function Card( { name, price, category, hero, unique, rate } ) {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const {exist, loading} = cart
  const addProductToCart = () =>{
    dispatch(cartActions.addToCart(unique))
  }

  const rateVithStars = (rateValue) => {
    dispatch(productActions.rateProduct(unique, rateValue))
    if(!loading){
      message.success(`You rated ${name} with ${rateValue} Stars`)
    }
  }

  const compareProduct = () => {}

  return (
    <div className="product-card">
      <div className="product-card-in">
        <div className="product-cover">
          <img src={hero} alt=""/>
        </div>
        <div className="product-card-footer">
          <div className="product-category">
            <h4>{category}</h4>
          </div>
          <div className="product-name">
            <h5>{name}</h5>
          </div>
          <div className="product-price">
            <h4>${price}</h4>
              <div className="product-rate">
                <ReactStars
                  count={5}
                  onChange={(rateValue) => rateVithStars(rateValue)}
                  size={22}
                  activeColor="#ee6833"
                  value={rate}
                />
            </div>
          </div>
        </div>
        <div className="card-activities">
          loading 
          ? (<spna>Loading...</spna>) 
          : (
            <div className="product-addToCart" onClick = { addProductToCart }>
              <AddShoppingCartIcon className="addToCartBtn" />
            </div>
          )
          <div className="product-view">
            <Link to={`/view-product?name=${name}&unique=${unique}`}>
              <button>View product</button>
            </Link>
          </div>
          <button onClick={compareProduct}>compare</button>
        </div>
      </div>
    </div>
  )
}

export default Card
