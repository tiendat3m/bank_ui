import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => {
    return (
        <div className={`${layout.section}`}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-6 ${styles.flexCenter}`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices 
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>
                <Button styles='mt-10'/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="" className='w-full h-full object-contain'/>
            </div>
        </div>
    )
}

export default CardDeal