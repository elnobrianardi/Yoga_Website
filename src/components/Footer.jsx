import styles from "../style"
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import { motion } from "framer-motion"
import { desVariants, rightVariants, tagVariants, titleVariants } from "../../variants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <motion.div initial='offscreen' whileInView={'onscreen'} variants={rightVariants} className="flex-[1] flex flex-col justify-start mr-10">
          <img src={logo} alt="Yoga" className="w-[265px] h-[72.1px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[315px]`}>A new way to make the payments easy, reliable and secure.</p>
        </motion.div>
      
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => 
          <motion.div initial='offscreen' whileInView={'onscreen'} variants={titleVariants} key={footerlink.title} className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            <h4>
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link,index) => 
                <li key={link.name} className={`font-poppins font-normal text-[16px] ledaing-[24px] text-dimWhite hover:text-violet-500 cursor-pointer ${index !== footerlink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <motion.p initial='offscreen' whileInView={'onscreen'} variants={desVariants} className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">Copyright @2024 Yoga. All Rights Reserved.</motion.p>
        <motion.div initial='offscreen' whileInView={'onscreen'} variants={tagVariants} className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${ index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} onClick={() => window.open(social.link)}></img>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Footer