import { desVariants } from "../../variants"
import styles from "../style"
import Button from "./Button"
import { motion } from "framer-motion"

const CTA = () => {
  return (
    <motion.section initial='offscreen' whileInView={'onscreen'} variants={desVariants} className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex-col">
        <h2 className={styles.heading2}>Prepare Yourself & Let's Explore</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The beauty of the world, we have many special offer specially for you.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </motion.section>
  )
}

export default CTA