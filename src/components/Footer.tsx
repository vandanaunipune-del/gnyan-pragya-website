import { Link } from 'react-router-dom';
import logo from '../assets/gnyan-pragya.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-700 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <img src={logo} alt="Gnyan Pragya" className="h-16 w-auto mb-4" />
            <p className="text-blue-100">
              Official Industry Partner for Savitribai Phule Pune University and DES Pune University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academic-programs" className="text-blue-100 hover:text-white transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-blue-100 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/placements" className="text-blue-100 hover:text-white transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-100 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link to="/enquiry" className="hover:text-white transition-colors">
                  Enquiry Form
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Gnyan Pragya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
