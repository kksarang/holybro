import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, link = "/services" }) => {
    return (
        <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
                <img loading="lazy" src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                    {description}
                </p>
                <Link
                    to={link}
                    className="inline-flex items-center text-primary font-semibold text-sm hover:text-emerald-400 transition-colors"
                >
                    Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
