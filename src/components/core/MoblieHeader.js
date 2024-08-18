import React, { useEffect, useState } from 'react';
import mobileMenu from "../medias/mobileMenu.png";
import { IoIosCloseCircleOutline } from 'react-icons/io';


const MoblieHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const paths = [
        { name: "Features", link: "#Features" },
        { name: "Pricing", link: "#Pricing" },
        { name: "Sign up", link: "#" },
    ];

    const openBurgerMenu = () => {
        setIsOpen(true);
    };

    const closeBurgerMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const links = document.querySelectorAll(".link");
        links.forEach((link, index) => {
            link.style.transitionDelay = `${index * 100}ms`;
        });
    }, [isOpen]);
    return (
        <div>
            <img onClick={isOpen ? closeBurgerMenu : openBurgerMenu} className='sm:hidden block cursor-pointer' src={mobileMenu} alt="" />
            <div
                id="dropdown"
                className={`fixed top-0 right-0 bg-gradient-to-b from-[#19344D] to-[#3B79B3] text-white max-w-96 w-full z-50 h-full transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="mb-4 px-6 pt-6 flex items-center justify-between">
                    <h2 className="opacity-60 text-[16px] uppercase">Navigation</h2>
                    <button
                        className='text-[35px]'
                        onClick={closeBurgerMenu}
                    >
                        <IoIosCloseCircleOutline />
                    </button>
                </div>

                <div className="h-[1px] w-full bg-gray-500 mt-4"></div>
                <div className="px-6" id="links" onClick={closeBurgerMenu}>
                    {paths.map((path, index) => (
                        <a
                            key={path.name}
                            href={path.link}
                            className={`py-4 text-2xl block transition-transform duration-500 ease-in-out link font-bold transform ${isOpen ? "translate-x-0" : "translate-x-full"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {path.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoblieHeader;