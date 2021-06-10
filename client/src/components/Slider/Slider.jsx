import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import './Slider.css'

function Slider() {
  return (
    <Carousel indicators={false} interval={4000} navButtonsAlwaysVisible={true}  animation="slide" className="customers-slider">
      <Paper className="cs-slide-item">
        <div className="slider-item-heroPart">
          <img src="https://cdn.wccftech.com/wp-content/uploads/2020/11/M1-MacBook-Air-1.jpg" alt=""/>
        </div>
        <div className="slider-item-infoPart">
        <div className="slider-item-name">
            <h1>Apple MacBook Pro 13 - Black</h1>
          </div>
          <div className="slider-item-info">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat et porro dignissimos est iure quaerat praesentium laboriosam doloremque?</p>
          </div>
          <div className="slider-buyProd">
            <div className="btn-byProd">
              <button className="slider-btn">Buy product</button>
            </div>
            <div className="btn-viewProd">
              <button className="slider-btn">View product</button>
            </div>
          </div>
        </div>
      </Paper>
      <Paper  className="cs-slide-item">
        <div className="slider-item-heroPart">
          <img src="https://cdn.wccftech.com/wp-content/uploads/2020/11/M1-MacBook-Air-1.jpg" alt=""/>
        </div>
        <div className="slider-item-infoPart">
          <div className="slider-item-name">
            <h1>Apple MacBook Pro 13 - Black</h1>
          </div>
          <div className="slider-item-info">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat et porro dignissimos est iure quaerat praesentium laboriosam doloremque?</p>
          </div>
          <div className="slider-buyProd">
            <div className="btn-byProd">
              <button className="slider-btn">Buy product</button>
            </div>
            <div className="btn-viewProd">
              <button className="slider-btn">View product</button>
            </div>
          </div>
        </div>
      </Paper>
      <Paper  className="cs-slide-item">
        <div className="slider-item-heroPart">
          <img src="https://cdn.wccftech.com/wp-content/uploads/2020/11/M1-MacBook-Air-1.jpg" alt=""/>
        </div>
        <div className="slider-item-infoPart">
        <div className="slider-item-name">
            <h1>Apple MacBook Pro 13 - Black</h1>
          </div>
          <div className="slider-item-info">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat et porro dignissimos est iure quaerat praesentium laboriosam doloremque?</p>
          </div>
          <div className="slider-buyProd">
            <div className="btn-byProd">
              <button className="slider-btn">Buy product</button>
            </div>
            <div className="btn-viewProd">
              <button className="slider-btn">View product</button>
            </div>
          </div>
        </div>
      </Paper>
    </Carousel>
  )
}

export default Slider
