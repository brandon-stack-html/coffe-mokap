import { Button } from "../components/atoms/button";
import { Text } from "../components/atoms/text";
import { ProductList } from "../components/organisms/productList";
import { MainLayout } from "../components/templates/mainLayout";
import { Product } from "../types"; 


const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Café Americano",
    description: "Café negro recién hecho con agua caliente",
    price: 2.50,
    image: "/assets/americano.jpg",
    category: "coffee"
  },
  {
    id: 2,
    name: "Croissant Clásico",
    description: "Croissant francés tradicional horneado diariamente",
    price: 3.00,
    image: "/images/croissant.jpg",
    category: "pastry"
  },
  {
    id: 3,
    name: "Latte Caramelo",
    description: "Espresso con leche vaporizada y jarabe de caramelo",
    price: 4.50,
    image: "/images/caramel-latte.jpg",
    category: "coffee"
  }
];

export const Home: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    console.log('Producto agregado:', product);
  };

  return (
    <MainLayout>
      <div className="relative h-[500px]">
        <img
          src="/hero-image.jpg"
          alt="Café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <Text variant="h1" className="mb-4">
              Bienvenido a Café Delight
            </Text>
            <Text className="mb-6">
              Descubre el arte del café en cada taza
            </Text>
            <Button variant="primary" size="large">
              Ver Menú
            </Button>
          </div>
        </div>
      </div>
      
      <section className="container mx-auto px-4 py-16">
        <Text variant="h2" className="text-center mb-12">
          Nuestros Productos Destacados
        </Text>
        <ProductList 
          products={featuredProducts} 
          onAddToCart={handleAddToCart} 
        />
      </section>
    </MainLayout>
  );
};