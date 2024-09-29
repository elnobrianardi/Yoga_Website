import { leftVariants, rightVariants } from '../../variants'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"></div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <motion.h2 initial='offscreen' whileInView={'onscreen'} variants={rightVariants} className={styles.heading2}>What people are <br className='sm:block hidden'/>saying succesful stories</motion.h2>
      </div>
      <motion.div initial='offscreen' whileInView={'onscreen'} variants={leftVariants} className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[460px]`}>
          Everything you need to accept classes and gorw your health anywhere on the sessions.
        </p>
      </motion.div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => <FeedbackCard key={card.id} {...card}/>)
        }
      </div>
    </section>
  )
}

export default Testimonials