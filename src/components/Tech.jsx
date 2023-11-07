import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechCard = ({ technology: { name, icon }, index }) => {
  return (
    <Tilt className="xs:w-[150px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.25 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[16px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What technologies have I used so far
        </p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col gap-10">
        {technologies.map((section, index) => (
          <div key={index} className="flex flex-col gap-10">
            <h3 className="text-[20px] font-bold text-center">
              {section.title}
            </h3>
            <div className="flex flex-row gap-10 justify-evenly xs:flex-wrap xs:gap-5">
              {section.items.map((technology, index) => (
                <div
                  className="hover:z-10 transition duration-700 ease-in-out"
                  key={technology.name}
                >
                  <TechCard technology={technology} index={index} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const TechSection = SectionWrapper(Tech, "tech");
export default TechSection;
