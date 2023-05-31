import {useRef, useState, useEffect, MutableRefObject} from 'react'
import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import SkillBadge from '../components/SkillBadge'
import styles from "../styles/screens/Skills.module.css"
import skillsData from "../data/skills.json"

const Skills: NextPage = () => {
    
    return (
        <Container id='skills' className={`${styles.container} ${ styles.isVisible}`}>
            <Box className={styles.headerContainer}>
                <h2 className={styles.header}>Skills</h2>
            </Box>


            <Box>
                <h3 className={styles.subheader}>Languages</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.languages.map((language, index) => (
                        <SkillBadge key={index} name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>

            <Box>
                <h3 className={styles.subheader}>Frameworks</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.frameworks.map((language, index) => (
                        <SkillBadge key={index} name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>

            <Box>
                <h3 className={styles.subheader}>Database</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.database.map((language, index) => (
                        <SkillBadge key={index} name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>
            
            <Box>
                <h3 className={styles.subheader}>Software & Tools</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.tools.map((language, index) => (
                        <SkillBadge key={index} name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default Skills;