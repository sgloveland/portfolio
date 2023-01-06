import { Box, ThemeProvider } from "@mui/material"
import Image from "next/image"
import theme from "../util/theme"
import styles from "../styles/SkillBadge.module.css"
import { Container } from "@mui/system"

interface SkillBadgeProps {
    name: string;
    image: string;
}

const SkillBadge = ({name, image} : SkillBadgeProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.container} sx={{backgroundColor: "black"}}>
                <Box className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image src={image} layout="fill" objectFit="contain"/>
                    </div>
                </Box>
                <Box className={styles.textContainer}>
                    <p>{name}</p>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default SkillBadge