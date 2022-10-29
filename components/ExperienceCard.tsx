import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import Image from 'next/image'
import { ThemeProvider} from '@mui/system'
import theme from '../util/theme'
import styles from "../styles/ExperienceCard.module.css"

interface ExperienceCardProps {
    title: string
    position: string
    date: string
    description: string
    image: string
}

const ExperienceCard = ({title, position, date, description, image}: ExperienceCardProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Card variant="outlined" className={styles.card} sx={{backgroundColor: "primary.dark"}}>
                <CardMedia sx={{height: 140}}>
                    <div className={styles.image}>
                        <Image src={image} layout="fill" objectFit='cover'/>
                    </div>
                </CardMedia>
                <CardContent>
                    <h2 className={styles.heading}>{title}</h2>
                    <p className={`${styles.text} ${styles.italicText}`}>{position}</p>
                    <p className={`${styles.text} ${styles.italicText}`}>{date}</p>
                    <p className={`${styles.text} ${styles.paragraphText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati tenetur amet iusto nesciunt vel architecto, labore esse magnam earum vitae saepe similique eaque eligendi temporibus debitis eos id, animi minima?</p>
                </CardContent>
                <CardActions className={styles.buttonContainer}>
                    <Button size='small' className={styles.button} sx={{backgroundColor: "buttons.main"}}>Visit Website</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default ExperienceCard;