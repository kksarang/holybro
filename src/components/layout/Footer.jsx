import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/logoone.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img src={logo} alt="Holy Bro International" className="h-16 w-auto object-contain" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            A leading conglomerate providing top-tier services in Real Estate, Trading, Contracting, and more. Committed to excellence and quality since 2008.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-slate-400 hover:text-accent transition-colors">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/services/lng-components" className="hover:text-primary transition-colors">LNG Plant Components</Link></li>
                            <li><Link to="/services/building-materials" className="hover:text-primary transition-colors">Building Materials Supply</Link></li>
                            <li><Link to="/services/limousine" className="hover:text-primary transition-colors">Limousine Services</Link></li>
                            <li><Link to="/services/manpower" className="hover:text-primary transition-colors">Professional Manpower</Link></li>
                            <li><Link to="/services/real-estate" className="hover:text-primary transition-colors">Real Estate Services</Link></li>
                            <li><Link to="/services/transportation" className="hover:text-primary transition-colors">Commercial Transportation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>
                                    Madhina Khalifa South, AL Rabeeha building 3,<br />
                                    2nd Floor -Room No.S4,<br />
                                    Al jazeera Al Arabia District -34,<br />
                                    Street No. 362 - Building no 128,<br />
                                    PO. Box .92807<br />
                                    State of Qatar
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>+974 55949262</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>info@holybrogroup.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Holy Bro International W.L.L. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
