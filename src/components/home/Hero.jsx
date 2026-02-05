import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <div className="relative bg-background min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-primary-light/20 to-accent-cyan/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-secondary-light/30 to-primary-light/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-4 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary to-primary-dark pb-2">
                            HOLY BRO GROUP
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Providing Sustainable Development
                    </p>
                    <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                        Holybro Group provides tailored digital solutions, real estate services, and premium contracting. We elevate your business with modern strategies and precision using the latest technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to="/services">
                            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg shadow-glow hover:shadow-glow-lg">
                                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg group">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Illustration / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full max-w-lg lg:max-w-none relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="Agency Team"
                            className="w-full h-auto object-cover"
                        />
                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4 animate-float">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <Play className="h-6 w-6 fill-current" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase">Growth</p>
                                <p className="text-lg font-bold text-slate-800">+250%</p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-10 -right-10 w-24 h-24 bg-accent-cyan/10 rounded-full blur-xl animate-pulse" />
                    <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
