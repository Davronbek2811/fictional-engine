import React from 'react'
import fb from './assets/fb.png'
import insta from './assets/insta.png'
import twitter from './assets/twitter.png'
import yt from './assets/yt.png'
import logo from './assets/logo.svg'

function Footer() {
    return (
        <footer className="max-w-[1440px] mx-auto px-[50px] py-[80px] grid grid-cols-4 gap-10 border-t border-gray-200">

            <div>
                <div className="flex items-center gap-2 mb-4">
                    <img src={logo} alt="Foodi logo" className="w-[35px]" />
                </div>
                <p className="text-[#555] text-[16px] leading-relaxed mb-6">
                    Savor the artistry where every dish is a culinary masterpiece
                </p>

                <div className="flex items-center gap-4">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#39DB4A]/20 flex items-center justify-center">
                        <img src={fb} alt="Facebook" className="w-[18px]" />
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full bg-[#39DB4A]/20 flex items-center justify-center">
                        <img src={insta} alt="Instagram" className="w-[18px]" />
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full bg-[#39DB4A]/20 flex items-center justify-center">
                        <img src={twitter} alt="Twitter" className="w-[18px]" />
                    </div>
                    <div className="w-[38px] h-[38px] rounded-full bg-[#39DB4A]/20 flex items-center justify-center">
                        <img src={yt} alt="YouTube" className="w-[18px]" />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[18px] mb-4">Useful Links</h3>
                <ul className="space-y-2 text-[#555] text-[16px]">
                    <li>About us</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-[18px] mb-4">Main Menu</h3>
                <ul className="space-y-2 text-[#555] text-[16px]">
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Menus</li>
                    <li>Reservation</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-[18px] mb-4">Contact Us</h3>
                <ul className="space-y-2 text-[#555] text-[16px]">
                    <li>example@email.com</li>
                    <li>+64 958 248 966</li>
                    <li>Social media</li>
                </ul>
            </div>

            <div className="col-span-4 text-center text-[#777] text-[15px] mt-[60px]">
                Copyright © 2023 Dscode | All rights reserved
            </div>

        </footer>
    )
}

export default Footer
