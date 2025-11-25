import { Link, useLocation } from 'react-router-dom';
import gplogo from '../assets/gnyan-pragya.png';
import gptext from '../assets/gp-text2.png';

export function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/academic-programs', label: 'Academic Programs' },
    { path: '/faculty', label: 'Our Team' },
    { path: '/placements', label: 'Placements' },
    { path: '/events', label: 'Events' },
    { path: '/careers', label: 'Careers' },
    { path: '/enquiry', label: 'Enquiry' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo and Caption */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={gplogo} alt="Gnyan Pragya" className="h-16 w-auto mix-blend-multiply" />
            <div className="hidden sm:block">
              <img src={gptext} alt="Gnyan Pragya" className="h-6 w-11 mix-blend-multiply" />
              <div className="text-sm text-gray-200"><i>Bridging Academia and Industry</i></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1 flex-wrap justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md transition-colors text-sm whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-black'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Caption */}
        <div className="sm:hidden mt-1">
          <div className="text-sm text-gray-700">Bridging Academia and Industry</div>
        </div>
      </div>
    </header>
  );
}