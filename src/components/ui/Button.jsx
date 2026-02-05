import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-primary-light to-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5",
        secondary: "bg-white text-primary border border-primary/20 hover:border-primary hover:bg-primary/5 shadow-sm hover:shadow-md",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
