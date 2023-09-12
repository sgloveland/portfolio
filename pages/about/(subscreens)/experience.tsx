import { Box, Container } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import ExperienceCard from "../../../components/ExperienceCard";
import ExperienceData from "../../../data/experience.json";
import styles from "../../../styles/screens/Experience.module.css";

const Experience: NextPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container
      id="experience"
      className={`${styles.container} ${isVisible ? styles.isVisible : ""}`}
    >
      <Box className={styles.content}>
        {ExperienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            position={experience.position}
            date={experience.date}
            description={experience.description}
            alt={experience.alt}
            image={experience.image}
            link={experience.link}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Experience;
