import { desVariants, leftVariants, tagVariants, titleVariants } from '../../variants'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 initial='offscreen' whileInView={'onscreen'} variants={titleVariants} className={styles.heading2}>Find a better customer <br className='sm:block hidden'/>in few easy steps.</motion.h2>
        <motion.p initial='offscreen' whileInView={'onscreen'} variants={desVariants} className={`${styles.paragraph} mx-w-[475px] mt-5`}>We always make our customer happy by providing as may choices as possible. We always make our customer happy by providing as may choices as possible</motion.p>
        <motion.div initial='offscreen' whileInView={'onscreen'} variants={tagVariants}><Button styles={`mt-10`}/></motion.div>
      </div>

      <motion.div initial='offscreen' whileInView={'onscreen'} variants={leftVariants} className={layout.sectionImg}>
        <img src={card} alt="Card" className='w-[100%] h-[100%]' />
      </motion.div>
    </section>
  )
}

export default CardDeal