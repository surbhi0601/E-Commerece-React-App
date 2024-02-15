import React from 'react'
import Product from '../../pages/Product'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (e) => {
    const { product } = e;
    return (
        <div>
            <div>
                <div>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <img src={product.image} alt="" />

                </div>
            </div>
            <div>
                <p>{product.name}</p>
                <div>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div>
                    <div><p>${product.old_price}</p></div>
                    <div><p>${product.new_price}</p></div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident vero eum et dignissimos rem veniam illo eligendi, harum labore quos obcaecati reiciendis aliquid! Modi.</p>
                </div>
                <div>
                    <p>Select Size</p>
                    <div>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                    </div>
                </div>
                <button>Add To Cart</button>
                <div>
                    <p>Category: <span>Women, T-shirt , crop-Tops</span></p>
                    <p>Tages: <span>Morder , Latest</span></p>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay

