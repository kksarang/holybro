import { Factory, BrickWall, Car, HardHat, Building2, Truck } from 'lucide-react';

export const services = [
    {
        title: 'Oil & Gas Components & LNG Supply',
        description: 'Quality specialized Oil & Gas components and LNG equipment supporting energy and industrial infrastructure projects with high-quality, certified materials.',
        shortDescription: 'LNG Plant Components & Industrial Supplies',
        icon: Factory,
        features: ['Cryogenic Systems', 'LNG Equipment Supply', 'Quality Assurance', 'Automation Support'],
        color: 'bg-cyan-50 text-cyan-600',
        borderColor: 'hover:border-cyan-200',
        slug: 'oil-gas-lng'
    },
    {
        title: 'Building Materials Supply',
        description: 'High-grade materials engineered for strength and durability, including structural steel, concrete, and premium finishing solutions for all projects.',
        shortDescription: 'Building & Construction Materials',
        icon: BrickWall,
        features: ['Structural & Civil Materials', 'Finishing & Architectural', 'MEP Construction Materials', 'Project-Based Customization'],
        color: 'bg-amber-50 text-amber-600',
        borderColor: 'hover:border-amber-200',
        slug: 'building-materials'
    },
    {
        title: 'Transportation Services',
        description: 'Professional transportation solutions designed to ensure safe, timely, and efficient movement of goods across regions. Expertise in construction material and heavy equipment transport.',
        shortDescription: 'Safe & Efficient Logistics Solutions',
        icon: Truck,
        features: ['Material Transport', 'Heavy Equipment Logistics', 'Fleet Management', 'GPS Tracking'],
        color: 'bg-green-50 text-green-600',
        borderColor: 'hover:border-green-200',
        slug: 'transportation-services'
    },
    {
        title: 'Commercial Transportation',
        description: 'Business Logistics & Fleet Solutions. We offer commercial transportation services for corporate clients, government entities, and private sector businesses.',
        shortDescription: 'Corporate & Bulk Distribution Logistics',
        icon: Car,
        features: ['Staff Transportation', 'Long-term Fleet Rental', 'Bulk & Distribution', 'Retail Logistics'],
        color: 'bg-orange-50 text-orange-600',
        borderColor: 'hover:border-orange-200',
        slug: 'commercial-transportation'
    },
    {
        title: 'Construction & Contracting',
        description: 'Complete engineering and infrastructure solutions including civil works, building maintenance, AC/HVAC, and integrated MEP services.',
        shortDescription: 'Engineering & Infrastructure Solutions',
        icon: Building2,
        features: ['Civil & Infrastructure Works', 'Building Maintenance', 'AC Maintenance & HVAC', 'MEP Services'],
        color: 'bg-purple-50 text-purple-600',
        borderColor: 'hover:border-purple-200',
        slug: 'construction-contracting'
    },
    {
        title: 'Professional Manpower Supply',
        description: 'Strategic workforce solutions and customized manpower supply for engineering, industrial, and construction projects across Qatar.',
        shortDescription: 'Skilled Manpower Recruitment',
        icon: HardHat,
        features: ['Engineering Professionals', 'HSE & Safety Experts', 'Skilled Technical Workforce', 'Logistics Support'],
        color: 'bg-indigo-50 text-indigo-600',
        borderColor: 'hover:border-indigo-200',
        slug: 'manpower-supply'
    }
];
