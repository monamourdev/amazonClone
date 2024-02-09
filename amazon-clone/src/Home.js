import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/61pEO1EGosL._SX3000_.jpg" alt="Banner"
        />

        <div className='home__row' >
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/816uyAB+6bL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={4}
          />

          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/816uyAB+6bL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={4}
          />
        </div>
        <div className='home__row' >
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/816uyAB+6bL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={4}
          />
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/816uyAB+6bL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={4}
          />
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/816uyAB+6bL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={4}
          />
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/816uyAB+6bL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={4}
          />

        </div>
        <div className='home__row' >
          {/* produto */}
        </div>
      </div>
    </div>
  )
}

export default Home
