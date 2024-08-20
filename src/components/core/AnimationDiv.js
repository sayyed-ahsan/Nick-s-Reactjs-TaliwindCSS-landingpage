import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedDiv = ({ duration = 0.8, delay = 0, children }) => {
    const controls = useAnimation();


    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration, delay } });

    }, [controls, duration, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;
