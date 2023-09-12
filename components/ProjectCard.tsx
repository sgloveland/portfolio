import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/ProjectCard.module.css";
import theme from "../util/theme";

interface ProjectCardProps {
  name: string;
  date: string;
  description: string;
  image?: string;
  link?: string | undefined;
  demo?: string | undefined;
  skills: Array<string>;
}

const ProjectCard = ({
  name,
  date,
  description,
  image,
  link,
  skills,
  demo,
}: ProjectCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Link className={styles.container} href={link ?? "/projects"}>
        {/* Main Content */}
        <Box className={styles.content}>
          <div className={styles.headingContainer}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.date}>{date}</p>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.skillContainer}>
            {skills.map((skill, index) => (
              <div className={styles.skillImage} key={index}>
                <Image src={skill} fill alt="" />
              </div>
            ))}
          </div>
        </Box>
        {image && (
          <div className={styles.logo}>
            <Image
              src={image}
              fill
              sizes="100vw"
              alt=""
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </Link>
    </ThemeProvider>
  );
};

export default ProjectCard;
