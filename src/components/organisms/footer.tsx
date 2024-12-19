import { Text } from "../atoms/text";

export const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Text variant="h3" className="text-amber-500">Café Delight</Text>
              <Text className="mt-2 text-gray-400">
                Disfruta del mejor café en un ambiente acogedor
              </Text>
            </div>
            <div>
              <Text variant="h4" className="text-amber-500">Horario</Text>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>Lun - Vie: 7:00 - 20:00</li>
                <li>Sáb - Dom: 8:00 - 22:00</li>
              </ul>
            </div>
            <div>
              <Text variant="h4" className="text-amber-500">Contacto</Text>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>📞 (123) 456-7890</li>
                <li>📧 info@cafedelight.com</li>
                <li>📍 Calle Principal #123</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  