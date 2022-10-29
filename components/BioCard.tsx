import { Box, Container, IconButton, Link } from '@mui/material'
import type { NextComponentType } from 'next'
import Image from 'next/image'
import { ThemeProvider} from '@mui/system'
import theme from '../util/theme'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from "../styles/BioCard.module.css"

const BioCard: NextComponentType = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
            sx={{
                display: "flex",
                backgroundColor: "primary.dark",
                width: "50%",
                height: "auto",
                borderRadius: 10
            }}>
                <Box sx={{flex: 1, padding: "3%"}}>
                    <Image className={styles.image} src="/../public/profile.jpg" layout='responsive' height={"100%"} width={"100%"} objectFit="cover"/>
                </Box>
                <Box sx={{flex: 1, color: "primary.contrastText", marginTop: "2%", textAlign: 'center'}}>
                    <p>Hi! My name is Sean Loveland. I am a software engineering major at UCI with a passion for building software that impacts people all around us!</p>
                    <p>Outside of software, some of my hobbies include watching horror movies, playing the violin (I almost ended up playing professionally before switching to the software field), and learning anything and everything I can!</p>
                    <Box sx={{color: "primary.light", textAlign: 'center'}}>
                        <p>seangloveland@gmail.com</p>
                    </Box>
                    <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}>
                        <Link href="https://github.com/sgloveland" variant={"button"}>
                            <IconButton 
                            sx={{
                                width: "100%",
                                heigh: "100%",
                                borderRadius: 0,
                                backgroundColor: "buttons.light",
                            }}>
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sean-g-loveland/" variant="button">
                            <IconButton
                            sx={{
                                width: "100%",
                                heigh: "100%",
                                borderRadius: 0,
                                backgroundColor: "buttons.light",
                            }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://www.instagram.com/sg_loveland/" variant="button">
                            <IconButton
                            sx={{
                                width: "100%",
                                heigh: "100%",
                                borderRadius: 0,
                                backgroundColor: "buttons.light",
                            }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default BioCard;