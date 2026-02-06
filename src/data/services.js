import { Factory, BrickWall, Car, HardHat, Building2, Truck } from 'lucide-react';

export const services = [
    {
        title: 'LNG Plant Components',
        description: 'Supply of high-quality LNG plant–related components, including industrial equipment, fittings, valves, and specialized infrastructure materials.',
        shortDescription: 'LNG Plant Components & Industrial Supplies',
        icon: Factory,
        features: ['Industrial Equipment', 'Valves & Fittings', 'Specialized Infrastructure', 'Safety Standards'],
        color: 'bg-cyan-50 text-cyan-600',
        borderColor: 'hover:border-cyan-200',
        link: '/services/lng-components'
    },
    {
        title: 'Building Materials Supply',
        description: 'Comprehensive range of construction and building materials such as cement, steel, aggregates, and finishing materials for all project types.',
        shortDescription: 'Building & Construction Materials',
        icon: BrickWall,
        features: ['Cement & Steel', 'Finishing Materials', 'Aggregates', 'Commercial & Residential'],
        color: 'bg-amber-50 text-amber-600',
        borderColor: 'hover:border-amber-200',
        link: '/services/building-materials'
    },
    {
        title: 'Limousine Services',
        description: 'Premium limousine and luxury transportation services for corporate clients, VIPs, airport transfers, and executive travel.',
        shortDescription: 'Luxury Limousine Services',
        icon: Car,
        features: ['VIP Transfers', 'Corporate Travel', 'Luxury Fleet', 'Chauffeur Service'],
        color: 'bg-purple-50 text-purple-600',
        borderColor: 'hover:border-purple-200',
        link: '/services/limousine'
    },
    {
        title: 'Professional Manpower',
        description: 'Reliable supply of skilled and semi-skilled manpower for industries including construction, oil & gas, logistics, and facilities management.',
        shortDescription: 'Skilled & Professional Manpower Supply',
        icon: HardHat,
        features: ['Skilled Labor', 'Oil & Gas Specialists', 'Logistics Staff', 'Facilities Management'],
        color: 'bg-indigo-50 text-indigo-600',
        borderColor: 'hover:border-indigo-200',
        link: '/services/manpower'
    },
    {
        title: 'Real Estate Services',
        description: 'End-to-end real estate solutions covering property development, buying, selling, leasing, and investment consulting.',
        shortDescription: 'Real Estate Development & Management',
        icon: Building2,
        features: ['Property Development', 'Sales & Leasing', 'Investment Consulting', 'Asset Management'],
        color: 'bg-emerald-50 text-emerald-600',
        borderColor: 'hover:border-emerald-200',
        link: '/services/real-estate'
    },
    {
        title: 'Commercial Transportation',
        description: 'End-to-end commercial transportation and logistics solutions, including fleet services, cargo movement, and industrial logistics.',
        shortDescription: 'Commercial Transportation & Logistics',
        icon: Truck,
        features: ['Fleet Services', 'Cargo Movement', 'Industrial Logistics', 'Material Transport'],
        color: 'bg-slate-50 text-slate-600',
        borderColor: 'hover:border-slate-200',
        link: '/services/transportation'
    }
];
