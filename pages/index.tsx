import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HeadlineCard from "../components/HeadlineCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import styles from "../styles/screens/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Sean Loveland</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="profile.jpg" />
      </Head>
      <HeadlineCard />
      <h2>Projects</h2>
      <div className={styles.projectContainer}>
        <ProjectPreviewCard
          label="Botmo"
          bgSrc="/botmo-bg.png"
          logo="https://firebasestorage.googleapis.com/v0/b/botmo-28a0f.appspot.com/o/profilePictures%2Fprofile.png?alt=media&token=c2e7270c-427a-4e0b-907c-ad3dc279bbc7"
          href="https://lofirain.app/botmo"
        />
        <ProjectPreviewCard
          label="Odyssey"
          bgSrc="/odyssey-bg.png"
          logo="/odyssey.png"
          href="https://odysseyapp.com/"
        />
        <ProjectPreviewCard
          label="Down Groups"
          bgSrc="/down-bg.png"
          logo="/down.png"
          href="/projects"
        />
      </div>
      <Link href="/projects" className={styles.button}>
        <span>See More Projects</span>
        <ChevronRightIcon />
      </Link>
    </main>
  );
};

export default Home;
