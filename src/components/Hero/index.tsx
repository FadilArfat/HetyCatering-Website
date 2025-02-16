import React, { useEffect, useRef } from "react";
import data from "@/data";
import { motion, useScroll, useTransform } from "motion/react";

type HeroProps = {
  mRef: any;
};

const Hero: React.FC<HeroProps> = ({ mRef }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  function skipToContent(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const offset = 100;

    if (mRef.current) {
      console.log("Scrolling to:", mRef.current.offsetTop);

      window.scrollTo({
        top: mRef.current.offsetTop - offset,
        behavior: "smooth",
      });
    } else {
      console.log("mRef.current is null!");
    }
  }

  return (
    <motion.section
      className="carousel-section"
      style={{
        scale,
        opacity: scale,
        borderRadius,
      }}
    >
      <div className="carousel-text">
        <motion.h1
          className="tits display-1 fw-bold text-center"
          style={{ fontSize: "12vh" }}
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{
            scale: 1.1,
            transition: { delay: 0, ease: "easeInOut" },
          }}
        >
          {data.title}
        </motion.h1>
        <h3 tabIndex={0}>{data.longTitle}</h3>
        <a
          href="#"
          className="scroll-down"
          onClick={skipToContent}
          aria-label="scroll down"
        ></a>
      </div>
    </motion.section>
  );
};

export default Hero;
