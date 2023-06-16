import React from 'react'
import { quotes } from '../assets'
const Feedback = ({content, img, name, title}) => {
    return (
        <div className='flex justify-between flex-col px-10 py-12 rounded-md max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt="" className='w-[42px] h-[27px object-contain]'/>
            <p className='font-poppins font-normal text-[18px] text-white leading-[32px] my-10'>{content}</p>
            <div className='flex flex-row w-full items-center gap-4'>
                <img src={img} alt="" className='w-[48px] h-[48px] rounded-full object-contain'/>
                <div className='flex flex-col'>
                    <h4 className='font-poppins font-semibold text-[20px] text-white leading-[32px] '>{name}</h4>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback
