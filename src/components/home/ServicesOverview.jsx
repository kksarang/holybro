import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServicesOverview = () => {
    return (
        <Section className="bg-white border-t border-slate-200">
            <style>{`
                .service-title {
                    transition: all 0.3s ease;
                }
                .group:hover .service-title {
                    background: linear-gradient(90deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-3 block">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-industrial-900 mb-6">
                        Providing World-Class
                    </h2>


                    <h2 className="text-3xl md:text-5xl font-bold text-industrial-900 mb-6">
                        <span style={{
                            background: 'linear-gradient(90deg, #2A2F74 10%, #005AA7 45%, #00A3D9 110%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Industrial Solutions</span>
                    </h2>

                    <p className="text-slate-600 text-lg font-light leading-relaxed">
                        We deliver a diverse portfolio of business solutions designed to meet the highest standards of quality, combining innovation with operational excellence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:border-secondary/30 hover:shadow-glow flex flex-col"
                        >
                            {/* Icon */}
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md"
                                style={{
                                    background: 'linear-gradient(90deg, #2A2F74 0%,#005AA7 45%, #00A3D9 100%)'
                                }}
                            >
                                <service.icon className="h-8 w-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="service-title text-xl font-bold text-industrial-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <div className="mt-auto pt-6 border-t border-slate-200">
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center text-sm font-semibold text-secondary group-hover:gap-2 transition-all"
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
                        <Button variant="primary" size="lg">
                            View All Services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default ServicesOverview;
