import { Box, Container } from "@mui/material";
import type { NextPage } from "next";
import EducationCard from "../../../components/EducationCard";
import EduData from "../../../data/education.json";
import styles from "../../../styles/screens/Education.module.css";

const Education: NextPage = () => {
  return (
    <Container
      id="education"
      className={`${styles.container} ${styles.isVisible}`}
    >
      <Box className={styles.headerContainer}>
        <h2 className={styles.header}>Education</h2>
      </Box>

      <Box className={styles.content}>
        {EduData.map((education, index) => (
          <EducationCard
            key={index}
            school={education.school}
            degree={education.degree}
            date={education.date}
            gpa={education.GPA}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Education;
