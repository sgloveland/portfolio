import {Box, Button, Container, Badge} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from "../util/theme"
import styles from "../styles/ProjectCard.module.css"

interface ProjectCardProps {
    name: string;
    date: string;
    description: string;
    link?: string | undefined;
    demo?: string | undefined;
    skills: Array<string>;
}

const ProjectCard = ({name, date, description, link, skills, demo}: ProjectCardProps) => {
    // const sampleData = ["React Native", "Expo", "Typescript", "C++", "jQuery", "Next.js", "Alright"]
    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.container} sx={{backgroundColor: "backdrop.default"}}>
                <Box className={styles.header}>
                    <h2 className={styles.headerText}>{name}</h2>
                    <p className={`${styles.text} ${styles.italicText}`}>{date}</p>
                </Box>

                <Box className={styles.content}>
                    <p className={styles.paragraphText}>{description}</p>
                </Box>

                <Box className={styles.skillsContainer}>
                    {skills.map((item, index) => (
                        <Badge key={index} variant="standard" sx={{backgroundColor: "orange.darkest", borderRadius: 5, paddingBlock: 1, paddingInline: 1.5, marginRight: "3%", marginBottom: "2%", fontSize: 14}}>
                            {item}
                        </Badge>
                    ))}
                </Box>

                {link && (
                    <Box className={styles.actionContainer}>
                        <Button className={styles.button} sx={{backgroundColor: "green.darkest"}} target="_blank" href={link} variant='text' size='small'>View Repository</Button>
                    </Box>
                )}

                {demo && (
                    <Box className={styles.actionContainer}>
                        <Button className={styles.button} sx={{backgroundColor: "green.darkest"}} target="_blank" href={demo} variant='text' size='small'>Watch Demo</Button>
                    </Box>
                )}
            </Container>
        </ThemeProvider>
    )
}

export default ProjectCard;