import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedText = ({ text, className = '', delay = 0, stagger = 0.05 }) => {
    const words = text.split(' ');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: i * stagger }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
        }
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: 'inline-block', marginRight: '6px' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;