import {useState} from 'react'
import { Box, Divider } from '@mui/material'
import styles from '../styles/NavBar.module.css'
import NavButton from './NavButton'

interface NavBarProps {
    onChange: (index: number) => void;
}

export const NavBar = ({onChange}: NavBarProps) => {
    const buttons = ['About Me', 'Skills', 'Experience', 'Projects', 'Education']
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)

    return (
        <Box className={styles.container}>
            <h1>Sean Loveland</h1>
            <Box className={styles.buttonContainer}>
                {buttons.map((button, index) => (
                    <NavButton 
                        key={index} 
                        text={button} 
                        onClick={() => {
                            setActiveButtonIndex(index)
                            onChange(index)
                        }}
                        isActive={index === activeButtonIndex}
                    />
                ))}
            </Box>
        </Box>
    )
}