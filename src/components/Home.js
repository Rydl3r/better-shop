import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home h-screen text-center py-10">
            <h1 className="font-bold text-6xl py-10">Welcome to our ECommerce!</h1>
            <h3 className="text-xl py-10">
                We offer best prices and the widest range of products
                <br/>Enjoy low prices and great deals on the largest selection of products in selected category!
            </h3>
            <Link to="/catalog" className="transition-all border-2 border-black py-3 px-8 rounded-full hover:bg-white">Head to the catalog!</Link>
        </div>
    )
}

export default Home
