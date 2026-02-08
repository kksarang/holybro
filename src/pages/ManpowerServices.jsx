import React from 'react';
import { motion } from 'framer-motion';
import {
    HardHat,
    Users,
    ClipboardCheck,
    Hammer,
    Factory,
    Building2,
    CheckCircle2,
    Phone,
    Shield
} from 'lucide-react';
import ManpowerHeroImage from '../assets/manpower-hero.png';
import ManpowerTeamImage from '../assets/manpower-team.png';
import ManpowerMeetingImage from '../assets/manpower-meeting.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const ManpowerServices = () => {
    const galleryImages = [
        { id: '1', src: ManpowerTeamImage, alt: 'Skilled Workforce', caption: 'Expert Teams for Every Sector' },
        { id: '2', src: ManpowerMeetingImage, alt: 'Project Management', caption: 'On-site Supervision & Safety' },
        { id: '3', src: ManpowerHeroImage, alt: 'Industrial Manpower', caption: 'Industrial & Construction Labor' },
    ];

    const features = [
        'Skilled & Unskilled Labor',
        'Civil, Mechanical & Electrical Teams',
        'White-Collar Staffing',
        'Visa & Payroll Management',
        'Rapid Mobilization',
        'Strict Safety Compliance'
    ];

    return (
        <ServiceLayout
            title="Manpower Supply Services"
            description="Connecting businesses with skilled, reliable, and compliant workforce solutions across all industrial sectors. We handle recruitment, visa processing, payroll, and accommodation, allowing you to focus on your core project goals."
            heroImage={ManpowerHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Why Choose Us */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Why Choose HolyBro Manpower?</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Vetted & Certified"
                            icon={ClipboardCheck}
                            desc="Every candidate undergoes rigorous screening, skill testing, and background checks."
                        />
                        <FeatureCard
                            title="Rapid Mobilization"
                            icon={Users}
                            desc="We can deploy teams within 24-48 hours for urgent project requirements."
                        />
                        <FeatureCard
                            title="Full Compliance"
                            icon={Shield}
                            desc="Fully compliant with Qatar Labor Law, WPS regulations, and safety standards."
                        />
                    </div>
                </Container>
            </Section>

            {/* Trades We Supply */}
            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-6">Trades We Supply</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                From general helpers to specialized technicians, we cover the full spectrum of project needs.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'General Helpers & Cleaners',
                                    'Masons, Carpenters, Steel Fixers',
                                    'Electricians & Plumbers',
                                    'Welders (3G, 4G, 6G) & Fabricators',
                                    'Painters & Decorators',
                                    'HVAC Technicians',
                                    'Riggers & Scaffolders',
                                    'Safety Officers & Foremen'
                                ].map((trade, i) => (
                                    <div key={i} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                                        <Hammer className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="font-medium text-slate-700">{trade}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                            <img src={ManpowerTeamImage} alt="Construction Team" className="relative rounded-2xl shadow-xl z-10 w-full" />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Industries Served */}
            <Section className="bg-industrial-900 text-white" dark>
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Industries We Serve
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { name: 'Construction', icon: Building2 },
                            { name: 'Oil & Gas', icon: Factory },
                            { name: 'Manufacturing', icon: Hammer },
                            { name: 'Logistics', icon: Users } // Reusing Users as placeholder for Logistics/people
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                                <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-medium text-xl text-gray-200">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

const FeatureCard = ({ title, icon: Icon, desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 text-center group">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
            <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-industrial-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

export default ManpowerServices;
