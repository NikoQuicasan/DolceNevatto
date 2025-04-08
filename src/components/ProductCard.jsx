import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative pb-2/3">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-pink-500">${product.price}</span>
          <Link 
            to={`/producto/${product.id}`} 
            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;