import { Container, Box } from '@mui/material'
import type {NextPage} from 'next'
import SkillBadge from '../components/SkillBadge'
import styles from "../styles/Skills.module.css"
import skillsData from "../data/skills.json"
import { Language } from '@mui/icons-material'

const Skills: NextPage = () => {
    console.log(skillsData)
    return (
        <Container className={styles.container}>
            <Box className={styles.headerContainer}>
                <h2 className={styles.header}>Skills</h2>
            </Box>


            <Box>
                <h3 className={styles.subheader}>Languages</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.languages.map((language) => (
                        <SkillBadge name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>

            <Box>
                <h3 className={styles.subheader}>Frameworks</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.frameworks.map((language) => (
                        <SkillBadge name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>

            <Box>
                <h3 className={styles.subheader}>Database</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.database.map((language) => (
                        <SkillBadge name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>
            
            <Box>
                <h3 className={styles.subheader}>Software & Tools</h3>
                <Box className={styles.badgeContainer}>
                    {skillsData.tools.map((language) => (
                        <SkillBadge name={language.name} image={language.photo}/>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default Skills;