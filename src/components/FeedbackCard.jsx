import { quotes } from '../assets'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../../variants'

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[375px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <motion.div initial='offscreen' whileInView={'onscreen'} variants={titleVariants}>
        <img src={quotes} alt="" className='w-[42.6px] h-[27.6px] object-contain'/>
      </motion.div>
      <motion.p initial='offscreen' whileInView={'onscreen'} variants={desVariants} className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>
        {content}
      </motion.p>
      <motion.div initial='offscreen' whileInView={'onscreen'} variants={tagVariants} className='flex flex-row'>
        <img src={img} alt="name" className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='text-dimWhite font-poppins font-normal text-[16px] leading-[24px]'>{title}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default FeedbackCard