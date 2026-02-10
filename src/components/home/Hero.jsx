import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroBg from '../../assets/home_optimized.jpg';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Hero Background Image from assets

    return (
        <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center">
            {/* 1. Hero Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full z-0"
                style={{ y }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{
                        backgroundImage: `url('${heroBg}')`,
                        backgroundPosition: 'center 20%' // Focus on upper part of buildings
                    }}
                ></div>
            </motion.div>

            {/* 2. Overlay Removed - Clean Background */}

            {/* 3. Content Container */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Tagline */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-0.5 w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        <span className="text-white font-bold tracking-[0.2em] text-sm md:text-base uppercase shadow-black drop-shadow-md">
                            Providing Sustainable Development
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
                        HOLY BRO <br />
                        <span className="text-white">
                            INTERNATIONAL W.L.L
                        </span>
                    </h1>

                    {/* Subheading */}
                    {/* <p className="text-lg md:text-2xl text-slate-200 max-w-2xl mb-10 font-light leading-relaxed border-l-4 border-secondary pl-6 backdrop-blur-sm bg-industrial-950/10 py-2 rounded-r-lg">
                        Delivering reliable industrial, construction, manpower, and transportation solutions across Qatar.
                    </p> */}

                    {/* Call-To-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            to="/services"
                            className="group relative px-8 py-4 bg-secondary hover:bg-primary text-white rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 font-bold text-lg flex items-center justify-center overflow-hidden shadow-lg shadow-blue-900/20"
                        >
                            <span className="relative z-10 flex items-center">
                                Explore Services
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>

                        <Link
                            to="/contact"
                            className="px-8 py-4 border border-slate-400 text-white rounded-lg hover:border-secondary hover:bg-secondary/10 transition-all duration-300 font-medium text-lg flex items-center justify-center backdrop-blur-sm cursor-pointer"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Enhanced & Stylish */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 15, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center cursor-pointer"
            >
                <ScrollLink to="about" smooth={true} duration={800} offset={-80}>
                    <div className="flex flex-col items-center gap-3 group">
                        {/* Animated Text */}
                        <span className="text-white font-semibold tracking-[0.25em] text-xs uppercase opacity-90 group-hover:opacity-100 transition-opacity">
                            Scroll Down
                        </span>

                        {/* Glowing Animated Icon */}
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-xl scale-150 group-hover:bg-secondary/40 transition-all"></div>

                            {/* Icon container */}
                            <div className="relative p-3 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-white/30 shadow-2xl group-hover:border-white/60 group-hover:scale-110 transition-all duration-300">
                                <ChevronDown className="h-6 w-6 text-white drop-shadow-lg" />
                            </div>
                        </div>
                    </div>
                </ScrollLink>
            </motion.div>
        </section>
    );
};

export default Hero;
