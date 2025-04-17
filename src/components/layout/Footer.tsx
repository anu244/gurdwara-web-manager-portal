
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gurdwara-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Gurdwara Management</h3>
            <p className="mb-4 text-gray-300">
              Serving the community through spiritual guidance, humanitarian services, and cultural preservation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gurdwara-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gurdwara-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gurdwara-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gurdwara-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gurdwara-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gurdwara-orange transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gurdwara-orange transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-gurdwara-orange transition-colors">Donations</Link>
              </li>
              <li>
                <Link to="/volunteers" className="hover:text-gurdwara-orange transition-colors">Volunteer</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#prayers" className="hover:text-gurdwara-orange transition-colors">Daily Prayers</Link>
              </li>
              <li>
                <Link to="/services#langar" className="hover:text-gurdwara-orange transition-colors">Langar Service</Link>
              </li>
              <li>
                <Link to="/services#akhand-path" className="hover:text-gurdwara-orange transition-colors">Akhand Path</Link>
              </li>
              <li>
                <Link to="/services#community" className="hover:text-gurdwara-orange transition-colors">Community Support</Link>
              </li>
              <li>
                <Link to="/services#education" className="hover:text-gurdwara-orange transition-colors">Religious Education</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Sikh Temple Road, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-gurdwara-orange transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@gurdwara.org" className="hover:text-gurdwara-orange transition-colors">
                  info@gurdwara.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Gurdwara Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
