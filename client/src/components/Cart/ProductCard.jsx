import React from 'react'
import { useDispatch } from 'react-redux'
import * as cartActions from '../../redux/actions/cartActions'

function ProductCard({ name, hero, price, rate, unique }) {

  const dispatch = useDispatch()

  const remove = () => {
    dispatch(cartActions.removeFromCart(unique))
  }

  return (
    <div className="product-card_inCart">
      <h1>{name}</h1>
      <button onClick={remove}>Delete</button>
    </div>
  )
}

export default ProductCard
