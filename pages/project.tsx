import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import ProjectCard from '../components/ProjectCard'
import ProjectData from "../data/projects.json"
import styles from "../styles/Project.module.css"

const Project: NextPage = () => {
    return (
        <Container id="projects" className={styles.container}>
            <Box className={styles.headerContainer}>
                <h2 className={styles.header}>Projects</h2>
            </Box>

            <Box className={styles.content}>
                {ProjectData.map((project, index) => (
                    <ProjectCard key={index} name={project.name} date={project.date} description={project.description} skills={project.skills} link={project.link} demo={project.demo}/>
                ))}
            </Box>
        </Container>
    )
}

export default Project;