import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
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
            <div className="bg-slate-900 py-20 text-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>
            </div>

            <div className="py-20 bg-paper">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                            <p className="text-slate-600 mb-8">
                                Fill out the form or reach out to us directly through our contact channels. Our team is ready to assist you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-emerald-100 text-primary rounded-lg flex items-center justify-center shrink-0 mr-4">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">Visit Us</h3>
                                        <p className="text-slate-600">
                                            Madhina Khalifa South, AL Rabeeha building 3,<br />
                                            2nd Floor -Room No.S4,<br />
                                            Al jazeera Al Arabia District -34,<br />
                                            Street No. 362 - Building no 128,<br />
                                            PO. Box .92807<br />
                                            State of Qatar
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-emerald-100 text-primary rounded-lg flex items-center justify-center shrink-0 mr-4">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">Call Us</h3>
                                        <p className="text-slate-600">+974 55949262</p>
                                        <p className="text-slate-500 text-sm">Mon-Sat, 8am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-emerald-100 text-primary rounded-lg flex items-center justify-center shrink-0 mr-4">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">Email Us</h3>
                                        <p className="text-slate-600">info@holybrogroup.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.09709748366!2d51.4429712!3d25.2861068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>

                            {isSuccess ? (
                                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg text-center">
                                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                    <p>Thank you for contacting us. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 text-sm font-semibold underline hover:text-emerald-900"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            required
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                            placeholder="Inquiry about..."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows="4"
                                            required
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold transition-all shadow-md ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-emerald-800 hover:shadow-lg'
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
                </div>
            </div>
        </>
    );
};

export default Contact;
