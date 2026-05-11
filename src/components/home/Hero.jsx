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

    return (
        <section
            id="home"
            className="hero-container relative aspect-video w-full overflow-hidden pt-0"
        >
            {/* Full 16:9 image (asset is 2560×1440) — contain keeps entire photo visible on all breakpoints */}
            <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y }}>
                <img
                    src={heroBg}
                    alt="Holy Bro Group — Qatar industrial and transportation services"
                    width={2560}
                    height={1440}
                    decoding="async"
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-contain object-center"
                />
            </motion.div>

            <div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-black/15 to-transparent md:from-transparent md:via-transparent md:to-transparent"
                aria-hidden
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-end px-4 pb-6 pt-16 sm:px-6 md:justify-center md:pb-0 md:pt-0 lg:px-8">
                <div className="container mx-auto flex w-full max-w-4xl flex-col md:mx-0 md:max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="w-full md:translate-y-8"
                    >
                        <div className="hero-tagline-container mb-3 hidden items-center gap-2 md:mb-6 md:flex md:gap-3">
                            <div className="h-0.5 w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] md:w-12" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-black drop-shadow-md sm:text-xs md:text-base md:tracking-[0.2em]">
                                Providing Sustainable Development
                            </span>
                        </div>

                        <h1 className="mb-4 text-lg font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl">
                            HOLY BRO <br />
                            <span className="mt-1 block pl-8 text-white sm:pl-20 md:pl-32 lg:pl-48">
                                GROUP W.L.L
                            </span>
                        </h1>

                        <div className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:gap-4">
                            <Link
                                to="/services"
                                className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:bg-primary sm:w-auto md:px-8 md:py-3.5 md:text-lg"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore Services
                                    <ArrowRight className="ml-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                            </Link>

                            <Link
                                to="/contact"
                                className="get-in-touch-hero flex w-full items-center justify-center rounded-lg border border-slate-300 bg-slate-900/40 px-6 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-secondary hover:bg-secondary/60 sm:w-auto md:px-8 md:py-3.5 md:text-lg"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute bottom-10 left-0 z-20 hidden w-full flex-col items-center md:flex"
            >
                <ScrollLink to="about" smooth={true} duration={800} offset={-80} className="pointer-events-auto">
                    <div className="flex flex-col items-center gap-3 group">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white opacity-90 transition-opacity group-hover:opacity-100">
                            Scroll Down
                        </span>
                        <div className="relative">
                            <div className="absolute inset-0 scale-150 rounded-full bg-secondary/20 blur-xl transition-all group-hover:bg-secondary/40" />
                            <div className="relative rounded-full border border-white/30 bg-gradient-to-br from-secondary to-primary p-3 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-white/60">
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
