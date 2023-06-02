import {Box, Button, Container, Badge} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from "../util/theme"
import styles from "../styles/components/ProjectCard.module.css"
import Link from 'next/link';

interface DesignCardProps {
    name: string;
    date: string;
    description: string;
    skills: Array<string>;
}

const DesignCard = ({name, date, description, skills}: DesignCardProps) => {
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
                <Box className={styles.actionContainer}>
                    <Button className={styles.button} sx={{backgroundColor: "green.darkest"}} href={"/project-details/PathwayPals"} variant='text' size='small'>Learn More</Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default DesignCard;