import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importamos los mismos datos de productos que usamos en Catalog.jsx
// En una aplicación real, probablemente obtendrías estos datos de una API
const productData = [
  {
    id: 1,
    name: "Queso Bocadillo",
    description: "INGREDIENTES: Leche entera liquida higienizada, queso campesino semigraso semiduro (Leche, sal, cloruro de calcio, (estabilizante) y cuajo), bocadillo de guayaba (guayaba, azúcar, ácido cítrico (regulador de ph)), azúcar, crema de Leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466), sal yodada y fluorizada. Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/queso-bocadillo-1.jpg",
    category: "Especialidades",
    // Datos de información nutricional (puedes ajustar estos según necesites)
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
  },
  {
    id: 2,
    name: "Brownie",
    description: "INGREDIENTES: Leche entera liquida higienizada, Brownie (harina de trigo fortificada (hierro, tiamina, riboflavina, niacina, acido fólico), azúcar, margarina, cocoa, huevos, agua, sabor artificial a vainilla, leudante (polvo de hornear), bicarbonato de sodio), azúcar, crema de leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, trigo(gluten), huevo.  Manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/brownie-3.jpg",
    category: "Frutales",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "480",
      totalFat: "22 g",
      saturatedFat: "4,5 g",
      transFat: "95 mg",
      totalCarbs: "75 g",
      dietaryFiber: "3,2 g",
      totalSugars: "28 g",
      addedSugars: "32 g",
      protein: "3,1 g",
      sodium: "58 mg",
      vitaminA: "38 μg ER",
      vitaminD: "0 μg",
      iron: "1,2 mg",
      calcium: "65 mg",
      zinc: "0,85 mg"
    }
  },
  // Añadir la misma estructura de nutritionalInfo para los demás productos...
  {
    id: 3,
    name: "Chocolate",
    description: "INGREDIENTES: Leche entera liquida higienizada, azúcar, crema de leche, dextrosa, leche en polvo entera, cocoa(cacao22/24), estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/chocolate-1.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 4,
    name: "Coco",
    description: "INGREDIENTES: Leche entera liquida higienizada, coco, azúcar, crema de Leche, dextrosa, leche en polvo entera, yogurt en polvo (dextrosa, sabores naturales (yogurt), ácido cítrico acidificante, leche desnatada en polvo, proteína de leche), estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/coco-4.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 5,
    name: "Cookies",
    description: "INGREDIENTES: Leche entera liquida higienizada, galleta negra (Harina fortificada, (Harina de trigo, niacina, hierro, tiamina, riboflavina, ácido fólico), azúcar, grasa vegetal de palma, cocoa, (7.8%), azúcar invertido, agua, leudantes (bicarbonato de sodio, bicarbonato de amonio). Sal, emulsificantes, (Lecitina de soja, estearoil 2 lactilato de sodio) saborizante artificial), azúcar, crema de leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, trigo(gluten), soja, huevo, cebada, avena, almendras, nueces de árbol.  manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/cookies-4.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 6,
    name: "Frutos Amarillos",
    description: "INGREDIENTES: Leche entera liquida higienizada, salsa de frutos amarillos (maracuyá, mango y piña, azúcar, benzoato de sodio (conservante)), azúcar, crema de leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/frutos-amarillos-2.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 7,
    name: "Frutos Rojos",
    description: "INGREDIENTES: Un vibrante gelato elaborado con una cuidadosa selección de fresas, frambuesas, moras y cerezas. Cada cucharada ofrece el intenso sabor de los frutos rojos cosechados en su punto óptimo de maduración. La fusión entre la tradición italiana del gelato y la frescura de las frutas colombianas crea un postre con un hermoso color rojizo y un sabor intenso pero equilibrado.",
    image: "/images/artesanales/frutos-rojos-1.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 8,
    name: "Guanabana",
    description: "INGREDIENTES: Leche entera liquida higienizada, pulpa de guanábana, azúcar, crema de leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/guanabana-4.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 9,
    name: "Mango Biche",
    description: "INGREDIENTES: Fruta natural mango, agua, azúcar, zumo de limón, dextrosa, glucosa, sal yodada y fluorizada, maltodextrina, estabilizante (Mono y diglicéridos de ácidos grasos (INS-471), Goma CMC (INS-466), Goma Guar (INS-412), Goma Tara (INS 417), Carragenina (INS407)), mezcla de colorantes artificiales verde limón C11, contiene tartrazina. ",
    image: "/images/artesanales/mango-biche-5.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 10,
    name: "Queso Arequipe",
    description: "INGREDIENTES: Leche entera liquida higienizada, queso campesino semigraso semiduro (Leche, sal, cloruro de calcio,(estabilizante) y cuajo), arequipe (Leche entera higienizada, azúcar, suero concentrado, agua, crema de leche regulador de acidez,(bicarbonato de sodio), conservantes(sorbato de potasio, benzoato de sodio), enzima (lactasa), y antiespumante (polidimetilsiloxano), azúcar, crema de Leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466), sal yodada y fluorizada. Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "images/artesanales/queso-arequipe-3.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }, {
    id: 11,
    name: "Queso Mora",
    description: "INGREDIENTES: Leche entera liquida higienizada, queso campesino semigraso semiduro (Leche, sal, cloruro de calcio, (estabilizante) y cuajo), salsa de moras (mora, azúcar, benzoato de sodio (conservante), azúcar, crema de leche, crema de Leche, dextrosa, leche en polvo entera, estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466), sal yodada y fluorizada. Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/queso-mora-2.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  },
  {
    id: 12,
    name: "Yogurt Amarenas",
    description: "INGREDIENTES: Leche entera liquida higienizada, Variegato amarena (azúcar, jarabe de glucosa, agua, almidón modificado (E1422), acidificantes: E334, E330; espesantes: E440, E401; colorantes: E122, E129, E133; conservantes: E202; aroma), crema de Leche, dextrosa, leche en polvo entera, yogurt en polvo (dextrosa, sabores naturales (yogurt), ácido cítrico acidificante, leche desnatada en polvo, proteína de leche), estabilizante (Mono y diglicéridos de ácidos grasos E-471, goma guar E-412, Goma Xanthan E- 415, goma de Algarrobo E-410, goma de Celulosa E-466). Contiene leche, manufacturado en una planta que también procesa productos con maní.",
    image: "/images/artesanales/yogurt-amarenas-1.jpg",
    category: "Chocolates",
    nutritionalInfo: {
      servingSize: "1 Unidad (100 g)",
      servingsPerContainer: "1",
      calories: "520",
      totalFat: "25 g",
      saturatedFat: "6,0 g",
      transFat: "115 mg",
      totalCarbs: "72 g",
      dietaryFiber: "5,2 g",
      totalSugars: "30 g",
      addedSugars: "25 g",
      protein: "4,2 g",
      sodium: "70 mg",
      vitaminA: "40 μg ER",
      vitaminD: "0 μg",
      iron: "2,5 mg",
      calcium: "80 mg",
      zinc: "1,2 mg"
    }
  }
  // Añadir el resto de productos con su información nutricional...
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Buscar el producto con el ID que viene en los parámetros de la URL
    const foundProduct = productData.find(p => p.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  // Si no se encuentra el producto, mostrar mensaje
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <p>Lo sentimos, no pudimos encontrar el producto que buscas.</p>
        </div>
      </div>
    );
  }

  // Si se encuentra el producto, mostrar sus detalles
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Imagen del producto - Esta cambiará según el producto seleccionado */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-50 object-cover"
            />
          </div>

          {/* Información del producto */}
          <div className="md:w-1/2 p-6">
            {/* Título del producto - Este cambiará según el producto seleccionado */}
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mt-6">
              <div className="flex space-x-4">
                <img src="/minsalud/2.png" alt="Advertencia MinSalud 1" className="h-48 sm:h-60 md:h-36 lg:h-48" />

                {/* Solo mostrar el segundo sello para productos que no sean "Brownie" */}
                {product.name !== "Mango Biche" && (
                  <img src="/minsalud/5.png" alt="Advertencia MinSalud 2" className="h-48 sm:h-60 md:h-36 lg:h-48" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de información nutricional - Esta estructura se mantiene igual para todos */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Información Nutricional</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Tamaño de porción</td>
                  <td className="py-2">{product.nutritionalInfo.servingSize}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Porciones por envase</td>
                  <td className="py-2">{product.nutritionalInfo.servingsPerContainer}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-2 font-bold">Calorías</td>
                  <td className="py-2 font-bold">{product.nutritionalInfo.calories}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Grasa total</td>
                  <td className="py-2">{product.nutritionalInfo.totalFat}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pl-4">Grasa saturada</td>
                  <td className="py-2">{product.nutritionalInfo.saturatedFat}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pl-4">Grasas trans</td>
                  <td className="py-2">{product.nutritionalInfo.transFat}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Carbohidratos totales</td>
                  <td className="py-2">{product.nutritionalInfo.totalCarbs}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pl-4">Fibra dietética</td>
                  <td className="py-2">{product.nutritionalInfo.dietaryFiber}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pl-4">Azúcares totales</td>
                  <td className="py-2">{product.nutritionalInfo.totalSugars}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pl-4">Azúcares añadidos</td>
                  <td className="py-2">{product.nutritionalInfo.addedSugars}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Proteína</td>
                  <td className="py-2">{product.nutritionalInfo.protein}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Sodio</td>
                  <td className="py-2">{product.nutritionalInfo.sodium}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Vitamina A</td>
                  <td className="py-2">{product.nutritionalInfo.vitaminA}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Vitamina D</td>
                  <td className="py-2">{product.nutritionalInfo.vitaminD}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Hierro</td>
                  <td className="py-2">{product.nutritionalInfo.iron}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Calcio</td>
                  <td className="py-2">{product.nutritionalInfo.calcium}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Zinc</td>
                  <td className="py-2">{product.nutritionalInfo.zinc}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Aviso de advertencias sanitarias */}

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;