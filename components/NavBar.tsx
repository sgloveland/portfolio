import * as React from "react"
import {AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from "../util/theme"
import styles from '../styles/NavBar.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const list = () => {
    return (
        <Box sx={{width: 250}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Skills"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Experience"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Projects"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Education"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Resume"></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export const NavBar = () => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => {
        setState(!state)
    }

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="sticky" sx={{backgroundColor: "primary.dark"}}>
            <Toolbar>
                <IconButton edge="start" onClick={toggleDrawer} sx={{backgroundColor: "success.main"}}>
                    <MenuIcon />
                </IconButton>
                <Drawer
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