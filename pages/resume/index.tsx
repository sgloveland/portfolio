import { Button, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { NextPage } from "next";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import styles from "../../styles/screens/Resume.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume: NextPage = () => {
  const tabletSize = useMediaQuery("(min-width:525px)");
  const desktopSize = useMediaQuery("(min-width:1024px)");

  return (
    <Container className={styles.container}>
      <Document file={"/resume.pdf"}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          width={tabletSize ? (desktopSize ? 700 : 450) : 300}
        />
      </Document>
      <Button
        variant="contained"
        className={styles.button}
        target="_blank"
        href={
          "https://docs.google.com/document/d/1uAZ-ZpvUzivjN0-Kr555ppphM0bAyncF1fIqWTi1dNo/edit?usp=sharing"
        }
      >
        View in a new tab
      </Button>
    </Container>
  );
};

export default Resume;
