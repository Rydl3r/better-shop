import React from 'react'
import {commerce} from '../commerce'

const Product = ({product, setIsPopup}) => {
    return (
        <div className="bg-gray-200 rounded py-5 max-w-xs mx-auto my-5 flex flex-col justify-center items-center">
            <img src={product.image.url} alt="" className="max-w-xs h-48 rounded-t"/>
            <div className="text-lg font-bold">{product.name}</div>
            <div>{product.price.formatted_with_symbol}</div>
            <div className="px-5 py-3">{product.description.replace( /(<([^>]+)>)/ig, '')}</div>
            <button onClick={() => {
                commerce.cart.add(product.id)
                setIsPopup(true)
                setTimeout(() => {
                    setIsPopup(false)
                }, 2000);
            }} className="transition-all border border-black py-3 px-8 rounded-full hover:bg-white">Add to cart</button>
        </div>
    )
}

export default Product
