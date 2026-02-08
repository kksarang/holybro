import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

            {/* Header */}
            <div className="bg-industrial-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-industrial-900 via-slate-800 to-industrial-900 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you.
                    </p>
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
                                            <a href="tel:+97455949262" className="hover:text-accent-cyan transition-colors">+974 55949262</a>
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
                                    icon={Clock}
                                    title="Working Hours"
                                    content="Mon - Sat, 8:00 AM - 6:00 PM"
                                />
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner border border-slate-200">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.874465492723!2d51.4429712!3d25.2861068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
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
