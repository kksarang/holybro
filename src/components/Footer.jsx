import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logoone.webp';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-6 group">
                            <img loading="lazy" src={logo} alt="Holy Bro Group" className="h-16 w-auto object-contain mb-2" />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                            Building the future with excellence. Your trusted partner for Industrial, Construction, Manpower, and Transportation solutions in Qatar.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-800 font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-500 hover:text-primary transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-800 font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Oil & Gas Plant Components', path: '/services/oil-gas-lng' },
                                { name: 'Building Materials', path: '/services/building-materials' },
                                { name: 'Manpower Supply', path: '/services/manpower-supply' },
                                { name: 'Construction & Contracting', path: '/services/construction-contracting' },
                                { name: 'Transportation Services', path: '/services/transportation-services' },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link
                                        to={service.path}
                                        className="text-slate-500 hover:text-primary transition-colors text-sm font-medium"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-slate-800 font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-500 text-sm font-medium">
                                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                                <span>
                                    Madhina Khalifa South, AL Rabeeha building 3,<br />
                                    2nd Floor -Room No.S4,<br />
                                    Al jazeera Al Arabia District -34,<br />
                                    Street No. 362 - Building no 128,<br />
                                    PO. Box .92807<br />
                                    State of Qatar
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-500 text-sm font-medium">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+974 31023132</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-500 text-sm font-medium">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>info@holybrogroupqatar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-medium">
                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        <p>&copy; {new Date().getFullYear()} Holy Bro Group W.L.L. All rights reserved.</p>
                        <span className="hidden md:block text-slate-300">|</span>
                        <p className="mt-2 md:mt-0">
                            Developed by <a href="https://sarangrajan.in/kksystems" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">kksystems</a>
                        </p>
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
