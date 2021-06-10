import React from 'react'
import {useSelector} from 'react-redux'
import ProductCard from './ProductCard'
import './Cart.css'

function CartPage() {
  
  const cart = useSelector(state => state.cart)

  const { cartItems } = cart

  return (
    <div className="cart-warp">
      <div className="cart-in">
        <div className="cart-in-products">
          {
            cartItems?.map(product => (
              <ProductCard key={product.product} name={product.name} unique={product.product} />
            ))
          }
        </div>
        <div className="cart-in-subtotal"></div>
      </div>
    </div>
  )
}

export default CartPage
