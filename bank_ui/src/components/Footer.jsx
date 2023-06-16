import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'
import styles from '../styles'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} flex-col sm:py-16 py-6`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className='flex-1 flex flex-col'>
          <img src={logo} alt="" className='w-[200px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} max-w-[370px] mt-4`}>A new way to make payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between items-start flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]' key={footerLink.key}>
              <h4 className='font-poppins font-semibold sm:text-[18px] text-[20px] text-white leading-[27px]'>{footerLink.title}</h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
        <div className='border-t-white border-t-[1px] w-full flex justify-between items-center md:flex-row flex-col pt-6'>
          <p class="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2022 HooBank. All Rights Reserved.</p>
          <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((item, index) => (
              <img key={item.id} src={item.icon} alt="" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Footer