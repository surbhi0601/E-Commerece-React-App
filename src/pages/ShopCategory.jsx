import React, { useContext } from 'react'
import { ShopContex } from '../components/contex/ShopContex'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContex)
  return (
    <div>
        <img src={props.banner} />
      
    </div>
  )
}

export default ShopCategory
