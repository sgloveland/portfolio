import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../styles/components/HeadlineCard.module.css";

const HeadlineCard = () => {
  const element = useRef(null);

  useEffect(() => {
    const typingOptions = {
      strings: [
        "Problem Solver.",
        "Technical Generalist.",
        "Full Stack Engineer.",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(element.current, typingOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container className={styles.container}>
      <Image
        className={styles.image}
        src="/profile.jpg"
        height={0}
        width={0}
        sizes="100vw"
        style={{ width: "25%", height: "auto" }}
        alt="A headshot photo of Sean Loveland"
        priority
      />
      <Box className={styles.infoContainer}>
        <h1 className={styles.name}>Hello! I'm Sean.</h1>
        <h2 className={styles.title}>
          I'm a <span ref={element}></span>
        </h2>
      </Box>
    </Container>
  );
};

export default HeadlineCard;
