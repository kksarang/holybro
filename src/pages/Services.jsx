import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeCTA from '../components/home/HomeCTA';

import { services } from '../data/services';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Holybro Group</title>
                <meta name="description" content="Explore Holybro Group's diverse services including Real Estate, Trading, Contracting, Transportation, and Limousine services." />
            </Helmet>

            {/* Page Header */}
            <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 opacity-50" />
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Delivering excellence across multiple sectors with a commitment to quality and integrity.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20 bg-paper">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
                            >
                                {service.link ? (
                                    <Link to={service.link} className="flex flex-col flex-1 h-full block">
                                        <div className="p-8 flex-1">
                                            <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-emerald-100 transition-colors">
                                                <service.icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                                            <p className="text-slate-600 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="space-y-2 mt-auto">
                                                {service.features.map((feature) => (
                                                    <div key={feature} className="flex items-center text-sm text-slate-500">
                                                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-emerald-600 font-semibold text-sm">
                                                Learn More <span className="ml-1 text-lg">→</span>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="p-8 flex-1">
                                        <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 text-primary">
                                            <service.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="space-y-2">
                                            {service.features.map((feature) => (
                                                <div key={feature} className="flex items-center text-sm text-slate-500">
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <HomeCTA />
        </>
    );
};

export default Services;
