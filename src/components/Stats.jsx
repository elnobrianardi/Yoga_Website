import styles from "../style"
import { stats } from '../constants'
import { motion } from "framer-motion"
import { titleVariants } from '../../variants'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <motion.div initial='offscreen' whileInView={'onscreen'} variants={titleVariants} key={stat.id} className={`flex-1 flex justify-start flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">{stat.value}</h4>
          <p className="font-poppins font-semibold xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">{stat.title}</p>
        </motion.div>
      ))}
    </section>
  )
}

export default Stats