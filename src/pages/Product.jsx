import React, { useContext } from 'react'
import { ShopContex } from '../components/contex/ShopContex'
import { useParams } from 'react-router-dom'
import BreadCrumps from '../components/BreadCrumps/BreadCrumps'
import ProductDisplay from '../components/productDisplay/ProductDisplay'

const Product = () => {
  const {all_product} = useContext(ShopContex)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <BreadCrumps product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
