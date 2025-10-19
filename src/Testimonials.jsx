import React from 'react'
import chef from './assets/Chef.png'
import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'
import smile from './assets/smile.png'
import pizza from './assets/pizza.png'

function Testimonials() {
    return (
        <div className='max-w-[1440px] mx-auto flex justify-between items-center mt-[180px] px-[50px]'>

            <div className='relative'>
                <img src={chef} alt="Chef" className='w-[350px] absolute z-[1] bottom-0' />
                <div className='w-[402px] h-[362px] bg-[#4ADE80] rounded-t-[140px] rounded-b-[41px] flex z-[-1] items-end justify-center overflow-hidden relative'>
                    <span className='absolute bottom-[20px] left-[50%] translate-x-[-50%] bg-white px-4 py-2 rounded-full shadow-md text-[14px] font-medium flex items-center gap-2'>
                        Our Best Chef 😋
                    </span>
                </div>
                    <span className='absolute left-[-15px] top-[100px] text-[30px]'><img src={smile} alt="" /></span>
                    <span className='absolute right-[-15px] z-10 top-[150px] text-[30px]'><img src={pizza} alt="" /></span>
            </div>

            <div className='max-w-[550px]'>
                <p className='text-[#FF6868] text-[16px] tracking-[2px] font-semibold uppercase mb-2'>
                    Testimonials
                </p>
                <h1 className='text-[42px] font-bold leading-tight mb-6'>
                    What Our Customers <br /> Say About Us
                </h1>
                <p className='text-[#555] text-[18px] mb-8 leading-relaxed'>
                    “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience!
                    The attention to detail in presentation and service was impeccable.”
                </p>

                <div className='flex items-center gap-4'>
                    <div className='flex -space-x-3'>
                        <img src={user1} alt="user1" className='w-[45px] h-[45px] rounded-full border-2 border-white' />
                        <img src={user2} alt="user2" className='w-[45px] h-[45px] rounded-full border-2 border-white' />
                        <img src={user3} alt="user3" className='w-[45px] h-[45px] rounded-full border-2 border-white' />
                    </div>
                    <div>
                        <h3 className='font-bold text-[18px]'>Customer Feedback</h3>
                        <p className='text-[#555] text-[16px] flex items-center gap-2'>
                            ⭐ 4.9 <span className='text-[#777]'>(18.6k Reviews)</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
