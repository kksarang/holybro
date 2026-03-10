import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Briefcase, Globe, Shield, Award } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { services } from '../data/services';
import ServicesHeroImage from '../assets/home_optimized.webp';

const stats = [
    { icon: Briefcase, value: '6+', label: 'Service Lines' },
    { icon: Globe, value: '150+', label: 'Projects Delivered' },
    { icon: Shield, value: '100%', label: 'Quality Assured' },
    { icon: Award, value: '13+', label: 'Years Experience' },
];

const Services = () => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgScale = useTransform(scrollY, [0, 500], [1, 1.15]);
    const overlayOpacity = useTransform(scrollY, [0, 300], [0.6, 0.85]);

    return (
        <>
            <Helmet>
                <title>Our Services | Holybro Group</title>
                <meta name="description" content="Explore Holybro Group's diverse services including Industrial Supplies, Construction, Manpower, and Logistics in Qatar." />
            </Helmet>

            {/* ========== PREMIUM HERO SECTION ========== */}
            <div className="relative min-h-[550px] lg:h-[55vh] lg:min-h-[420px] flex items-end overflow-hidden">
                {/* Parallax Background Image */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ y: bgY, scale: bgScale }}
                >
                    <img loading="lazy" src={ServicesHeroImage}
                        alt="Holybro Group Services - Qatar Skyline"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Multi-layer overlays for depth */}
                <motion.div
                    className="absolute inset-0 z-[1]"
                    style={{ opacity: overlayOpacity }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/70 to-transparent" />
                </motion.div>
                <div className="absolute inset-0 z-[2] bg-gradient-to-r from-primary-dark/50 via-transparent to-primary/30" />

                {/* Decorative geometric accents */}
                <div className="absolute top-0 left-0 w-full h-1 z-[5] bg-gradient-to-r from-secondary via-accent-cyan to-secondary opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-px z-[5] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Main Content */}
                <Container className="relative z-10 pt-52 pb-12 lg:pt-24 lg:pb-12">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 text-sm text-white/60 mb-8"
                    >
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-white font-medium">Services</span>
                    </motion.nav>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        {/* Left: Title & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-2xl"
                        >
                            {/* Accent line */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-[2px] w-10 bg-secondary rounded-full" />
                                <span className="text-secondary font-semibold text-sm tracking-widest uppercase">What We Do</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Services</span>
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                                Delivering excellence across multiple sectors with a commitment to quality, integrity, and innovation across Qatar's growing landscape.
                            </p>
                        </motion.div>

                        {/* Right: Stats bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-6 lg:gap-8"
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                                    className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <stat.icon className="w-5 h-5 text-secondary-light" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                                        <div className="text-slate-400 text-xs">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
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
                                <Link to={service.slug ? `/services/${service.slug}` : '#'} className="block h-full focus:outline-none">
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

                                        {service.slug ? (
                                            <div className="inline-flex items-center text-industrial-600 font-semibold group-hover:text-accent-cyan transition-colors mt-auto">
                                                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        ) : (
                                            <span className="inline-flex items-center text-slate-400 font-medium cursor-not-allowed mt-auto">
                                                Coming Soon
                                            </span>
                                        )}
                                    </div>
                                </Link>
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
