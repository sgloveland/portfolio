import {useState, useRef, useEffect} from 'react'
import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import EducationCard from '../components/EducationCard'
import EduData from "../data/education.json"
import styles from "../styles/Education.module.css"

const Education: NextPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const eduRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
                observer.unobserve(eduRef?.current as HTMLDivElement)
            }
        })

        observer.observe(eduRef?.current as HTMLDivElement)

        return () => observer.disconnect()
    }, [])

    return (
        <Container id="education" className={`${styles.container} ${isVisible ? styles.isVisible : ''}`} ref={eduRef}>
            <Box className={styles.headerContainer}>
                <h2 className={styles.header}>Education</h2>
            </Box>

            <Box className={styles.content}>
                {EduData.map((education, index) => (
                    <EducationCard key={index} school={education.school} degree={education.degree} date={education.date} gpa={education.GPA}/>
                ))}
            </Box>
        </Container>
    )
}

export default Education;