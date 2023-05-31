import { Container, Box, } from "@mui/material";
import Image from 'next/image'
import styles from '../styles/components/HeadlineCard.module.css'

const HeadlineCard = () => {
    return (
        <Container className={styles.container}>
            <Box className={styles.infoContainer}>
                <h1 className={styles.name}>Sean Loveland</h1>
                <h2 className={styles.title}>Full Stack Software Engineer</h2>
                <h3 className={styles.tech}>React, React Native, Node, Express, AWS, GCP</h3>
            </Box>
            <Box className={styles.imageContainer}>
                <Box className={styles.imageBackground}>
                    <Image className={styles.image} src="/profile.jpg" layout='responsive' height={"100%"} width={"100%"} objectFit="cover" alt='A headshot photo of Sean Loveland'/>
                </Box>
            </Box>
        </Container>
    )
}

export default HeadlineCard