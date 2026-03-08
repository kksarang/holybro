import { motion } from 'framer-motion';
import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';

const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '100%', label: 'Safety Record' },
];

const Stats = () => {
    return (
        <Section className="bg-white border-y border-slate-200">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center md:divide-x divide-slate-200">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="px-4"
                        >
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-mono"
                                style={{
                                    background: 'linear-gradient(90deg, #2A2F74 10%, #005AA7 45%, #00A3D9 110%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-slate-600 font-medium text-sm md:text-base tracking-wide uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Stats;
