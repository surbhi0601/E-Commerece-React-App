import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollection from '../components/Newcollection/NewCollection'
import NewsLatter from '../components/newsLetter/NewsLatter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLatter/>
      
    </div>
  )
}

export default Shop
