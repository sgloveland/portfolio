import {useState, useRef, useEffect} from 'react'
import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import ProjectCard from '../components/ProjectCard'
import ProjectData from "../data/projects.json"
import styles from "../styles/Project.module.css"

const Project: NextPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const projectRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting || (entries.length > 1 && entries[1].isIntersecting)) {
                setIsVisible(true)
                observer.unobserve(projectRef?.current as HTMLDivElement)
            }
        })

        observer.observe(projectRef?.current as HTMLDivElement)

        return () => observer.disconnect()
    }, [])
    return (
        <Container id="projects" className={`${styles.container} ${isVisible ? styles.isVisible : ''}`} ref={projectRef}>
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