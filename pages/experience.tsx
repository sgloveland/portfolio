import { Container, Box } from '@mui/material';
import type {NextPage} from 'next';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceData from "../data/experience.json";
import styles from "../styles/Experience.module.css";

const Experience: NextPage = () => {
    return (
        <Container id="experience" className={styles.container}>
            <Box className={styles.headerContainer}>
                <h2 className={styles.header}>Experience</h2>
            </Box>

            <Box className={styles.content}>
                {ExperienceData.map((experience) => (
                    <ExperienceCard title={experience.title} position={experience.position} date={experience.date} description={experience.description} image={experience.image} link={experience.link}/>
                ))}
            </Box>
        </Container>
    )
}

export default Experience;