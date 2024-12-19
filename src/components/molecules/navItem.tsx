import { NavLink } from '../../types';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  link: NavLink;
}

export const NavItem: React.FC<NavItemProps> = ({ link }) => {
  const location = useLocation();
  const isActive = location.pathname === link.path;

  return (
    <Link
      to={link.path}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-amber-100 text-amber-800' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {link.title}
    </Link>
  );
};