import { Link } from 'react-router-dom';

const HomeCTA = () => {
    return (
        <section className="bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                    Ready to Start Your Project?
                </h2>
                <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                    Contact us today to discuss your requirements and how Holy Bro International W.L.L can help you achieve your goals.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-900 border border-transparent font-bold rounded-md hover:bg-emerald-50 transition-colors shadow-lg"
                >
                    Get in Touch
                </Link>
            </div>
        </section>
    );
};

export default HomeCTA;
