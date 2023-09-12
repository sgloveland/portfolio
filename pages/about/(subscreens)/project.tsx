import { Box, Container } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectData from "../../../data/projects.json";
import styles from "../../../styles/screens/Project.module.css";

const Project: NextPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Container
      id="projects"
      className={`${styles.container} ${isVisible ? styles.isVisible : ""}`}
    >
      <Box className={styles.content}>
        {ProjectData.map((project, index) => (
          // link={project.link} demo={project.demo}
          <ProjectCard
            key={index}
            name={project.name}
            date={project.date}
            description={project.description}
            skills={project.skills}
            link={project.link}
            demo={project.demo}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Project;
