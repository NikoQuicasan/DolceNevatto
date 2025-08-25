import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

// Datos de ejemplo para el catálogo de helados
const productData = [
  {
    id: 1,
    name: "Queso Bocadillo",
    description: "Helado artesanal de mascarpone con dulce de guayaba",
    image: "/images/artesanales/queso-bocadillo-1.jpg", // Asegúrate de guardar la imagen en la carpeta public/images
    category: "Especialidades"
  },
  {
    id: 2,
    name: "Brownie",
    description: "Helado cremoso con trozos de brownie",
    price: "4.50",
    image: "/images/artesanales/brownie-3.jpg",
    category: "Chocolates"
  },
  {
    id: 3,
    name: "Chocolate",
    description: "Intenso sabor a chocolate premium",
    price: "5.25",
    image: "/images/artesanales/chocolate-1.jpg",
    category: "Chocolates"
  },
  {
    id: 4,
    name: "Coco",
    description: "Elaborado con trozos de coco",
    price: "5.99",
    image: "/images/artesanales/coco-1.jpg",
    category: "Frutales"
  },
  {
    id: 5,
    name: "Cookies",
    description: "Helado con auténtico sabor a cookies and cream",
    price: "5.50",
    image: "/images/artesanales/cookies-1.jpg",
    category: "Especialidades"
  },
  {
    id: 6,
    name: "Frutos Amarillos",
    description: "Refrescante helado con trozos de frutos amarillos",
    price: "4.25",
    image: "/images/artesanales/frutos-amarillos-1.jpg",
    category: "Frutales"
  },
  {
    id: 7,
    name: "Frutos Rojos",
    description: "Refrescante helado con trozos de frutos rojos deliciosos",
    price: "4.25",
    image: "/images/artesanales/frutos-rojos-1.jpg",
    category: "Frutales"
  },
  {
    id: 8,
    name: "Guanabana",
    description: "Refrescante helado con trozos de guanabana",
    price: "4.25",
    image: "/images/artesanales/guanabana-1.jpg",
    category: "Frutales"
  },
  {
    id: 9,
    name: "Mango Biche",
    description: "Refrescante helado y delicioso con trozos de mango biche",
    price: "4.25",
    image: "/images/artesanales/mango-biche-4.jpg",
    category: "Frutales"
  },
  {
    id: 10,
    name: "Queso Arequipe",
    description: "Helado artesanal de mascarpone con arequipe",
    price: "4.25",
    image: "/images/artesanales/queso-arequipe-1.jpg",
    category: "Especialidades"
  },
  {
    id: 11,
    name: "Queso Mora",
    description: "Helado artesanal de mascarpone con dulce de mora",
    price: "4.25",
    image: "/images/artesanales/queso-mora-1.jpg",
    category: "Especialidades"
  },
  {
    id: 12,
    name: "Yogurt Amarenas",
    description: "Helado artesanal de yogurt con trozos y dulce de amarenas",
    price: "4.25",
    image: "/images/artesanales/yogurt-amarenas-1.jpg",
    category: "Especialidades"
  }
];

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  // Extraer categorías únicas para el filtro
  const categories = ['Todos', ...new Set(productData.map(product => product.category))];
  
  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === 'Todos' 
    ? productData 
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Nuestros Helados Artesanales</h1>
      
      {/* Filtros de categoría */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category 
                  ? 'bg-[#795c8c] text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productos;