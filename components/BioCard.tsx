import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import type { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/components/BioCard.module.css";
import theme from "../util/theme";

const BioCard: NextComponentType = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        id="about"
        className={`${styles.container} ${styles.isVisible}`}
        sx={{
          backgroundColor: "backdrop.default",
        }}
      >
        <Box className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/profile.jpg"
            layout="responsive"
            height={100}
            width={100}
            objectFit="cover"
            alt="A headshot photo of Sean Loveland"
          />
        </Box>
        <Box className={styles.textContainer}>
          <p>
            {
              "Hi! My name is Sean Loveland. I am currently a senior studying Software Engineering at the University of California, Irvine."
            }
          </p>
          <p>
            {
              "I have experience both in Mobile App development as well as in Web development. I am passionate about building software that positively impacts people all around us. If my qualifications match a role you have or if you'd like to get into contact, please feel free to reach out and connect!"
            }
          </p>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BioCard;
