import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Datos del producto Queso Bocadillo
  const product = {
    id: 1,
    name: "Queso-Bocadillo",
    price: "4.99",
    image: "/images/queso-bocadillo.png",
    warningLabels: [
      "/images/exceso-sodio.png",
      "/images/exceso-azucares.png"
    ],
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "452",
      totalFat: "19 g",
      saturatedFat: "3,0 g",
      transFat: "108 mg",
      totalCarbs: "68 g",
      dietaryFiber: "4,7 g",
      totalSugars: "23 g",
      addedSugars: "29 g",
      protein: "2,3 g",
      sodium: "63 mg",
      vitaminA: "45 μg ER",
      vitaminD: "0 μg",
      iron: "0 mg",
      calcium: "73 mg",
      zinc: "0,94 mg"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Encabezado del producto */}
        <h1 className="text-4xl font-bold text-left mb-6">{product.name}</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Columna izquierda: Imagen del producto */}
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-contain max-h-96"
            />
          </div>
          
          {/* Columna derecha: Etiquetas de advertencia y tabla nutricional */}
          <div className="md:w-1/2">
            {/* Etiquetas de advertencia */}
            <div className="flex justify-center mb-6">
              {product.warningLabels.map((label, index) => (
                <img 
                  key={index} 
                  src={label} 
                  alt="Etiqueta de advertencia" 
                  className="h-24 w-24 object-contain mx-2"
                />
              ))}
            </div>
            
            {/* Tabla nutricional */}
            <div className="border border-gray-300">
              <div className="text-center font-bold py-2 border-b border-gray-300 bg-gray-50">
                Información Nutricional
              </div>
              
              {/* Tamaño de porción */}
              <div className="border-b border-gray-300 p-2">
                <div>Tamaño de porción: {product.nutritionalInfo.servingSize}</div>
                <div>Número de porciones por envase: {product.nutritionalInfo.servingsPerContainer}</div>
              </div>
              
              {/* Encabezados de la tabla */}
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2 font-semibold"></div>
                <div className="p-2 font-semibold text-center border-l border-gray-300">Por 100 g</div>
                <div className="p-2 font-semibold text-center border-l border-gray-300">Por porción</div>
              </div>
              
              {/* Filas de la tabla */}
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2 font-bold">Energía (kcal)</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.calories}</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.calories}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Grasa total</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.totalFat}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.totalFat}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2 font-bold">Grasa saturada</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.saturatedFat}</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.saturatedFat}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2 font-bold">Grasa trans</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.transFat}</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.transFat}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Carbohidratos totales</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.totalCarbs}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.totalCarbs}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Fibra dietaria</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.dietaryFiber}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.dietaryFiber}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Azúcares totales</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.totalSugars}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.totalSugars}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2 font-bold">Azúcares añadidos</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.addedSugars}</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.addedSugars}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Proteína</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.protein}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.protein}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2 font-bold">Sodio</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.sodium}</div>
                <div className="p-2 text-center border-l border-gray-300 font-bold">{product.nutritionalInfo.sodium}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Vitamina A</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.vitaminA}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.vitaminA}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Vitamina D</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.vitaminD}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.vitaminD}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Hierro</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.iron}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.iron}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-gray-300">
                <div className="p-2">Calcio</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.calcium}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.calcium}</div>
              </div>
              
              <div className="grid grid-cols-3">
                <div className="p-2">Zinc</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.zinc}</div>
                <div className="p-2 text-center border-l border-gray-300">{product.nutritionalInfo.zinc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;