import React, {useEffect, useState} from 'react'
import {commerce} from '../commerce'
import Product from './Product';
import {Link} from 'react-router-dom'

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [isPopup, setIsPopup] = useState(false)
  

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
        console.log(data)
      };


    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className="text-center py-5">
            <div className="text-5xl pb-10">Our Catalog</div>
            <div className="flex flex-wrap relative pb-10">
                {products ? products.map((product) => {
                    return(
                        <Product key={product.id} product={product} setIsPopup={setIsPopup}/>
                    )
                }) : "Nothing is available, try later!"}
            </div>
            <Link to="/cart" className="transition-all border border-black mt-10 py-3 px-8 rounded-full hover:bg-white">Go to Cart!</Link>
            {isPopup ? <div className="fixed inset-x-0 top-8 mx-auto w-48 transition bg-white rounded border border-gray-400 p-4">Item added to cart!</div> : ""}
            
        </div>
    )
}

export default Catalog
