import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/newwlogo.webp';

const Footer = () => {
    return (
        <footer className="bg-primary text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img loading="lazy" src={logo} alt="Holy Bro Group" className="h-28 w-auto object-contain" style={{ filter: 'grayscale(1) invert(1) brightness(2)' }} />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            A leading conglomerate providing top-tier services in Industrial, Construction, Manpower, and Transportation. Committed to excellence and quality since 2008.
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
                            <li><Link to="/services/oil-gas-lng" className="hover:text-primary transition-colors">Oil & Gas Plant Components</Link></li>
                            <li><Link to="/services/building-materials" className="hover:text-primary transition-colors">Building Materials Supply</Link></li>
                            <li><Link to="/services/construction-contracting" className="hover:text-primary transition-colors">Construction & Contracting</Link></li>
                            <li><Link to="/services/manpower-supply" className="hover:text-primary transition-colors">Professional Manpower</Link></li>
                            <li><Link to="/services/transportation-services" className="hover:text-primary transition-colors">Transportation Services</Link></li>
                            <li><Link to="/services/commercial-transportation" className="hover:text-primary transition-colors">Commercial Transportation</Link></li>
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
                                <span>+974 31023132</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5 mr-3 text-primary shrink-0"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>+974 31478899</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                                <span>info@holybrogroupqatar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Holy Bro Group W.L.L. All rights reserved.</p>
                    <p className="mt-2">
                        Website Developed & Maintained by <a href="https://sarangrajan.in/kksystems" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">KK Systems</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
