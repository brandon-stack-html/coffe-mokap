import { useState } from 'react';
import { Product } from '../types';
import { MenuLayout } from '../components/templates/menuLayout';
import { ProductList } from '../components/organisms/productList';

export const Menu: React.FC = () => {
  const [category, setCategory] = useState<'coffee' | 'pastry' | 'breakfast'>('coffee');
  
  // Datos de ejemplo - en un caso real esto vendría de una API o base de datos
  const products: Product[] = [
    {
      id: 1,
      name: "Café Americano",
      description: "Café suave y aromático",
      price: 2.5,
      image: "/coffee-1.jpg",
      category: "coffee"
    },
    // ... más productos
  ];

  // Filtrar productos por categoría
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <MenuLayout
      sidebar={
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Categorías</h3>
          <div className="space-y-2">
            <button
              onClick={() => setCategory('coffee')}
              className={`w-full text-left px-4 py-2 rounded ${
                category === 'coffee' ? 'bg-amber-100 text-amber-800' : ''
              }`}
            >
              Café
            </button>
            <button
              onClick={() => setCategory('pastry')}
              className={`w-full text-left px-4 py-2 rounded ${
                category === 'pastry' ? 'bg-amber-100 text-amber-800' : ''
              }`}
            >
              Pastelería
            </button>
            <button
              onClick={() => setCategory('breakfast')}
              className={`w-full text-left px-4 py-2 rounded ${
                category === 'breakfast' ? 'bg-amber-100 text-amber-800' : ''
              }`}
            >
              Desayunos
            </button>
          </div>
        </div>
      }
    >
      <section>
        <h2 className="text-2xl font-bold mb-6">
          {category === 'coffee' ? 'Café' : 
           category === 'pastry' ? 'Pastelería' : 
           'Desayunos'}
        </h2>
        <ProductList 
          products={filteredProducts}
          onAddToCart={(product) => {
            console.log('Añadir al carrito:', product);
          }}
        />
      </section>
    </MenuLayout>
  );
};