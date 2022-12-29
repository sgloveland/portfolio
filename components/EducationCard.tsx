import {Box} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from "../util/theme"
import styles from "../styles/EducationCard.module.css"

interface EducationCardProps {
    school: string
    degree: string
    date: string
    gpa: string
}

const EducationCard = ({school, degree, date, gpa}: EducationCardProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.container} sx={{backgroundColor: "backdrop.default"}}>
                <Box className={styles.content}>
                    <h3>{school}</h3>
                    <p className={`${styles.text} ${styles.italic}`}>{degree}</p>
                    <p className={`${styles.text} ${styles.italic}`}>{date}</p>
                    <p className={`${styles.text} ${styles.bold}`}>{gpa}</p>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default EducationCard;