import { Button, Box, Container, Link, IconButton, Divider } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <Container className={styles.container}>
            <Box className={styles.navButtonContainer}>
                <Button variant="outlined" className={styles.navButton}>Home</Button>
                <Button variant="outlined" className={styles.navButton}>About</Button>
                <Button variant="outlined" className={styles.navButton}>Resume</Button>
            </Box>
            <Box className={styles.iconContainer}>
                <Link target="_blank" href="https://github.com/sgloveland" variant={"button"}>
                    <IconButton className={styles.iconButton}>
                        <GitHubIcon sx={{color: '#00FF00'}}/>
                    </IconButton>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/sean-g-loveland/" variant="button">
                    <IconButton className={styles.iconButton}>
                        <LinkedInIcon sx={{color: '#00FF00'}}/>
                    </IconButton>
                </Link>
                <Link target="_blank" href={`mailto:seangloveland@gmail.com`} variant="button">
                    <IconButton className={styles.iconButton}>
                        <EmailIcon sx={{color: '#00FF00'}}/>
                    </IconButton>
                </Link>
            </Box>
        </Container>
    )
}

export default Header