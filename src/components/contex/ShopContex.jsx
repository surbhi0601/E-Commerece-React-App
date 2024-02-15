import React, { createContext } from 'react'
import all_product from '../assets/all_product'

export const ShopContex = createContext(null)

const ShopContextProvider = (props)=>{
    const contextValue ={all_product};

    return(
        <ShopContex.Provider value={contextValue}>
            {props.children}
        </ShopContex.Provider>
    )
}
export default ShopContextProvider
  