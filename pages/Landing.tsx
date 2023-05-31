import { NextPage } from "next";
import {useState} from 'react'
import { Container, Box, Button } from "@mui/material";
import HeadlineCard from "../components/HeadlineCard";
import styles from '../styles/screens/Landing.module.css'
import Experience from "./experience";
import Project from "./project";

const Landing: NextPage = () => {
    const [cardIndex, setCardIndex] = useState<number>(0);

    return (
        <Container>
            <HeadlineCard />
            <Box className={styles.buttonContainer}>
                <Button variant="outlined" className={`${cardIndex === 0 ? styles.activeButton : styles.button}`} onClick={() => setCardIndex(0)}>Experience</Button>
                <Button variant="outlined" className={`${cardIndex === 1 ? styles.activeButton : styles.button}`} onClick={() => setCardIndex(1)}>Projects</Button>
            </Box>
            <Box className={styles.carouselContainer}>
                {cardIndex === 0 ? (
                    <Experience />
                ): (
                    <Project />
                )}
            </Box>
        </Container>
    )
}

export default Landing