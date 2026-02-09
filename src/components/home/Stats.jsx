import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { motion } from 'framer-motion';

const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '100%', label: 'Safety Record' },
];

const Stats = () => {
    return (
        <Section className="bg-industrial-900 border-y border-white/10" dark>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="px-4"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2 font-mono">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 font-medium text-sm md:text-base tracking-wide uppercase">
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
