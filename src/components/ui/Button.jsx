import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', to, onClick, ...props }) => {
    const navigate = useNavigate();
    const baseStyles = "px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 tracking-wide";

    const variants = {
        primary: "bg-accent-teal hover:bg-teal-800 text-white shadow-md rounded-md",
        secondary: "bg-corporate-navy hover:bg-corporate-navy-light text-white shadow-md rounded-md",
        accent: "bg-accent-orange hover:bg-orange-700 text-white shadow-md rounded-md",
        outline: "border-2 border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white rounded-md",
        ghost: "text-corporate-navy hover:text-accent-teal hover:bg-surface-grey rounded-md",
    };

    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (to) navigate(to);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
