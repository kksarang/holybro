import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, Target, Users, History, ChevronRight, Building2, Globe, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeCTA from '../components/home/HomeCTA';
import Container from '../components/layout/Container';
import AboutHeroImage from '../assets/home_optimized.jpg';

const aboutStats = [
    { icon: History, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Team Members' },
    { icon: Building2, value: '6+', label: 'Business Verticals' },
    { icon: Handshake, value: '200+', label: 'Trusted Clients' },
];

const About = () => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 500], [0, 150]);
    const bgScale = useTransform(scrollY, [0, 500], [1, 1.15]);
    const overlayOpacity = useTransform(scrollY, [0, 300], [0.6, 0.85]);

    return (
        <>
            <Helmet>
                <title>About Us | Holybro Group</title>
                <meta name="description" content="Learn about Holybro Group's history, mission, and commitment to excellence in Qatar's business landscape." />
            </Helmet>

            {/* ========== PREMIUM HERO SECTION ========== */}
            <div className="relative min-h-[550px] lg:h-[55vh] lg:min-h-[420px] flex items-end overflow-hidden">
                {/* Parallax Background Image */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ y: bgY, scale: bgScale }}
                >
                    <img
                        src={AboutHeroImage}
                        alt="About Holybro Group - Qatar"
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
                        <span className="text-white font-medium">About Us</span>
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
                                <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Who We Are</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Holy Bro International</span>
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                                Building trust and delivering quality since 2008 — your trusted partner for excellence across Qatar.
                            </p>
                        </motion.div>

                        {/* Right: Stats bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-6 lg:gap-8"
                        >
                            {aboutStats.map((stat, i) => (
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

            {/* ── Company Overview ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-bold text-primary uppercase tracking-widest">Company Overview</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
                                Qatar's Trusted Industrial &amp; Technical Solutions Partner
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                Holy Bro Group W.L.L is one of Qatar's fastest-growing companies, delivering advanced technical, industrial, and transportation solutions since 2010. Headquartered in Qatar, we specialize in LNG plant component procurement, building material supply, professional manpower services, and commercial transportation.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                With over 15 years of experience, we have built a strong reputation for reliability, quality, and operational excellence across multiple industries. Our integrated service model allows us to provide end-to-end solutions tailored to meet the evolving demands of Qatar's industrial and infrastructure sectors.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    { value: '15+', label: 'Years of Excellence' },
                                    { value: '200+', label: 'Trusted Clients' },
                                    { value: '500+', label: 'Workforce Deployed' },
                                    { value: '6+', label: 'Service Verticals' },
                                ].map((s) => (
                                    <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-primary">{s.value}</div>
                                        <div className="text-sm text-slate-600 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
                                alt="Holy Bro Group Qatar operations"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="text-sm font-semibold uppercase tracking-widest text-secondary-light">Est. 2010</div>
                                <div className="text-xl font-bold">Holy Bro Group W.L.L</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Our Journey ── */}
            <section className="py-20 bg-industrial-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-secondary uppercase tracking-widest">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">Our Journey</h2>
                        <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                year: '2010',
                                title: 'Humble Beginnings',
                                desc: "Founded in 2010 as a transportation service provider, Holy Bro Group W.L.L steadily expanded into trading, contracting, and professional manpower supply."
                            },
                            {
                                year: '2015',
                                title: 'Expansion Phase',
                                desc: 'Expanded into trading and contracting, diversifying our service portfolio to meet growing industrial demand across Qatar.'
                            },
                            {
                                year: '2020',
                                title: 'National Contribution',
                                desc: "Played a contributory role in infrastructure and transportation systems during the 2022 global sporting event hosted in Qatar."
                            },
                            {
                                year: 'Today',
                                title: 'Integrated Ecosystem',
                                desc: 'Today our services operate as a unified ecosystem — ensuring seamless coordination, efficiency, and value-driven solutions for our clients.'
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary font-black text-sm flex-shrink-0">
                                    {item.year}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Vision & Mission ── */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-primary uppercase tracking-widest">Looking Forward</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Our Vision &amp; Future Mission</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            As Qatar advances toward its National Vision 2030, Holy Bro Group W.L.L is committed to aligning its strategic growth with the country's ambitious development goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                color: 'bg-blue-50 text-blue-600',
                                icon: '🎯',
                                title: 'Our Mission',
                                content: 'Support LNG production and industrial expansion, strengthen infrastructure development, provide sustainable and efficient service solutions, and drive innovation in technical and industrial sectors.'
                            },
                            {
                                color: 'bg-amber-50 text-amber-600',
                                icon: '🔭',
                                title: 'Our Vision',
                                content: "To be a trusted long-term partner in shaping Qatar's industrial future through operational excellence and forward-thinking strategies."
                            },
                            {
                                color: 'bg-emerald-50 text-emerald-600',
                                icon: '🌱',
                                title: 'Qatar Vision 2030',
                                content: "We are committed to aligning our strategic growth with Qatar's ambitious development goals, contributing to the nation's industrial and infrastructure future."
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
                            >
                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Core Services ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-primary uppercase tracking-widest">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Our Core Services</h2>
                        <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
                    </div>
                    <div className="space-y-8">
                        {[
                            {
                                badge: 'LNG Supply Qatar',
                                title: 'LNG Plant Component Procurement & Supply',
                                desc: 'Holy Bro Group W.L.L specializes in the procurement and supply of high-quality LNG plant components that meet international safety and operational standards, supporting Ras Laffan operations and QatarEnergy projects.',
                                items: [
                                    'Sourcing specialized LNG plant equipment',
                                    'Procurement through a global supplier network',
                                    'Timely logistics and supply chain management',
                                    'Strict quality control and compliance assurance',
                                    'Technical consultation and operational support',
                                ],
                                accentClass: 'border-cyan-500 bg-cyan-50',
                                badgeClass: 'bg-cyan-100 text-cyan-700',
                            },
                            {
                                badge: 'Building Material Supplier Qatar',
                                title: 'Building Material Supply',
                                desc: 'We provide comprehensive building material procurement and supply solutions across Qatar for industrial, commercial, and infrastructure projects — backed by a strong supplier network for consistency and reliability.',
                                items: [
                                    'Premium construction material sourcing',
                                    'Reliable and timely delivery to project sites',
                                    'Competitive pricing and cost optimization',
                                    'Compliance with industry quality standards',
                                    'Customized solutions for project requirements',
                                ],
                                accentClass: 'border-amber-500 bg-amber-50',
                                badgeClass: 'bg-amber-100 text-amber-700',
                            },
                            {
                                badge: 'Manpower Supply Qatar',
                                title: 'Professional Manpower Supply',
                                desc: 'Holy Bro Group W.L.L delivers certified, skilled, and experienced manpower for industrial and construction projects across Qatar. Each professional is carefully selected, trained, and deployed to ensure safety, efficiency, and excellence.',
                                items: [
                                    'Civil, Mechanical, Electrical & Industrial Engineers',
                                    'HSE Engineers (Health, Safety & Environmental)',
                                    'Skilled Technicians (Mechanical & Electrical)',
                                    'Draughtsman Technicians',
                                    'Licensed Professional Drivers',
                                ],
                                accentClass: 'border-blue-500 bg-blue-50',
                                badgeClass: 'bg-blue-100 text-blue-700',
                            },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`border-l-4 rounded-2xl p-8 ${service.accentClass}`}
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="flex-1">
                                        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${service.badgeClass}`}>
                                            {service.badge}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                                    </div>
                                    <div className="lg:w-80">
                                        <ul className="space-y-3">
                                            {service.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-slate-700 text-sm">
                                                    <span className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-green-600 font-bold text-xs">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="py-20 bg-gradient-to-br from-industrial-900 via-slate-900 to-industrial-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-bold text-secondary uppercase tracking-widest">Our Advantage</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">Why Choose Holy Bro Group W.L.L?</h2>
                    <div className="h-1 w-16 bg-secondary mx-auto rounded-full mb-12" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {[
                            { icon: '🏆', title: '15+ Years of Industry Experience', desc: 'Proven expertise across Qatar\'s industrial and infrastructure sectors.' },
                            { icon: '🔗', title: 'Integrated Multi-Service Solutions', desc: 'One partner for LNG, building materials, manpower, and transportation.' },
                            { icon: '🌐', title: 'Strong Supplier & Industrial Network', desc: 'Global and local supplier partnerships ensuring quality and availability.' },
                            { icon: '🛡️', title: 'Commitment to Safety & Compliance', desc: 'Fully compliant with ASME, API, ISO 9001, 14001, and 45001 standards.' },
                            { icon: '📋', title: 'Proven National-Level Project Track Record', desc: 'Active contributor to Qatar\'s landmark infrastructure and energy projects.' },
                            { icon: '🌱', title: 'Dedicated to Qatar\'s Sustainable Development', desc: 'Proudly aligned with Qatar National Vision 2030 goals.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors"
                            >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <HomeCTA />
        </>
    );
};

export default About;
