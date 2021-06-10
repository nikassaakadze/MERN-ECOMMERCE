import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as productActions from '../../redux/actions/productActions'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import './ViewProduct.css'
import CircularProgress from '@material-ui/core/CircularProgress';

function ViewProduct() {

  const dispatch = useDispatch()
  const location = useLocation()
  const [value, setValue] = React.useState(1)
  
  const getProductDetails = useSelector(state => state.getProductDetails)
  const { product, loading, error } = getProductDetails

  useEffect(() => {

    const {unique} = queryString.parse(location.search)

    dispatch(productActions.getProductDetails(unique))
    
    return () => {
      dispatch(productActions.removeProductDetails()) //unmount product
    }
  }, [dispatch, location.search])

  const countUp = () => {
    if(value > 0 && value < 10){
      setValue(value + 1)
    }
  }
  const countDown = () => {
    if(value > 1){
      setValue(value - 1) 
    }
  }

  return (
    <div className="view-prod-wrap">
      <div className="view-product-wrap-content">
        {
          loading 
          ? ( <div className="loading"><CircularProgress /></div>) 
          : error 
          ? (<h1>{error}</h1>) 
          : ( 
            <div className="product-info-wrap">
              <div className="product-info-slider">
                <img src={product.hero} alt="" />
              </div>
              <div className="product-description">
                <div className="product-cs-category">
                  <h2>{product.category}</h2>
                </div>
                <div className="product-cs-name">
                  <h1>{product.name}</h1>
                </div>
                <div className="product-counts">
                  <button onClick={countDown}>-</button>
                  <span className="count-cr-value">{value}</span>
                  <button onClick={countUp}>+</button>
                </div>
              </div>
            </div>
           )
        }
      </div>
    </div>
  )
}

export default ViewProduct
