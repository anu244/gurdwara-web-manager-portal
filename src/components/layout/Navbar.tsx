
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Calendar, Users, Heart, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
  { name: 'Events', path: '/events', icon: <Calendar className="h-4 w-4" /> },
  { name: 'Volunteers', path: '/volunteers', icon: <Users className="h-4 w-4" /> },
  { name: 'Donate', path: '/donate', icon: <DollarSign className="h-4 w-4" /> },
  { name: 'Services', path: '/services', icon: <Heart className="h-4 w-4" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-gurdwara-blue text-2xl font-playfair font-bold">Gurdwara</span>
          <span className="ml-1 text-gurdwara-orange text-2xl font-playfair font-bold">Management</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1 ${
                isActiveLink(link.path)
                  ? 'text-gurdwara-orange font-medium'
                  : 'text-gurdwara-blue hover:text-gurdwara-orange transition-colors'
              }`}
            >
              {link.icon}
              <span className="ml-1">{link.name}</span>
            </Link>
          ))}
          <Button variant="default" className="bg-gurdwara-orange hover:bg-amber-600">
            Login
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gurdwara-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center py-2 ${
                  isActiveLink(link.path)
                    ? 'text-gurdwara-orange font-medium'
                    : 'text-gurdwara-blue'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-gurdwara-orange hover:bg-amber-600">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
