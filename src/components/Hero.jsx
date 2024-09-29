import styles from "../style";
import { discount, women } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import { rightVariants, leftVariants, titleVariants } from '../../variants'

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
      initial='offscreen'
      whileInView={'onscreen'}
      variants={rightVariants}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">37%</span> Discount for{" "}
            <span className="text-white">Explore</span> the Fitness
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Effective <br className="sm:block hidden"/>{" "}
            <span className="text-gradient">Yoga</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Shape your Body.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Engaging in yoga offers a holistic approach to wellness, encompassing both physical and mental benefits. Through a series of poses, stretches, and musle strength.
        </p>
      </motion.div>
      <motion.div initial='offscreen' whileInView={'onscreen'} variants={leftVariants} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={women} alt="Yoga Women" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[0] w-[40%] h-[80%] rounded-full white__gradient bottom-40"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full blue__gradient bottom-20 right-20"></div>
      </motion.div>
      <motion.div initial='offscreen' whileInView={'onscreen'} variants={titleVariants} className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </motion.div>
    </section>
  );
};

export default Hero;
