import {useRef, useState, useEffect} from 'react'
import { Container, Box } from '@mui/material';
import type {NextPage} from 'next';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceData from "../data/experience.json";
import styles from "../styles/screens/Experience.module.css";

const Experience: NextPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const experienceRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
                observer.unobserve(experienceRef?.current as HTMLDivElement)
            }
        })

        observer.observe(experienceRef?.current as HTMLDivElement)

        return () => observer.disconnect()
    }, [])

    return (
        <Container id="experience" className={`${styles.container} ${isVisible ? styles.isVisible : ''}`} ref={experienceRef}>
            <Box className={styles.content}>
                {ExperienceData.map((experience, index) => (
                    <ExperienceCard key={index} title={experience.title} position={experience.position} date={experience.date} description={experience.description} image={experience.image} link={experience.link}/>
                ))}
            </Box>
        </Container>
    )
}

export default Experience;