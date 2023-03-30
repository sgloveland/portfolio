import {Button} from '@mui/material'
import { useEffect } from 'react'
import styles from '../styles/NavButton.module.css'

interface NavButtonProps {
    text: string
    onClick: () => void
    isActive?: boolean
}

export default function NavButton({text, onClick, isActive}: NavButtonProps) {
    return(
        <Button variant='outlined' onClick={onClick} className={`${styles.button} ${isActive ? styles.active : ''}`}>
            {text}
        </Button>
    )
}