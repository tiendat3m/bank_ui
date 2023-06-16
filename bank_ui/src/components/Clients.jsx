import React from 'react'
import { clients } from '../constants'
import styles from '../styles'
const Clients = () => {
    return (
        <div className={`${styles.flexCenter} my-4`}>
            <div className='flex flex-wrap w-full justify-center items-center'>
                {clients.map((client) => (
                    <div className='flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]' key={client.id}>
                        <img src={client.logo} alt=""  className='w-[100px] sm:w-[192px] object-contain'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients