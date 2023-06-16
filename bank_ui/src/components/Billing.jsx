import React from 'react'
import styles, {layout} from '../styles'
import { bill, apple, google } from '../assets'
const Billing = () => {
    return (
        <section id='product' className={`${layout.sectionReverse}`}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="" className='w-[100%] h-[100%] relative z-10'/>
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-6 ${styles.flexCenter}`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices 
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={apple} alt="" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
                    <img src={google} alt="" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
                </div>
            </div>
        </section>
    )
}

export default Billing
