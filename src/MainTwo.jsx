import React from 'react'
import burger from './assets/burger.png'
import Dessert from './assets/Dessert.png'
import Limonad from './assets/Limonad.png'
import sendivich from './assets/sendivich.png'

function MainTwo() {
    return (
        <>
            <section className='max-w-[1440px] mx-auto'>
                <h3 className='text-[#FF6868] text-[20px] text-center'>Customer Favorites</h3>
                <h1 className='text-[32px] font-bold text-black leading-tight text-center'>Popular Categories</h1>

                <div className="flex justify-between items-center mt-[50px]">
                    <div className="w-[326px] h-[326px] rounded-[40px] shadow-2xl ">
                        <img src={burger} alt="" />
                        <h2 className='text-[30px] text-center text-black font-bold'>Main Dish</h2>
                        <p className='text-[#555555] text-center text-[22px]'>(86 dishes)</p>
                    </div>
                    <div className="w-[326px] h-[326px] rounded-[40px] shadow-2xl ">
                        <img src={sendivich} alt="" />
                        <h2 className='text-[30px] text-center text-black font-bold'>Main Dish</h2>
                        <p className='text-[#555555] text-center text-[22px]'>(86 dishes)</p>
                    </div>
                    <div className="w-[326px] h-[326px] rounded-[40px] shadow-2xl ">
                        <img src={Dessert} alt="" />
                        <h2 className='text-[30px] text-center text-black font-bold'>Main Dish</h2>
                        <p className='text-[#555555] text-center text-[22px]'>(86 dishes)</p>
                    </div>
                    <div className="w-[326px] h-[326px] rounded-[40px] shadow-2xl ">
                        <img src={Limonad} alt="" />
                        <h2 className='text-[30px] text-center text-black font-bold'>Main Dish</h2>
                        <p className='text-[#555555] text-center text-[22px]'>(86 dishes)</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainTwo