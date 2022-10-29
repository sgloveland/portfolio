import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import EducationCard from '../components/EducationCard'
import EduData from "../data/education.json"
import styles from "../styles/Education.module.css"

const Education: NextPage = () => {
    return (
        <Container className={styles.container}>
            <Box className={styles.headerContainer}>
                <h2 className={styles.header}>Education</h2>
            </Box>

            <Box className={styles.content}>
                {EduData.map((education) => (
                    <EducationCard school={education.school} degree={education.degree} date={education.date} gpa={education.GPA}/>
                ))}
            </Box>
        </Container>
    )
}

export default Education;