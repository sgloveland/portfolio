import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.socialButtonContainer}>
        <Link
          target="_blank"
          aria-label="Link to GitHub profile"
          href="https://github.com/sgloveland"
          className={styles.socialButton}
        >
          <GitHubIcon className={styles.socialButtonLogo} />
        </Link>
        <Link
          target="_blank"
          aria-label="Link to LinkedIn profile"
          href="https://www.linkedin.com/in/sean-g-loveland/"
          className={styles.socialButton}
        >
          <LinkedInIcon className={styles.socialButtonLogo} />
        </Link>
        <Link
          target="_blank"
          aria-label="Link to email Sean Loveland"
          href={`mailto:seangloveland@gmail.com`}
          className={styles.socialButton}
        >
          <EmailIcon className={styles.socialButtonLogo} />
        </Link>
      </div>
      <span className={styles.name}>Sean Loveland</span>
    </footer>
  );
};

export default Footer;
