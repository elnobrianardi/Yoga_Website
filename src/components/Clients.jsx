import styles from "../style"
import { clients } from "../constants"
import { motion } from "framer-motion"
import { titleVariants } from "../../variants"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => 
          <motion.div initial='offscreen' whileInView='onscreen' variants={titleVariants} key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[190px] min-w-[120px]`}>
              <img src={client.logo} alt="" className="sm:w-[190px] w-[100px] object-contain"/>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Clients