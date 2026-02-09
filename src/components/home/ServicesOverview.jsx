import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServicesOverview = () => {
    return (
        <Section className="bg-industrial-900 border-t border-industrial-800" dark>
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-3 block">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Providing World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industrial Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                        We deliver a diverse portfolio of business solutions designed to meet the highest standards of quality, combining innovation with operational excellence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group relative bg-industrial-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-industrial-800 transition-all duration-300 hover:border-primary/30 hover:shadow-glow flex flex-col"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-industrial-700/50 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 border border-white/5 group-hover:border-primary/20">
                                <service.icon className="h-7 w-7" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center text-sm font-semibold text-white group-hover:text-secondary transition-colors"
                                >
                                    View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="mt-16 text-center">
                    <Link to="/services">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:border-white">
                            View All Services
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default ServicesOverview;
