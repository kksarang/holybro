import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Truck, Wrench, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const services = [
    {
        icon: Building2,
        title: 'Real Estate',
        description: 'Premier property management and real estate solutions tailored to your investment needs.',
        color: 'bg-blue-50 text-blue-600',
        borderColor: 'hover:border-blue-200'
    },
    {
        icon: TrendingUp,
        title: 'Trading & Contracting',
        description: 'High-quality construction materials and generic contracting services for large-scale projects.',
        color: 'bg-purple-50 text-primary',
        borderColor: 'hover:border-primary/20'
    },
    {
        icon: Truck,
        title: 'Limousine Services',
        description: 'Luxury transportation services ensuring comfort, style, and punctuality for every ride.',
        color: 'bg-orange-50 text-orange-600',
        borderColor: 'hover:border-orange-200'
    },
    {
        icon: Wrench,
        title: 'Maintenance',
        description: 'Comprehensive facility management and maintenance services for residential and commercial.',
        color: 'bg-teal-50 text-teal-600',
        borderColor: 'hover:border-teal-200'
    },
];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bg-white rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border-2 border-transparent ${service.borderColor} group cursor-pointer h-full flex flex-col`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            <div className="mt-auto">
                                <Link to="/services" className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors flex items-center group-hover:translate-x-1 duration-300">
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
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
