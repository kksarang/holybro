import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeCTA from '../components/home/HomeCTA';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import ContactHeroImage from '../assets/home_optimized.webp';

const contactQuickInfo = [
    { icon: Phone, value: '+974 31023132', label: 'Call Us' },
    { icon: Mail, value: 'info@holybrogroup.com', label: 'Email Us' },
    { icon: MapPin, value: 'Doha, Qatar', label: 'Location' },
    { icon: Clock, value: 'Sat - Thu', label: '9AM - 7PM' },
];

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgScale = useTransform(scrollY, [0, 500], [1, 1.15]);
    const overlayOpacity = useTransform(scrollY, [0, 300], [0.6, 0.85]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: '', email: '', service: '', message: '' });
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Holybro Group</title>
                <meta name="description" content="Reach out to Holybro Group for your business needs. Contact us via phone, email, or visit our office in Doha, Qatar." />
            </Helmet>

            {/* ========== PREMIUM HERO SECTION ========== */}
            <div className="relative min-h-[550px] lg:h-[55vh] lg:min-h-[420px] flex items-end overflow-hidden">
                {/* Parallax Background Image */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ y: bgY, scale: bgScale }}
                >
                    <img loading="lazy" src={ContactHeroImage}
                        alt="Contact Holybro Group - Qatar"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Multi-layer overlays for depth */}
                <motion.div
                    className="absolute inset-0 z-[1]"
                    style={{ opacity: overlayOpacity }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/70 to-transparent" />
                </motion.div>
                <div className="absolute inset-0 z-[2] bg-gradient-to-r from-primary-dark/50 via-transparent to-primary/30" />

                {/* Decorative geometric accents */}
                <div className="absolute top-0 left-0 w-full h-1 z-[5] bg-gradient-to-r from-secondary via-accent-cyan to-secondary opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-px z-[5] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Main Content */}
                <Container className="relative z-10 pt-52 pb-12 lg:pt-24 lg:pb-12">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 text-sm text-white/60 mb-8"
                    >
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-white font-medium">Contact</span>
                    </motion.nav>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        {/* Left: Title & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-2xl"
                        >
                            {/* Accent line */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-[2px] w-10 bg-secondary rounded-full" />
                                <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
                                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Us</span>
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                                Have a project in mind? We'd love to hear from you. Reach out and let's build something great together.
                            </p>
                        </motion.div>

                        {/* Right: Quick contact info chips */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-6 lg:gap-8"
                        >
                            {contactQuickInfo.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                                    className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-secondary-light" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm leading-tight">{item.value}</div>
                                        <div className="text-slate-400 text-xs">{item.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </div>

            <Section className="bg-slate-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-industrial-900 mb-6">Get in Touch</h2>
                            <p className="text-slate-600 mb-8 max-w-md">
                                Fill out the form or reach out to us directly through our contact channels. Our team is ready to assist you.
                            </p>

                            <div className="space-y-8">
                                <ContactInfoBlock
                                    icon={MapPin}
                                    title="Visit Us"
                                    content={
                                        <>
                                            Madhina Khalifa South, AL Rabeeha building 3,<br />
                                            2nd Floor - Room No.S4,<br />
                                            Al jazeera Al Arabia District - 34,<br />
                                            Street No. 362 - Building no 128,<br />
                                            PO. Box 92807, State of Qatar
                                        </>
                                    }
                                />
                                <ContactInfoBlock
                                    icon={Phone}
                                    title="Call Us"
                                    content={
                                        <>
                                            <a href="tel:+97431023132" className="hover:text-accent-cyan transition-colors">+974 31023132</a>
                                        </>
                                    }
                                />
                                <ContactInfoBlock
                                    icon={Mail}
                                    title="Email Us"
                                    content={
                                        <a href="mailto:info@holybrogroup.com" className="hover:text-accent-cyan transition-colors">info@holybrogroup.com</a>
                                    }
                                />
                                <ContactInfoBlock
                                    icon={Phone}
                                    title="Sales Team"
                                    content={
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-industrial-900">Mob:</span>
                                                <a href="tel:+97431478899" className="hover:text-accent-cyan transition-colors">+974 31478899 (WhatsApp)</a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-industrial-900">Email:</span>
                                                <a href="mailto:russelvk@holybrogroupqatar.com" className="hover:text-accent-cyan transition-colors">russelvk@holybrogroupqatar.com</a>
                                            </div>
                                        </div>
                                    }
                                />
                                <ContactInfoBlock
                                    icon={Clock}
                                    title="Working Hours"
                                    content="Sat - Thu, 9:00 AM - 7:00 PM"
                                />
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner border border-slate-200">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.874465492723!2d51.4429712!3d25.2861068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                    className="border-0 absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-industrial-900 mb-6">Send a Message</h2>

                            {isSuccess ? (
                                <div className="bg-emerald-50 text-emerald-800 p-8 rounded-xl text-center border border-emerald-100">
                                    <CheckCircle className="h-16 w-16 mx-auto mb-4 text-emerald-500" />
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-emerald-700 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-sm font-semibold underline hover:text-emerald-900"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service Interest</label>
                                        <select
                                            name="service"
                                            id="service"
                                            required
                                            value={formState.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all"
                                        >
                                            <option value="" disabled>Select a service...</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Real Estate">Real Estate Services</option>
                                            <option value="Trading">Trading & Contracting</option>
                                            <option value="Transportation">Transportation & Logistics</option>
                                            <option value="Manpower">Manpower Supply</option>
                                            <option value="Limousine">Limousine Services</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows="4"
                                            required
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center px-6 py-4 rounded-lg text-white font-bold text-lg transition-all shadow-md ${isSubmitting
                                            ? 'bg-slate-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-industrial-800 to-industrial-900 hover:from-accent-cyan hover:to-blue-600 hover:shadow-xl transform hover:-translate-y-1'
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </Container>
            </Section>

            <HomeCTA />
        </>
    );
};

const ContactInfoBlock = ({ icon: Icon, title, content }) => (
    <div className="flex items-start group">
        <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0 mr-4 shadow-sm group-hover:border-accent-cyan/50 group-hover:shadow-md transition-all">
            <Icon className="h-6 w-6 text-industrial-600 group-hover:text-accent-cyan transition-colors" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-industrial-900 mb-1">{title}</h3>
            <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                {content}
            </div>
        </div>
    </div>
);

export default Contact;
