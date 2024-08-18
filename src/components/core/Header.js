import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import headerLogo from "../medias/header-logo.png";
import MoblieHeader from './MoblieHeader';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > lastScrollTop);
            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: isScrolled ? -100 : 0 }}
            transition={{ ease: "easeOut", duration: 0.26 }}
            className={`fixed top-0 left-0 right-0 z-50 bg-[#3B79B3] h-[66px]`}
        >
            <div className="flex justify-between items-center max-w-[1120px] mx-auto pt-[12px] px-[24px]">
                <img className='cursor-pointer' src={headerLogo} alt="" />
                <div className='sm:flex items-center gap-[24px] text-white hidden'>
                    <p className='text-[14px] font-semibold cursor-pointer'>Features</p>
                    <p className='text-[14px] font-semibold cursor-pointer'>Pricing</p>
                    <p className='text-[14px] font-semibold cursor-pointer'>Sign up</p>
                    <div className="cursor-pointer text-white text-nowrap bg-[#F29E13] max-w-[175px] px-[16px] py-[8px] rounded-lg font-bold">
                        Login
                    </div>
                </div>
                <div className='sm:hidden block'>
                    <MoblieHeader />
                </div>
            </div>
        </motion.div>
    );
};

export default Header;