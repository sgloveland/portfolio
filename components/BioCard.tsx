import {useRef, useState, useEffect} from 'react'
import { Box, Container, IconButton, Link } from '@mui/material'
import type { NextComponentType } from 'next'
import Image from 'next/image'
import { ThemeProvider} from '@mui/system'
import theme from '../util/theme'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import styles from "../styles/components/BioCard.module.css"

const BioCard: NextComponentType = () => {
    const [isVisible, setIsVisible] = useState(false)
    const bioRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setIsVisible(true)
                observer.unobserve(bioRef?.current as HTMLDivElement)
            }
        })

        observer.observe(bioRef?.current as HTMLDivElement)

        return () => observer.disconnect();
    })


    return (
        <ThemeProvider theme={theme}>
            <Container
            id="about"
            className={`${styles.container} ${isVisible ? styles.isVisible: ''}`}
            sx={{
                backgroundColor: "backdrop.default",
            }}
            ref={bioRef}
            >
                <Box className={styles.imageContainer}>
                    <Image className={styles.image} src="/profile.jpg" layout='responsive' height={"100%"} width={"100%"} objectFit="cover" alt='A headshot photo of Sean Loveland'/>
                </Box>
                <Box className={styles.textContainer}>
                    <p>{"Hi! My name is Sean Loveland. I am currently a senior studying Software Engineering at the University of California, Irvine."}</p>
                    <p>{"I have experience both in Mobile App development as well as in Web development. I am passionate about building software that positively impacts people all around us. If my qualifications match a role you have or if you'd like to get into contact, please feel free to reach out and connect!"}</p>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default BioCard;