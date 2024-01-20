import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { service } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title,image,description }) => (
  <Tilt className='xs:w-[350px] w-80 '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={image}
          className='w-full h-full object-cover rounded-2xl object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white text-[12px] font-bold text-center'>{description}</p>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {

  return (
<>
<motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to code repositories and live demos in it. 
        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
        {service.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>  )
}

export default SectionWrapper(About, "about");