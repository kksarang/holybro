import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import logo from '../../assets/logoone.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);

        setServicesOpen(false);
    }, [location]);

    const serviceGroups = [
        {
            title: "Industrial & Energy",
            items: [
                { name: "LNG Plant Components", path: "/services/oil-gas-lng" },
                { name: "Building Materials", path: "/services/building-materials" },
            ]
        },
        {
            title: "Workforce & Mobility",
            items: [
                { name: "Manpower Supply", path: "/services/manpower-supply" },
                { name: "Commercial Transportation", path: "/services/commercial-transportation" },
            ]
        },
        {
            title: "Engineering & Freight",
            items: [
                { name: "Construction & Contracting", path: "/services/construction-contracting" },
                { name: "Transportation Services", path: "/services/passenger-transportation" },
            ]
        }
    ];

    // Strict Navbar Background Rules
    // Default: rgba(11, 60, 93, 0.75) -> bg-primary/75
    // Scrolled: #0B3C5D -> bg-primary
    const navBackground = scrolled
        ? 'bg-primary shadow-lg'
        : 'bg-primary/75 backdrop-blur-md';

    // Text Color Rules (Strict: Always White)
    const linkBaseClass = "text-sm font-medium transition-colors text-white hover:text-white/80";
    const activeLinkClass = "text-white font-bold border-b-2 border-secondary pb-1";

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink
                            to="/"
                            className="flex items-center gap-1 py-1"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img
                                src={logo}
                                alt="Holy Bro International"
                                className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
                            />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : linkBaseClass}>
                            Home
                        </NavLink>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button className={`flex items-center focus:outline-none ${servicesOpen || location.pathname.includes('/services') ? activeLinkClass : linkBaseClass}`}>
                                Services <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-industrial-800 border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-8"
                                    >
                                        <div className="col-span-1 space-y-6">
                                            {serviceGroups.slice(0, 2).map((group, idx) => (
                                                <div key={idx}>
                                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">
                                                        {group.title}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {group.items.map((item) => (
                                                            <li key={item.path}>
                                                                <NavLink
                                                                    to={item.path}
                                                                    className="block text-sm text-gray-300 hover:text-secondary hover:translate-x-1 transition-all"
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-span-1 space-y-6">
                                            {serviceGroups.slice(2).map((group, idx) => (
                                                <div key={idx}>
                                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">
                                                        {group.title}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {group.items.map((item) => (
                                                            <li key={item.path}>
                                                                <NavLink
                                                                    to={item.path}
                                                                    className="block text-sm text-gray-300 hover:text-secondary hover:translate-x-1 transition-all"
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}

                                            {/* Featured Callout */}
                                            <div className="mt-6 bg-gradient-to-br from-primary-dark to-primary p-4 rounded-lg">
                                                <h4 className="text-white font-bold mb-1">Need specialized help?</h4>
                                                <p className="text-xs text-blue-100 mb-3">Our consultants are ready to assist you.</p>
                                                <NavLink to="/contact" className="text-xs font-bold text-white underline decoration-white/50 hover:decoration-white">
                                                    Contact Support &rarr;
                                                </NavLink>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : linkBaseClass}>
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkClass : linkBaseClass}>
                            Contact
                        </NavLink>

                        <NavLink to="/contact">
                            <Button variant="primary" className="px-5 py-2 text-sm shadow-glow">
                                Get Quote
                            </Button>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-secondary focus:outline-none p-2"
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
                        className="lg:hidden bg-industrial-900 border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            <NavLink to="/" className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">
                                Home
                            </NavLink>
                            <div className="px-3 py-2">
                                <div className="font-semibold text-slate-400 text-sm mb-2 uppercase">Services</div>
                                {serviceGroups.map((group) => (
                                    <div key={group.title} className="mb-4 pl-2 border-l border-white/10">
                                        <h4 className="text-xs font-bold text-primary-light mb-2">{group.title}</h4>
                                        {group.items.map((item) => (
                                            <NavLink
                                                key={item.path}
                                                to={item.path}
                                                className="block py-1.5 text-sm text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <NavLink to="/about" className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">
                                About Us
                            </NavLink>
                            <NavLink to="/contact" className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">
                                Contact
                            </NavLink>
                            <div className="pt-4 px-3">
                                <NavLink
                                    to="/contact"
                                    className="w-full block text-center bg-primary text-white px-5 py-3 rounded-md text-base font-medium hover:bg-primary-dark transition-colors shadow-glow"
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
