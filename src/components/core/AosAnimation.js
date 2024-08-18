import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosAnimation = ({
    children,
    animationType,
    duration,
    delay,
}) => {
    const [currentAnimationType, setCurrentAnimationType] = useState(animationType);

    useEffect(() => {
        // Initialize AOS with the provided duration and delay
        AOS.init({ duration, delay });

        // Function to handle screen width changes
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setCurrentAnimationType("fade-up"); // Set animation type for small screens
            } else {
                setCurrentAnimationType(animationType); // Set default animation type
            }
        };

        // Add event listener for resize
        window.addEventListener("resize", handleResize);

        // Set initial animation type based on screen width
        handleResize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [animationType, duration, delay]);

    return <div className="mx-auto" data-aos={currentAnimationType}>{children}</div>;
};

export default AosAnimation;
