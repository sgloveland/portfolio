import * as React from "react"
import {AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from "../util/theme"
import styles from '../styles/NavBar.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const list = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width: 250}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton className={styles.button}>
                            <ListItemText className={styles.text} primary="Skills"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className={styles.button}>
                            <ListItemText className={styles.text} primary="Experience"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className={styles.button}>
                            <ListItemText className={styles.text} primary="Projects"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className={styles.button}>
                            <ListItemText className={styles.text} primary="Education"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className={styles.button}>
                            <ListItemText className={styles.text} primary="Resume"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </ThemeProvider>
    )
}

export const NavBar = () => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => {
        setState(!state)
    }

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="sticky" sx={{backgroundColor: "blue.darkest"}}>
            <Toolbar>
                <IconButton edge="start" onClick={toggleDrawer}>
                    <MenuIcon sx={{color: "white"}} />
                </IconButton>
                <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "backdrop.default"
                    }
                }}
                anchor="left"
                open={state}
                onClose={toggleDrawer}
                >
                    {list()}
                </Drawer>
                <h1 className={styles.text}>Sean Loveland</h1>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}