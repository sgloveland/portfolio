import { Container, Button } from "@mui/material";
import type {NextPage} from 'next';
import styles from "../styles/screens/Resume.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume: NextPage = () => {
    return (
        <Container className={styles.container}>
            <Document file={'/resume.pdf'} className={styles.document}>
                <Page pageIndex={0} pageNumber={1} renderTextLayer={false}/>
            </Document>
            <Button variant="contained" className={styles.button} target="_blank" href={"https://docs.google.com/document/d/1uAZ-ZpvUzivjN0-Kr555ppphM0bAyncF1fIqWTi1dNo/edit?usp=sharing"} >View in a new tab</Button>
        </Container>
    )
}

export default Resume;