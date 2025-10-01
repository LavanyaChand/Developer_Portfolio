import { useEffect, useState } from "react";
import "./style.css";
import TextWriting from "../TextWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeText from "../FadeText";
import HideText from "../HideText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechCard({ item }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const delay = 0;        
  const stagger = 0.08;       
  const clientLen = item?.client?.length ?? 0;

  const handleComplete = () => setHasAnimated(true);

  useEffect(() => {
    if (inView && !hasAnimated) controls.start("visible");
  }, [inView, hasAnimated, controls]);

  const opacityVariants = {
    hidden: { opacity: 0, mixBlendMode: "color-dodge" },
    visible: { opacity: 1, mixBlendMode: "normal" },
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { type: "spring", stiffness: 20, duration: 2, delay },
    },
  };

  // Link animates after the last TextWriting letter
  const linkVariants = {
    hidden: { opacity: 0, y: 6, filter: "blur(2px)" },
    visible: (letters) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        delay: delay + letters * stagger, // sync with TextWriting
      },
    }),
  };

  return (
    <div ref={ref} className="workCard">
      <div className="workCard--head">
        <motion.h3 initial="hidden" animate={controls} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
          <TextWriting
            delay={delay}
            nocursor
            controls={controls}
            stagger={stagger}
            text={item.client}
          />
          <motion.a
            href={item.link}
            className="live-colour"
            target="_blank"
            variants={linkVariants}
            custom={clientLen}
            aria-label="Open project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon="fa-solid fa-link" />
          </motion.a>

          <motion.a
            href={item.github}
            className="live-colour"
            target="_blank"
            variants={linkVariants}
            custom={clientLen}
            aria-label="Open github"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </motion.a>
        </motion.h3>

        <h3>
          <TextWriting delay={delay} nocursor controls={controls} stagger={stagger} text={item.year} />
        </h3>
      </div>

      <motion.div initial="hidden" animate={controls} variants={lineVariants} className="workCard--line" />

      <div className="workCard--body">
        <motion.span
          initial="hidden"
          animate={controls}
          variants={opacityVariants}
          transition={{ duration: 2, delay: 0.5 }}
          onAnimationComplete={handleComplete}
        >
          <img src={item.img} alt="" />
        </motion.span>

        <h1>
          <HideText controls={controls} delay={delay}>
            {item.title}
          </HideText>
        </h1>

        <p>
          <FadeText controls={controls} delay={delay}>
            {item.detail}
          </FadeText>
        </p>
      </div>
    </div>
  );
}
