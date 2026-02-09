import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { services } from '../../data/services';

const ServicesOverview = () => {
    return (
        <Section className="bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 border-t border-slate-200">
            <style>{`
                .service-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                
                .service-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1rem;
                    padding: 2px;
                    background: linear-gradient(135deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                
                .service-card:hover::before {
                    opacity: 1;
                }
                
                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -12px rgba(42, 47, 116, 0.15),
                                0 10px 20px -8px rgba(0, 163, 217, 0.1);
                }
                
                .service-icon {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                
                .service-card:hover .service-icon {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 8px 24px -4px rgba(42, 47, 116, 0.4);
                }
                
                .service-title {
                    transition: all 0.3s ease;
                    background: linear-gradient(90deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%);
                    background-size: 200% 100%;
                    background-position: 100% 0;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: #1e293b;
                    background-clip: text;
                }
                
                .service-card:hover .service-title {
                    background-position: 0 0;
                    -webkit-text-fill-color: transparent;
                }
                
                .view-details-link {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: gap 0.3s ease;
                }
                
                .service-card:hover .view-details-link {
                    gap: 0.75rem;
                }
                
                .gradient-button {
                    background: linear-gradient(90deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%);
                    background-size: 200% 100%;
                    background-position: 0 0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .gradient-button:hover {
                    background-position: 100% 0;
                    transform: scale(1.05);
                    box-shadow: 0 12px 28px -8px rgba(42, 47, 116, 0.4);
                }
                
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animated-gradient {
                    background: linear-gradient(90deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%);
                    background-size: 200% 100%;
                    animation: gradient-shift 3s ease infinite;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Providing World-Class{' '}
                        <span className="animated-gradient">

                        </span>
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                        {' '}
                        <span className="animated-gradient">
                            Industrial Solutions
                        </span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                        We deliver a diverse portfolio of business solutions designed to meet the highest standards of quality, combining innovation with operational excellence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="service-card group relative bg-white border border-slate-200 rounded-2xl p-10 flex flex-col"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="service-icon w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%)'
                                }}
                            >
                                <service.icon className="h-10 w-10 text-white" strokeWidth={2} />
                            </div>

                            {/* Content */}
                            <h3 className="service-title text-2xl font-bold mb-4">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <div className="mt-auto pt-6 border-t border-slate-200">
                                <Link
                                    to={service.link}
                                    className="view-details-link text-base font-bold"
                                    style={{
                                        background: 'linear-gradient(90deg, #2A2F74 0%, #005AA7 45%, #00A3D9 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    View Details
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" style={{ color: '#005AA7' }} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="mt-20 text-center">
                    <Link to="/services">
                        <button
                            className="gradient-button px-10 py-4 text-white text-lg font-bold rounded-xl border-none cursor-pointer shadow-lg"
                        >
                            <span className="inline-flex items-center gap-3">
                                View All Services
                                <ArrowRight className="h-6 w-6" />
                            </span>
                        </button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default ServicesOverview;
