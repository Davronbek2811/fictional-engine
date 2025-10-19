import React from 'react'
import salad1 from './assets/Salad1.png'
import salad2 from './assets/Salad2.png'
import salad3 from './assets/Salad3.png'
import Love from './assets/Love.png'

function SpecialDishes() {
    return (
        <div className='max-w-[1440px] mx-auto mt-[60px]'>
            <p className='text-[#FF6868] text-[16px] font-semibold tracking-[2px]'>SPECIAL DISHES</p>
            <h1 className='text-[42px] font-bold leading-tight mt-2 mb-10'>
                Standout Dishes <br /> From Our Menu
            </h1>

            <div className="flex justify-between items-center gap-6">
                <div className="w-[320px] bg-white rounded-[30px] shadow-xl p-6 hover:-translate-y-2 duration-300">
                    <div className="relative flex justify-center">
                        <img src={salad1} alt="Fattoush Salad" className="w-[220px] h-[220px] object-cover rounded-full" />
                        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-2 text-[14px]"><img src={Love} alt="" /></div>
                    </div>
                    <h2 className="text-[22px] font-bold text-black text-center mt-4">Fattoush salad</h2>
                    <p className="text-[#777] text-center text-[16px] mb-4">Description of the item</p>
                    <div className="flex justify-between text-[18px] font-semibold">
                        <p className="text-[#FF6868]">$24.00</p>
                        <p className="text-[#FFD700] flex items-center gap-1">⭐ 4.9</p>
                    </div>
                </div>

                <div className="w-[320px] bg-white rounded-[30px] shadow-xl p-6 hover:-translate-y-2 duration-300">
                    <div className="relative flex justify-center">
                        <img src={salad2} alt="Vegetable Salad" className="w-[220px] h-[220px] object-cover rounded-full" />
                        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-2 text-[14px]"><img src={Love} alt="" /></div>
                    </div>
                    <h2 className="text-[22px] font-bold text-black text-center mt-4">Vegetable salad</h2>
                    <p className="text-[#777] text-center text-[16px] mb-4">Description of the item</p>
                    <div className="flex justify-between text-[18px] font-semibold">
                        <p className="text-[#FF6868]">$26.00</p>
                        <p className="text-[#FFD700] flex items-center gap-1">⭐ 4.6</p>
                    </div>
                </div>

                <div className="w-[320px] bg-white rounded-[30px] shadow-xl p-6 hover:-translate-y-2 duration-300">
                    <div className="relative flex justify-center">
                        <img src={salad3} alt="Egg Vegi Salad" className="w-[220px] h-[220px] object-cover rounded-full" />
                        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-2 text-[14px]"><img src={Love} alt="" /></div>
                    </div>
                    <h2 className="text-[22px] font-bold text-black text-center mt-4">Egg vegi salad</h2>
                    <p className="text-[#777] text-center text-[16px] mb-4">Description of the item</p>
                    <div className="flex justify-between text-[18px] font-semibold">
                        <p className="text-[#FF6868]">$23.00</p>
                        <p className="text-[#FFD700] flex items-center gap-1">⭐ 4.5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialDishes
