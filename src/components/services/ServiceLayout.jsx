import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Gallery from '../ui/Gallery';

const ServiceLayout = ({
    title,
    description,
    heroImage,
    features = [],
    galleryImages = [],
    children
}) => {
    return (
        <div className="w-full">
            {/* Service Hero */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img loading="lazy" src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-industrial-900/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent"></div>
                </div>

                <Container className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="h-1 w-24 bg-secondary mx-auto rounded-full"
                    ></motion.div>
                </Container>
            </div>

            {/* Main Content */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-industrial-800">
                                Comprehensive <span className="text-primary">Solutions</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {description}
                            </p>
                            <div className="pt-4">
                                <Link to="/contact">
                                    <Button variant="primary">
                                        Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
                        >
                            <h3 className="text-xl font-bold text-industrial-800 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-secondary rounded-full mr-3"></span>
                                Key Capabilities
                            </h3>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Additional Content (Optional) */}
            {children}

            {/* Gallery Section */}
            {galleryImages.length > 0 && (
                <Gallery images={galleryImages} title="Project Showcase" />
            )}

            {/* CTA Section */}
            <Section className="bg-industrial-900 border-t border-white/10" dark>
                <Container>
                    <div className="bg-gradient-to-r from-primary-dark to-primary rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">Ready to start your project?</h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Contact our team today for specialized assistance and competitive quotations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button className="bg-white text-primary hover:bg-white/90 shadow-lg">
                                        Get in Touch
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button variant="outline" className="text-white border-white hover:bg-white/10">
                                        View Other Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default ServiceLayout;
