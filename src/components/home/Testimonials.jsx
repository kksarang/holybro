import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ahmed Al-Mansoori",
        role: "Project Manager, Qatar Construction Co.",
        content: "Holybro Group has been an invaluable partner for our construction projects. Their building materials are top-notch, and their delivery is always on time. Highly recommended!",
        rating: 5,
        initials: "AM",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Sarah Williams",
        role: "Event Director, Doha Events",
        content: "We relied on Holybro for our luxury transportation needs during the international summit. The limousine service was impeccable—professional chauffeurs and pristine vehicles.",
        rating: 5,
        initials: "SW",
        color: "bg-purple-100 text-purple-600"
    },
    {
        name: "Khalid Hassan",
        role: "Operations Head, LNG Logistics",
        content: "Their expertise in LNG plant components and manpower supply saved us significant downtime. A truly professional team that understands the local market demands.",
        rating: 5,
        initials: "KH",
        color: "bg-emerald-100 text-emerald-600"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        What Our Clients <span className="text-primary">Say</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto font-light">
                        Trusted by leading businesses across Qatar for our reliability and excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                        >
                            <div className="flex gap-1 mb-5">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <div className="flex-grow mb-8">
                                <span
                                    className="text-5xl leading-none text-primary/20 font-serif select-none"
                                >
                                    &ldquo;
                                </span>
                                <p
                                    className="text-slate-700 mb-0 leading-relaxed text-[15px] font-serif italic"
                                >
                                    {testimonial.content}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
