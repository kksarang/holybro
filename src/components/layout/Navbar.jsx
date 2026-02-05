import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react'; // Icons
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/" className="text-2xl font-bold text-primary tracking-tight uppercase">
                            Holybro<span className="text-accent">Group</span>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 hover:text-primary ${isActive ? 'text-primary' : 'text-slate-600'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/contact"
                            className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-emerald-800 transition-colors shadow-sm"
                        >
                            Get Quote
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary focus:outline-none p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-3 rounded-md text-base font-medium flex justify-between items-center ${isActive
                                            ? 'bg-emerald-50 text-primary'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                                        }`
                                    }
                                >
                                    {link.name}
                                    <ChevronRight className="h-4 w-4 opacity-50" />
                                </NavLink>
                            ))}
                            <div className="pt-4 px-3">
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full block text-center bg-primary text-white px-5 py-3 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors shadow-sm"
                                >
                                    Get Quote
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
