import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { motion } from 'framer-motion';

const clients = [
    'Qatar Petroleum', 'Qatargas', 'Ashghal', 'Kahramaa',
    'Qatar Rail', 'Q-Chem', 'Qapco', 'Qatar Steel',
    'Woqod', 'Ooredoo', 'Vodafone', 'Sidra Medicine'
];

const Clients = () => {
    return (
        <Section className="bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-6">Trusted by Industry Leaders</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are proud to partner with some of the most prestigious organizations in Qatar and the region.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200 h-24 shadow-sm hover:shadow-md hover:border-accent-cyan/30 transition-all duration-300 cursor-pointer group"
                        >
                            {/* Placeholder for Logo - Styled as Text */}
                            <span className="font-bold text-slate-700 group-hover:text-industrial-900 text-center text-sm md:text-base leading-tight">
                                {client}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Clients;
