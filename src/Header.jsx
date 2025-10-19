import React from 'react'
import logo from './assets/logo.svg'
import search from './assets/search.svg'
import cantact from './assets/contact.svg'

function Header() {
    return (
        <>
            <header className='max-w-[1440px] mx-auto mt-[30px]'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="" />
                    <ul className='flex items-center gap-4'>
                        <li><a className='text-[#272727] font-[Popins] text-[20px] hover:text-[#39DB4A] duration-500 ' href="#!">Home</a></li>
                        <li><a className='text-[#272727] font-[Popins] text-[20px] hover:text-[#39DB4A] duration-500 ' href="#!">Menu</a></li>
                        <li><a className='text-[#272727] font-[Popins] text-[20px] hover:text-[#39DB4A] duration-500 ' href="#!">Services</a></li>
                        <li><a className='text-[#272727] font-[Popins] text-[20px] hover:text-[#39DB4A] duration-500 ' href="#!">Offers</a></li>
                    </ul>

                    <div className='flex items-center gap-3'>
                        <img src={search} alt="" />
                        <button className='w-[179px] h-[60px] rounded-[40px] bg-[#39DB4A] flex items-center justify-center gap-3 text-white font-semibold cursor-pointer'><img src={cantact} alt="" />Contact</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header