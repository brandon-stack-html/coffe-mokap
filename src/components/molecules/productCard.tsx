import { Product } from '../../types';
import { Text } from '../atoms/text';
import { Button } from '../atoms/button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Text variant="h3">{product.name}</Text>
        <Text variant="caption" className="mt-1">{product.description}</Text>
        <div className="flex justify-between items-center mt-4">
          <Text variant="h4" className="text-amber-700">
            ${product.price.toFixed(2)}
          </Text>
          <Button 
            variant="primary" 
            size="small"
            onClick={() => onAddToCart(product)}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};