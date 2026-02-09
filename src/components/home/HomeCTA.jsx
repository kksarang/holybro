import { Link } from 'react-router-dom';
import ctaBg from '../../assets/hhhh.jpg';

const HomeCTA = () => {
    return (
        <section
            className="relative py-20 overflow-hidden"
            style={{
                backgroundImage: `url('${ctaBg}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Brand-colored overlay for readability */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'rgba(11, 60, 93, 0.84)'
                }}
            ></div>

            {/* Content above overlay */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                    Ready to Start Your Project?
                </h2>
                <p className="text-white text-lg mb-8 max-w-2xl mx-auto" style={{ opacity: 0.9 }}>
                    Contact us today to discuss your requirements and how Holy Bro International W.L.L can help you achieve your goals.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary border border-transparent font-semibold rounded-full hover:bg-secondary hover:text-white transition-all shadow-lg transform hover:scale-105"
                >
                    Get in Touch
                </Link>
            </div>

            {/* Mobile overlay enhancement */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .absolute.inset-0.z-10 {
                        background: rgba(11, 60, 93, 0.9) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default HomeCTA;
