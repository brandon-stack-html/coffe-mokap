import { Product } from "../../types";
import { Text } from "../atoms/text";
import { MenuItem } from "../molecules/menuItem";

interface MenuSectionProps {
    title: string;
    items: Product[];
  }
  
  export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
    return (
      <section className="py-8">
        <Text variant="h2" className="mb-6">{title}</Text>
        <div className="space-y-4">
          {items.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>
    );
  };