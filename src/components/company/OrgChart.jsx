import { motion } from 'framer-motion';
import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { User, Users, Building2, Briefcase, Truck, HardHat } from 'lucide-react';

const OrgNode = ({ label, role, icon:  color = "blue", children }) => (
    <div className="flex flex-col items-center relative">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
                relative z-10 bg-white p-6 rounded-xl shadow-md border-t-4 border-${color}-600 
                w-64 text-center group hover:shadow-xl transition-all duration-300
            `}
        >
            <div className={`
                w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center 
                bg-${color}-50 text-${color}-600 group-hover:bg-${color}-600 group-hover:text-white transition-colors
            `}>
                <Icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900">{role}</h4>
            {label && <p className="text-sm text-slate-500 mt-1">{label}</p>}
        </motion.div>

        {children && (
            <div className="flex flex-col items-center w-full">
                {/* Vertical Line from Parent */}
                <div className="h-8 w-px bg-slate-300"></div>

                {/* Horizontal Line spanning children (if multiple) */}
                <div className="relative flex justify-center w-full gap-8 pt-8 border-t border-slate-300">
                    {/* 
                        Note: The border-t creates the horizontal connector. 
                        We need to hide the excess border for the first and last items if we want a perfect tree,
                        but a simple border-t on a wrapper works for a basic visual.
                        For a perfect tree, we'd need more complex CSS or SVG.
                        Let's stick to a simple vertical stack on mobile, horizontal on desktop.
                     */}
                    {children}
                </div>
            </div>
        )}
    </div>
);

const OrgChart = () => {
    return (
        <Section className="bg-slate-50 overflow-x-auto">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-industrial-900 mb-4">Organization Structure</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Our structured approach ensures efficient management and operational excellence across all divisions.
                    </p>
                </div>

                {/* Desktop View - Simplified Tree */}
                <div className="min-w-[800px] flex flex-col items-center">

                    {/* Level 1: Chairman */}
                    <div className="relative flex flex-col items-center md:mb-8">
                        <Node
                            role="Chairman"
                            icon={User}
                            color="industrial"
                        />
                        <div className="h-12 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* Level 2: Board / CEO */}
                    <div className="relative flex flex-col items-center md:mb-12">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-300"></div>
                        <Node
                            role="Board of Directors"
                            icon={Users}
                            color="industrial"
                        />
                        <div className="h-12 w-0.5 bg-slate-300"></div>
                        <Node
                            role="General Manager"
                            icon={Briefcase}
                            color="blue"
                        />
                        <div className="h-12 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* Level 3: Divisions - Horizontal Grid with Connector */}
                    <div className="relative w-full">
                        {/* Horizontal Connector Line */}
                        <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-slate-300"></div>

                        <div className="grid grid-cols-5 gap-4 pt-8">
                            <DivisionNode role="Real Estate" icon={Building2} />
                            <DivisionNode role="Trading" icon={Briefcase} />
                            <DivisionNode role="Contracting" icon={HardHat} />
                            <DivisionNode role="Transportation" icon={Truck} />
                            <DivisionNode role="Limousine" icon={User} />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

const Node = ({ role, label, icon:  color = "blue" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`
            relative z-10 bg-white p-6 rounded-xl shadow-md border-t-4 border-${color}-600 
            w-64 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300
        `}
    >
        <div className={`
            w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center 
            bg-${color}-50 text-${color}-600 group-hover:bg-${color}-600 group-hover:text-white transition-colors
        `}>
            <Icon className="w-6 h-6" />
        </div>
        <h4 className="font-bold text-slate-900">{role}</h4>
        {label && <p className="text-sm text-slate-500 mt-1">{label}</p>}
    </motion.div>
);

const DivisionNode = ({ role, icon: Icon }) => (
    <div className="flex flex-col items-center relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-300"></div>
        <Node role={role} icon={Icon} color="accent" />
    </div>
);

export default OrgChart;
