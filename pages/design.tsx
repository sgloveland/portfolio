import {useState, useRef, useEffect} from 'react'
import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import ProjectCard from '../components/ProjectCard'
import DesignCard from '../components/DesignCard'
import ProjectData from "../data/132.json"
import styles from "../styles/screens/Project.module.css"

const Design: NextPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const projectRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
                observer.unobserve(projectRef?.current as HTMLDivElement)
            }
        })

        observer.observe(projectRef?.current as HTMLDivElement)

        return () => observer.disconnect()
    }, [])
    return (
        <Container id="projects" className={`${styles.container} ${isVisible ? styles.isVisible : ''}`} ref={projectRef}>
            <Box className={styles.content}>
                {ProjectData.map((project, index) => (
                    <DesignCard key={index} name={project.name} date={project.date} description={project.description} skills={project.skills} />
                ))}
            </Box>
        </Container>
    )
}

export default Design;