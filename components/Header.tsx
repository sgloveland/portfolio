import {useState} from 'react'
import { Button, Box, Container, Link, IconButton, Divider } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/components/Header.module.css'

type HeaderProps = {
    activeIndex: number
    onChange: (value: number) => void
}

const Header = (props: HeaderProps) => {
    const {activeIndex, onChange} = props

    return (
        <Container className={styles.container}>
            <Box className={styles.navButtonContainer}>
                <Button variant="outlined" className={`${activeIndex === 0 ? styles.activeNavButton : styles.navButton}`} onClick={() => onChange(0)}>Home</Button>
                <Button variant="outlined" className={`${activeIndex === 1 ? styles.activeNavButton : styles.navButton}`} onClick={() => onChange(1)}>About</Button>
                <Button variant="outlined" className={`${activeIndex === 2 ? styles.activeNavButton : styles.navButton}`} onClick={() => onChange(2)}>Resume</Button>
            </Box>
            <Box className={styles.iconContainer}>
                <Link target="_blank" href="https://github.com/sgloveland" variant={"button"}>
                    <IconButton aria-label='GitHub' className={styles.iconButton}>
                        <GitHubIcon sx={{color: '#065FF9'}}/>
                    </IconButton>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/sean-g-loveland/" variant="button">
                    <IconButton aria-label='LinkedIn' className={styles.iconButton}>
                        <LinkedInIcon sx={{color: '#065FF9'}}/>
                    </IconButton>
                </Link>
                <Link target="_blank" href={`mailto:seangloveland@gmail.com`} variant="button">
                    <IconButton aria-label='Email' className={styles.iconButton}>
                        <EmailIcon sx={{color: '#065FF9'}}/>
                    </IconButton>
                </Link>
            </Box>
        </Container>
    )
}

export default Header