import { motion } from "framer-motion";

import { styles } from "../styles";

import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.section} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
        <span className="hash-span" id={idName}></span>
      </motion.section>
    );
  };

export default SectionWrapper;