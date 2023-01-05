import * as React from "react"
import {AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import NextLink from "next/link"
import theme from "../util/theme"
import styles from '../styles/NavBar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll'

export const NavBar = () => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open:boolean) => {
        console.log(open)
        setState(open)
    }

    //Component for the actual drawer list options
    const list = () => {
        return (
                <Box className={styles.listContainer}>
                    <List className={styles.list}>
                        <ListItem disablePadding>
                            <Link onClick={() => toggleDrawer(false)} className={styles.button} to="skills" spy={true} smooth={true} duration={1000} offset={-50} >
                                <p className={`${styles.nameText} ${styles.buttonText}`}>Skills</p>  
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link onClick={() => toggleDrawer(false)} className={styles.button} to="experience" spy={true} smooth={true} duration={1000} offset={-50} >
                                <p className={`${styles.nameText} ${styles.buttonText}`}>Experience</p>  
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link onClick={() => toggleDrawer(false)} className={styles.button} to="projects" spy={true} smooth={true} duration={1000} offset={-50} >
                                <p className={`${styles.nameText} ${styles.buttonText}`}>Projects</p>  
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link onClick={() => toggleDrawer(false)} className={styles.button} to="education" spy={true} smooth={true} duration={1000} offset={-50} >
                                <p className={`${styles.nameText} ${styles.buttonText}`}>Education</p>  
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <a
                            onClick={() => toggleDrawer(false)}
                            href="https://docs.google.com/document/d/1uAZ-ZpvUzivjN0-Kr555ppphM0bAyncF1fIqWTi1dNo/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.button}>
                                <p className={`${styles.nameText} ${styles.buttonText}`}>Résumé</p>
                            </a>
                        </ListItem>
                    </List>
                </Box>
        )
    }

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="sticky" sx={{backgroundColor: "blue.darkest"}}>
            <Toolbar>
                <IconButton edge="start" onClick={() => toggleDrawer(true)}>
                    <MenuIcon sx={{color: "white"}} />
                </IconButton>
                <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "blue.darkest"
                    }
                }}
                anchor="left"
                open={state}
                onClose={() => toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
                <NextLink href="/">
                    <a className={styles.name}>
                        <h1 className={styles.nameText}>Sean Loveland</h1>
                    </a>
                </NextLink>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}