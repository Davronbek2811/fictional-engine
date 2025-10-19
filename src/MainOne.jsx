import React from 'react'
import Elipse from './assets/Ellipse.svg'
import Poligon from './assets/Polygon.svg'
import Intersect from './assets/Intersect.svg'

function MainOne() {
    return (
        <section className="max-w-[1440px] mx-auto py-10 px-6">
            <div className="flex justify-between items-center relative">
                <div className="flex flex-col gap-6 max-w-[650px]">
                    <h1 className="text-[62px] font-bold text-black leading-tight">
                        Dive into Delights Of Delectable{' '}
                        <span className="text-[#39DB4A]">Food</span>
                    </h1>

                    <p className="text-[#4A4A4A] text-[26px] leading-snug">
                        Where Each Plate Weaves a Story of Culinary Mastery and Passionate
                        Craftsmanship
                    </p>

                    <div className="flex items-center gap-5 mt-6">
                        <button className="w-[179px] h-[60px] rounded-[40px] bg-[#39DB4A] flex items-center justify-center text-white font-semibold shadow-2xl shadow-[#8EFF9A80] transition-transform duration-200 hover:scale-105">
                            Order Now
                        </button>

                        <div className="relative flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                            <span className="text-lg font-medium text-[#4A4A4A]">
                                Watch Video
                            </span>
                            <img
                                src={Elipse}
                                alt="ellipse"
                                className="w-[60px] h-[60px]"
                            />
                            <img
                                src={Poligon}
                                alt="polygon"
                                className="absolute left-[133px] top-[10px] w-[22px] h-[22px]"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-[722px] h-[722px]">
                    <div className="absolute inset-0 bg-[#00ff1a] rounded-full "></div>
                    <img
                        className="absolute inset-0 w-full h-full object-contain"
                        src={Intersect}
                        alt="Intersect"
                    />
                </div>
            </div>
        </section>
    )
}

export default MainOne
