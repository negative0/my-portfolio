import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_9iujgfe",
        "template_0objobq",
        formRef.current,
        "BURNzmYHYIgI6CZ3o"
      )
      .then(
        (result) => {
          setLoading(false);
          setFormState({
            from_name: "",
            from_email: "",
            message: "",
          });
          alert("Message sent successfully!");
        },
        (error) => {
          setLoading(false);
          alert(error.text);
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Lets talk about your next project
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary text-[12px]">Name</span>
            <input
              type="text"
              name="from_name"
              value={formState.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="mt-2 p-4 bg-tertiary rounded-2xl placeholder:secondary outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary text-[12px]">Your Email</span>
            <input
              type="email"
              name="from_email"
              value={formState.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="mt-2 p-4 bg-tertiary rounded-2xl placeholder:secondary outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary text-[12px]">Message</span>
            <textarea
              rows="5"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="mt-2 p-4 bg-tertiary rounded-2xl placeholder:secondary outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
