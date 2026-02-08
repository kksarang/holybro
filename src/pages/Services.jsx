import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { services } from '../data/services';
import BuildingHeroImage from '../assets/building-hero.png'; // Use a generic hero image

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Holybro Group</title>
                <meta name="description" content="Explore Holybro Group's diverse services including Real Estate, Trading, Contracting, Transportation, and Limousine services." />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={BuildingHeroImage}
                        alt="Holybro Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-industrial-900 via-industrial-900/90 to-industrial-800/80" />
                </div>

                <Container className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Delivering excellence across multiple sectors with a commitment to quality, integrity, and innovation.
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Services Grid */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-industrial-900 transition-colors duration-300">
                                        <service.icon className={`h-8 w-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-industrial-900 mb-4 group-hover:text-accent-cyan transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-sm text-slate-500">
                                                <CheckCircle2 className={`w-4 h-4 text-${service.color}-500 mr-2 mt-0.5 flex-shrink-0`} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {service.link ? (
                                        <Link
                                            to={service.link}
                                            className="inline-flex items-center text-industrial-600 font-semibold group-hover:text-accent-cyan transition-colors mt-auto"
                                        >
                                            Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex items-center text-slate-400 font-medium cursor-not-allowed mt-auto">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            <HomeCTA />
        </>
    );
};

export default Services;
