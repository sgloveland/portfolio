import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import Image from 'next/image'
import { ThemeProvider} from '@mui/system'
import theme from '../util/theme'
import styles from "../styles/components/ExperienceCard.module.css"

interface ExperienceCardProps {
    title: string
    position: string
    date: string
    description: string
    image: string
    link?: string
}

const ExperienceCard = ({title, position, date, description, image, link}: ExperienceCardProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Card variant="outlined" className={styles.card} sx={{backgroundColor: "backdrop.default"}}>
                <CardMedia sx={{height: 140}}>
                    <div className={styles.image}>
                        <Image src={image} layout="fill" objectFit='cover'/>
                    </div>
                </CardMedia>
                <CardContent>
                    <h2 className={styles.heading}>{title}</h2>
                    <p className={`${styles.text} ${styles.italicText}`}>{position}</p>
                    <p className={`${styles.text} ${styles.italicText}`}>{date}</p>
                    <p className={`${styles.text} ${styles.paragraphText}`}>{description}</p>
                </CardContent>
                {link && (
                <CardActions className={styles.buttonContainer}>
                    <Button target="_blank" size='small' className={styles.button} sx={{backgroundColor: "green.darkest", color: "backdrop.light" ,marginLeft: "2%"}} href={link}>Visit Website</Button>
                </CardActions>
                )}
            </Card>
        </ThemeProvider>
    )
}

export default ExperienceCard;