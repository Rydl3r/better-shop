import React, {useEffect, useState} from 'react'
import {commerce} from '../commerce'
import ProductCart from './ProductCart';
import {Link} from 'react-router-dom'

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("")
  const [isPopup, setIsPopup] = useState(false)

    const fetchProducts = async () => {
        const data = await commerce.cart.retrieve();
    
        setProducts(data.line_items);
        setTotal(data.subtotal.formatted_with_symbol)
        console.log(data)
      };


    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className="text-center py-5">
            <div className="text-5xl pb-5">Your Cart</div>
            <div className="pb-3">Total - <b>{total}</b></div>
            <div className="flex flex-wrap mb-5">
                {products ? products.map((product) => {
                    return(
                        <ProductCart key={product.id} product={product} fetchProducts={fetchProducts} setIsPopup={setIsPopup}/>
                    )
                }) : "Nothing here, try adding something!"}
            </div>
            <Link to="/thank-you" className="transition-all border border-black mt-10 py-3 px-8 rounded-full hover:bg-white" onClick={() => {
                commerce.cart.empty()
            }}>Checkout</Link>
            {isPopup ? <div className="fixed inset-x-0 top-8 mx-auto w-64 transition bg-white rounded border border-gray-400 p-4">Item removed from cart!</div> : ""}
            
        </div>
    )
}

export default Catalog
