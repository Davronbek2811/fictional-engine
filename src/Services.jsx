import React from 'react'
import bowl from './assets/bowl.png'
import clock from './assets/clock.png'
import cart from './assets/cart.png'
import gift from './assets/gift.png'

function Services() {
    return (
        <section className="max-w-[1440px] mx-auto flex justify-between items-center px-[50px] py-[80px]">

            <div className="max-w-[520px]">
                <p className="text-[#FF6868] uppercase font-semibold tracking-[2px] text-[16px] mb-3">
                    Our Story & Services
                </p>
                <h1 className="text-[42px] font-bold leading-tight mb-6">
                    Our Culinary Journey <br /> And Services
                </h1>
                <p className="text-[#555555] text-[18px] leading-relaxed mb-8">
                    Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
                    blending culinary artistry with warm hospitality.
                </p>
                <button className="bg-[#39DB4A] text-white font-semibold text-[18px] px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Explore
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="w-[240px] h-[200px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center text-center p-4">
                    <img src={bowl} alt="Catering" className="w-[55px] h-[55px] mb-3" />
                    <h3 className="text-[#39DB4A] text-[20px] font-bold">Catering</h3>
                    <p className="text-[#555] text-[15px] mt-1">Delight your guests with our flavors and presentation</p>
                </div>

                <div className="w-[240px] h-[200px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center text-center p-4">
                    <img src={clock} alt="Fast Delivery" className="w-[55px] h-[55px] mb-3" />
                    <h3 className="text-[#39DB4A] text-[20px] font-bold">Fast Delivery</h3>
                    <p className="text-[#555] text-[15px] mt-1">We deliver your order promptly to your door</p>
                </div>

                <div className="w-[240px] h-[200px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center text-center p-4">
                    <img src={cart} alt="Online Ordering" className="w-[55px] h-[55px] mb-3" />
                    <h3 className="text-[#39DB4A] text-[20px] font-bold">Online Ordering</h3>
                    <p className="text-[#555] text-[15px] mt-1">Explore menu & order with ease using our Online Ordering</p>
                </div>

                <div className="w-[240px] h-[200px] bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center text-center p-4">
                    <img src={gift} alt="Gift Cards" className="w-[55px] h-[55px] mb-3" />
                    <h3 className="text-[#39DB4A] text-[20px] font-bold">Gift Cards</h3>
                    <p className="text-[#555] text-[15px] mt-1">Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>
            </div>
        </section>
    )
}

export default Services
