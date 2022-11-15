import {Box, Button, Container, Badge} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from "../util/theme"
import styles from "../styles/ProjectCard.module.css"

const ProjectCard = () => {
    const sampleData = ["React Native", "Expo", "Typescript", "C++", "jQuery", "Next.js", "Alright"]
    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.container} sx={{backgroundColor: "primary.dark"}}>
                <Box className={styles.header}>
                    <h2>C++ Bitmap Image Color Counter</h2>
                    <p>June 2021</p>
                </Box>

                <Box className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facilis, ex possimus pariatur nam quia corporis est! Rerum deleniti reprehenderit eaque assumenda sapiente libero recusandae quis, nesciunt aliquam! Reiciendis, dolorem.</p>
                </Box>

                <Box className={styles.skillsContainer}>
                    {sampleData.map((item) => (
                        <Badge variant="standard" sx={{backgroundColor: "blue", borderRadius: 5, paddingBlock: 1, paddingInline: 2, marginRight: "3%", marginBottom: "2%", fontSize: 14}}>
                            {item}
                        </Badge>
                    ))}
                </Box>

                <Box className={styles.actionContainer}>
                    <Button sx={{backgroundColor: "buttons.main"}} href="https://stackoverflow.com/questions/68721497/how-to-use-next-js-image-inside-material-ui-card-media" variant='text' size='small'>View Repository</Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ProjectCard;