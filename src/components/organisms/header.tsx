import { Link } from 'react-router-dom';
import { NavLink } from '../../types';
import { NavItem } from '../molecules/navItem';

const navLinks: NavLink[] = [
  { title: 'Inicio', path: '/' },
  { title: 'Menú', path: '/menu' },
  { title: 'Contacto', path: '/contact' }
];

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-amber-700">
            Café Delight
          </Link>
          <nav className="flex gap-2">
            {navLinks.map(link => (
              <NavItem key={link.path} link={link} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
