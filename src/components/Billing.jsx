import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import { motion, useScroll, useTransform } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../../variants'
import React, { useRef } from 'react'

const Billing = () => {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <section id='product' className={layout.sectionReverse}>
      <motion.div ref={ref} style={{scale}} className={layout.sectionImgReverse}>
        <img src={bill} alt="" className='w-[100%] h-[100%] relative z-[5]'/>

        {/* Gradient */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 botton-0 rounded-full pink__gradient"></div>
        {/* Gradient */}
      </motion.div>
      <div className={layout.sectionInfo}>
        <motion.h2 initial='offscreen' whileInView={'onscreen'} variants={titleVariants} className={styles.heading2}>
          How Yoga can <br className='sm:block hidden'/>change your life.
        </motion.h2>
        <motion.p initial='offscreen' whileInView={'onscreen'} variants={desVariants} className={`${styles.paragraph} max-w-[475px] mt-5`}>
          As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday Evening.
        </motion.p>
        <motion.div initial='offscreen' whileInView={'onscreen'} variants={tagVariants} className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apply" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google" className='w-[144.17px] h-[43.08px] object-contain cursor-pointer' />
        </motion.div>
      </div>
    </section>
  )
}

export default Billing