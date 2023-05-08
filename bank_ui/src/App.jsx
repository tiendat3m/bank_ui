import React from 'react'
import styles from './styles'
import { Navbar, Bussiness, Stats, CardDeal, Testimonials, Clients, CTA, Footer, Hero, Billing} from './components'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness /> 
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients />
          <CTA /> 
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
