import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroBg from '../../assets/home_optimized.webp';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Hero Background Image from assets

    return (
        <section id="home" className="relative w-full aspect-video overflow-hidden flex items-center pt-0 md:pt-0 hero-container">
            {/* 1. Hero Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full z-0"
                style={{ y }}
            >
                <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat hero-image-inner w-full h-full"
                    style={{
                        backgroundImage: `url('${heroBg}')`,
                        backgroundPosition: 'center'
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
                    className="max-w-4xl w-full"
                >
                    {/* Tagline */}
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="h-0.5 w-6 md:w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        <span className="text-white font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] sm:text-xs md:text-base uppercase shadow-black drop-shadow-md">
                            Providing Sustainable Development
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg leading-tight uppercase">
                        HOLY BRO <br />
                        <span className="text-white block mt-1">
                            INTERNATIONAL W.L.L
                        </span>
                    </h1>

                    {/* Subheading */}
                    {/* <p className="text-lg md:text-2xl text-slate-200 max-w-2xl mb-10 font-light leading-relaxed border-l-4 border-secondary pl-6 backdrop-blur-sm bg-industrial-950/10 py-2 rounded-r-lg">
                        Delivering reliable industrial, construction, manpower, and transportation solutions across Qatar.
                    </p> */}

                    {/* Call-To-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:max-w-md">
                        <Link
                            to="/services"
                            className="group relative w-full sm:w-auto px-8 py-3.5 md:py-4 bg-secondary hover:bg-primary text-white rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 font-bold text-base md:text-lg flex items-center justify-center overflow-hidden shadow-lg shadow-blue-900/20"
                        >
                            <span className="relative z-10 flex items-center">
                                Explore Services
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>

                        <Link
                            to="/contact"
                            className="get-in-touch-hero w-full sm:w-auto px-8 py-3.5 md:py-4 border border-slate-300 bg-slate-900/40 text-white rounded-lg hover:border-secondary hover:bg-secondary/60 transition-all duration-300 font-medium text-base md:text-lg flex items-center justify-center backdrop-blur-md cursor-pointer shadow-lg"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Only show scroll indicator on desktop for cleaner mobile view */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:flex absolute bottom-10 left-0 w-full z-20 flex-col items-center cursor-pointer pointer-events-none"
            >
                <ScrollLink to="about" smooth={true} duration={800} offset={-80} className="pointer-events-auto">
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
                            <div className="relative p-3 rounded-full bg-gradient-to-br from-secondary to-primary border border-white/30 shadow-2xl group-hover:border-white/60 group-hover:scale-110 transition-all duration-300">
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
