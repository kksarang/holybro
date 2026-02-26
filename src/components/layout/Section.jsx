import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from 'clsx';

const Section = ({
    children,
    className,
    id,
    dark = false, // If true, uses industrial dark background
    noPadding = false
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id={id}
            ref={ref}
            className={clsx(
                'relative overflow-hidden w-full',
                dark ? 'bg-industrial-900 text-white' : 'bg-background text-text-primary',
                !noPadding && 'py-16 md:py-24',
                className
            )}
        >
            {/* Optional subtle background pattern for dark mode */}
            {dark && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
