import { NextPage } from "next";
import {useState} from 'react'
import { Container, Box, Button } from "@mui/material";
import HeadlineCard from "../components/HeadlineCard";
import styles from '../styles/screens/Landing.module.css'
import Experience from "./experience";
import Project from "./project";
import Design from "./design";

const Landing: NextPage = () => {
    const [cardIndex, setCardIndex] = useState<number>(0);

    const renderTab = () => {
        switch(cardIndex) {
            case 0:
                return <Experience />
            case 1: 
                return <Project />
            case 2: 
                return <Design />
        }
    }

    return (
        <Container>
            <HeadlineCard />
            <Box className={styles.buttonContainer}>
                <Button variant="outlined" className={`${cardIndex === 0 ? styles.activeButton : styles.button}`} onClick={() => setCardIndex(0)}>Experience</Button>
                <Button variant="outlined" className={`${cardIndex === 1 ? styles.activeButton : styles.button}`} onClick={() => setCardIndex(1)}>Projects</Button>
                <Button variant="outlined" className={`${cardIndex === 2 ? styles.activeButton : styles.button}`} onClick={() => setCardIndex(2)}>UX Design</Button>
            </Box>
            <Box className={styles.carouselContainer}>
                {renderTab()}
            </Box>
        </Container>
    )
}

export default Landing