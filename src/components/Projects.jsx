import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const tagColors = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
];

const ProjectCard = ({ index, name, category, description, tags, links }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        transitionSpeed={450}
        className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full h-full flex flex-col shadow-card"
      >
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="text-secondary text-[11px] uppercase tracking-wider whitespace-nowrap mt-2">
            {category}
          </p>
        </div>

        <p className="mt-3 text-secondary text-[14px] leading-[22px] flex-1">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag, tagIndex) => (
            <p
              className={`${
                tagColors[tagIndex % tagColors.length]
              } text-[13px]`}
              key={`${name}-${tag}`}
            >
              #{tag}
            </p>
          ))}
        </div>

        {links?.length ? (
          <div className="flex flex-row gap-2 justify-end mt-4">
            {links.map(({ link, icon, name: linkName }) => (
              <div className="black-gradient rounded-2xl" key={linkName}>
                <a href={link} target="_blank" rel="noreferrer">
                  <img
                    src={icon}
                    alt={linkName}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I build on the side</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Open source, research and things I built because I wanted them to
          exist. Mostly small language models, agents, and the infrastructure
          they need to be trusted in production.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
