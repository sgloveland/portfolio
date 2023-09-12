import { Box } from "@mui/material";
import ProjectCard from "../../components/ProjectCard";
import WorkData from "../../data/experience.json";
import ProjectData from "../../data/projects.json";
import styles from "../../styles/screens/Project.module.css";

const ProjectsScreen = () => {
  return (
    <main className={styles.container}>
      <h2>Work Projects</h2>
      <Box className={styles.content}>
        {WorkData.map((experience, index) => (
          <ProjectCard
            key={index}
            name={experience.name}
            date={experience.date}
            description={experience.description}
            skills={experience.skills}
            image={experience.image}
          />
        ))}
      </Box>
      <h2>Academic Projects</h2>
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
    </main>
  );
};
export default ProjectsScreen;
