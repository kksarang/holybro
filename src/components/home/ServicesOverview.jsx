import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServicesOverview = () => {
    return (
        <section className="py-24 bg-background-alt relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
                        What We Do
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Providing World-Class <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Services</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto font-light">
                        We offer a diverse portfolio of business solutions designed to meet the highest standards of quality, combining innovation with reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bg-white rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 border-2 border-transparent ${service.borderColor} group cursor-pointer h-full flex flex-col overflow-hidden`}
                        >
                            <Link to={service.link || "/services"} className="flex flex-col h-full p-8 block text-left">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.shortDescription || service.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors flex items-center group-hover:translate-x-1 duration-300">
                                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/services">
                        <Button variant="outline" className="px-8 py-3 border-slate-200 text-slate-600 hover:border-primary hover:text-white">
                            View all services
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
