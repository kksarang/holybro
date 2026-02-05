import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Target, Users, History } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Holybro Group</title>
                <meta name="description" content="Learn about Holybro Group's history, mission, and commitment to excellence in Qatar's business landscape." />
            </Helmet>

            {/* Page Header */}
            <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 opacity-50" />
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Holybro Group</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Building trust and delivering quality since 2008.
                    </p>
                </div>
            </div>

            {/* Company Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-base font-semibold text-primary tracking-wide uppercase mb-2">Who We Are</h2>
                            <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                                A Partner You Can Trust
                            </h3>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Established in 2008, Holybro Group has grown into one of Qatar's most diversified and respected business conglomerates. what started as a focused trading enterprise has expanded into a multi-faceted organization serving the Real Estate, Construction, Logistics, and Service sectors.
                                </p>
                                <p className="mt-4">
                                    Our success is built on a foundation of integrity, innovation, and an unwavering commitment to our clients. We believe in building long-term relationships by delivering consistent quality and value across all our business lines.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <div className="flex items-center text-accent mb-2">
                                        <History className="h-6 w-6 mr-2" />
                                        <span className="font-bold text-2xl text-slate-900">15+</span>
                                    </div>
                                    <p className="text-sm text-slate-600">Years of Excellence</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <div className="flex items-center text-accent mb-2">
                                        <Users className="h-6 w-6 mr-2" />
                                        <span className="font-bold text-2xl text-slate-900">500+</span>
                                    </div>
                                    <p className="text-sm text-slate-600">Dedicated Employees</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Corporate Office"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            The principles that guide our decisions and define our culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To provide exceptional services and products that contribute to the sustainable growth of our customers and the community, driven by innovation and operational excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center"
                        >
                            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To be the preferred partner of choice in every sector we operate, recognized for our integrity, quality, and commitment to customer satisfaction.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center"
                        >
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
                            <ul className="text-slate-600 leading-relaxed space-y-2 text-sm">
                                <li>Integrity in all our dealings</li>
                                <li>Commitment to Quality</li>
                                <li>Teamwork & Respect</li>
                                <li>Customer First Approach</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <HomeCTA />
        </>
    );
};

export default About;
