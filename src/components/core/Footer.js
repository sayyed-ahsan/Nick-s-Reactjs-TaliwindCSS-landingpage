import React from 'react';
import websiteLogo from '../medias/website-footer-logo.png';

const Footer = () => {
    return (
        <div className='bg-[#313131] py-[40px] pt-[120px]'>
            <div className='text-center'>
                <div className='flex-col justify-center justify-center mb-[15px]'>
                    <img className='mx-auto' src={websiteLogo} alt="website Logo" />
                    <p className='text-[24px] font-bold text-white'>CustomSync</p>
                </div>
                <p className='text-[16px] text-[#BABABA]'>Sync your customization from Amazon to ShipStation and Veeqo</p>
                <div className='text-[16px] text-white font-bold flex gap-[16px]  justify-center justify-center my-[5px]'>
                    <a href="#">
                        About
                    </a>
                    <a href="#">
                        Contact
                    </a>
                    <a href="#">
                        Privacy Policy
                    </a>
                    <a href="#">
                        License
                    </a>
                    <a href="#">
                        Sign in
                    </a>
                </div>
                <p className='text-[#BABABA] text-[16px]'>© 2024 <span className='text-[#1387f2]'>BlueWare Labs</span>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;