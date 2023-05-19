import { NextPage } from "next";
import { Container, Box, Button } from "@mui/material";
import HeadlineCard from "../components/HeadlineCard";
import styles from '../styles/Landing.module.css'

const Landing: NextPage = () => {
    return (
        <Container>
            <HeadlineCard />

            <Box className={styles.buttonContainer}>
                <Button variant="outlined" className={styles.button}>Experience</Button>
                <Button variant="outlined" className={styles.button}>Projects</Button>
            </Box>
            <Box className={styles.carouselContainer}>
            </Box>
        </Container>
    )
}

export default Landing