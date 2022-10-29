import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BioCard from '../components/BioCard'
import ExperienceCard from '../components/ExperienceCard'
import EducationCard from '../components/EducationCard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean Loveland</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ExperienceCard title='DOWN GROUPS' position='Full Stack Software Developer' date='June 2022 to Present' description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati tenetur amet iusto nesciunt vel architecto, labore esse magnam earum vitae saepe similique eaque eligendi temporibus debitis eos id, animi minima?" image="/../public/profile.jpg"/> */}
        <EducationCard />
    </div>
  )
}

export default Home
