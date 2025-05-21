import { FC } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../lib/siteConfig';

interface NavItemProps {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const NavItem: FC<NavItemProps> = ({ title, href, subItems }) => {
  const hasSubItems = subItems && subItems.length > 0;
  
  return (
    <div className="relative group">
      <Link 
        to={href} 
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
      >
        {title}
      </Link>
      
      {hasSubItems && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {subItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        
        <nav className="flex items-center gap-6">
          {siteConfig.mainNav.map((item, index) => (
            <NavItem 
              key={index} 
              title={item.title} 
              href={item.href} 
              subItems={item.subItems} 
            />
          ))}
        </nav>
      </div>
    </header>
  );
};
