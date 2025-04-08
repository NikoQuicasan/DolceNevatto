import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

// Datos de ejemplo para el catálogo de helados
const productData = [
  {
    id: 1,
    name: "Queso Bocadillo",
    description: "Helado artesanal de mascarpone con dulce de guayaba",
    price: "4.99",
    image: "/images/queso-bocadillo.png", // Asegúrate de guardar la imagen en la carpeta public/images
    category: "Especialidades"
  },
  {
    id: 2,
    name: "Fresa Silvestre",
    description: "Helado cremoso con trozos de fresas naturales",
    price: "4.50",
    image: "/images/placeholder.png",
    category: "Frutales"
  },
  {
    id: 3,
    name: "Chocolate Belga",
    description: "Intenso sabor a chocolate premium belga",
    price: "5.25",
    image: "/images/placeholder.png",
    category: "Chocolates"
  },
  {
    id: 4,
    name: "Pistacho Siciliano",
    description: "Elaborado con pistachos de Sicilia tostados",
    price: "5.99",
    image: "/images/placeholder.png",
    category: "Frutos Secos"
  },
  {
    id: 5,
    name: "Tiramisú",
    description: "Helado con auténtico sabor a tiramisú italiano",
    price: "5.50",
    image: "/images/placeholder.png",
    category: "Especialidades"
  },
  {
    id: 6,
    name: "Limón Siciliano",
    description: "Refrescante sorbete de limones sicilianos",
    price: "4.25",
    image: "/images/placeholder.png",
    category: "Sorbetes"
  }
];

const Catalog = () => {
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
                  ? 'bg-pink-500 text-white' 
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

export default Catalog;