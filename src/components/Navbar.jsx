import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import logo from '../assets/logoone.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    // All pages currently use a dark hero/banner section, so we always want white text when transparent
    const isDarkHero = true;

    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        const base = "text-sm font-medium transition-colors";

        if (isScrolled) {
            return `${base} hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-slate-600'}`;
        }

        // Not scrolled (transparent bg) on Dark Hero
        if (isDarkHero) {
            return `${base} hover:text-secondary ${isActive ? 'text-white font-bold' : 'text-white'}`;
        }

        return `${base} hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-slate-600'}`;
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-soft' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <img
                            src={logo}
                            alt="Holy Bro International"
                            className="h-16 w-600 object-contain transition-all duration-300"
                            style={{ filter: !isScrolled && isDarkHero ? 'brightness(0) invert(1)' : 'none' }}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={getLinkClass(link.path)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <Button
                                variant="primary"
                                className="px-8 py-2.5 text-sm shadow-lg"
                                style={{
                                    background: '#ffffff',
                                    border: 'none'
                                }}
                            >
                                <span style={{
                                    background: 'linear-gradient( #2A2F74 50%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Get Quote
                                </span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${!isScrolled && isDarkHero ? 'text-white hover:text-secondary' : 'text-slate-600 hover:text-primary'} transition-colors`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full shadow-xl text-slate-900">
                    <div className="px-6 pt-4 pb-8 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname === link.path
                                    ? 'bg-primary/5 text-primary'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link to="/contact" className="block w-full">
                                <Button variant="primary" className="w-full justify-center">
                                    Get Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
