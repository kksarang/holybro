import { motion } from 'framer-motion';
import { Construction, Mail, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ComingSoon = () => {
    return (
        <>
            <Helmet>
                <title>Coming Soon | HOLY BRO INTERNATIONAL W.L.L</title>
                <meta
                    name="description"
                    content="HOLY BRO INTERNATIONAL W.L.L website is coming soon. Stay tuned for our launch."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                </div>

                <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 backdrop-blur-sm border border-white/10">
                            <Construction className="w-8 h-8 text-blue-400" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-tight">
                            HOLY BRO INTERNATIONAL W.L.L
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
                            We are crafting something extraordinary.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-lg mx-auto"
                    >
                        <h2 className="text-2xl font-semibold mb-4">Cooking Our Website</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Our new digital presence is under construction. We are working hard to bring you an exceptional experience. Launching very soon.
                        </p>

                        <a
                            href="mailto:info@holybro.qa" // Replace with actual email if known, or keep generic
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Contact Us</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </motion.div>

                    <motion.footer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-16 text-gray-500 text-sm"
                    >
                        &copy; {new Date().getFullYear()} HOLY BRO INTERNATIONAL W.L.L. All rights reserved.
                    </motion.footer>
                </div>
            </div>
        </>
    );
};

export default ComingSoon;
