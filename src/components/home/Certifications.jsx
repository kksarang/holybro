import { motion } from 'framer-motion';
import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { CheckCircle, ShieldCheck, Award, FileCheck, Globe } from 'lucide-react';

const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System', icon: FileCheck },
    { name: 'ISO 14001:2015', description: 'Environmental Management', icon: Globe },
    { name: 'ISO 45001:2018', description: 'Occupational Health & Safety', icon: ShieldCheck },
    { name: 'ICV Certified', description: 'In-Country Value Program', icon: Award },
];

const Certifications = () => {
    return (
        <Section className="bg-slate-50 border-t border-slate-200">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Certified Excellence</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are committed to the highest international standards of quality, safety, and environmental responsibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                <cert.icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-2">{cert.name}</h3>
                            <p className="text-slate-500 text-sm">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Certifications;
