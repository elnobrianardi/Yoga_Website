import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'
import { leftVariants, rightVariants } from '../../variants'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <motion.div initial='offscreen' whileInView={"onscreen"} variants={leftVariants} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[65px] h-[65px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-[18px] text-white leading-[23.4px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{content}</p>
      </div>
    </motion.div>
  )
}

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <motion.div initial='offscreen' whileInView={"onscreen"} variants={rightVariants} className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Why you should, <br className='sm:block hidden' /> Go To Yoga.
        </h2>
        <p className={`${styles.paragraph} max-w-[475px] mt-5`}>
          Engaging in yoga offers a olistic approach to wellnes, encompassing both physical and mental benefits.
          Through a series of poses, stretches, and muscle strength. Its meditative aspects encourage mindfulness, 
          reducing stress and anxiety while promoting a sense of inner peace.
        </p>

        <Button styles={`mt-10`}/>
      </motion.div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard
              key={feature.id} {...feature} index={index}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Business