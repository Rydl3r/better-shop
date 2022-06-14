import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="text-center home">
      <h1 className="font-bold text-6xl py-10">Thank you for your purchase!</h1>
      <h3 className="text-xl py-10">
        Our manager will contact you shortly to verify shipping details.
      </h3>
      <Link
        to="/catalog"
        className="transition-all border-2 border-black py-3 px-8 rounded-full hover:bg-white"
      >
        Head back to the catalog!
      </Link>
    </div>
  );
};

export default ThankYou;
