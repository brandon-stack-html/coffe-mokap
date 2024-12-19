import { Text } from "../atoms/text";

interface MenuItemProps {
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export const MenuItem: React.FC<MenuItemProps> = ({
    name,
    description,
    price,
    image
  }) => {
    return (
      <div className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex flex-col flex-1">
          <Text variant="h4">{name}</Text>
          <Text variant="caption">{description}</Text>
          <Text className="mt-auto font-semibold">${price.toFixed(2)}</Text>
        </div>
      </div>
    );
  };
  