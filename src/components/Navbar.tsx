
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogIn, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-display font-bold text-gray-900">CareerConnect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Find Jobs
            </Link>
            <Link to="/employers" className="text-gray-700 hover:text-blue-600 transition-colors">
              For Employers
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                to="/employers"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                For Employers
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <Button variant="outline" className="justify-center">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="justify-center bg-blue-600 hover:bg-blue-700">
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
