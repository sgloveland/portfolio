import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Container, Box, Button } from '@mui/material';
import Link from 'next/link';
import styles from '../../styles/screens/PathwayPals.module.css'
import Image from 'next/image';

const PathwayPals = () => {
    return (
        <Container className={styles.container}>
            <Box className={styles.header}>
                <Link href="/" className={styles.back}>
                    <ArrowBackIcon />
                </Link>
                <Box className={styles.titleContainer}>
                    <AccessibleIcon className={styles.handicap}/>
                    <h1 className={styles.title}>Heelo</h1>
                </Box>
            </Box>
            <Box className={styles.content}>
                <h2 className={styles.headerText}>Project Overview & Motivation</h2>
                <p>
                    As part of my Informatics 132 course at UCI, my team, Anteater Architects, was tasked with designing a system to solve a real world problem using technology.
                    One of our team members, Preetham, had recently injured his leg and was using crutches to navigate the hilly UCI campus, and he lamented that he had trouble getting to certain
                    unfamiliar buildings on campus because Google Maps would constantly put him on routes that included steep incline or stairs. We decided that our solution should tackle this issue, 
                    and we wanted to design a system tthat would provide users with accessible routes to fit their needs, particularly in hilly environments like that of UCI's campus.
                </p>

                <h2 className={styles.headerText}>Problem Statement</h2>
                <p>
                    Our group Anteater Architects is developing a navigation application to help people with disabilities or injuries requiring wheeled assistance solve the challenge of navigating hilly 
                    college campuses like UC Irvine by using our unique algorithm that locates handicap-accessible areas and pathways while calculating the shortest route with minimal elevation change.
                </p>

                <h2 className={styles.headerText}>The Process</h2>
                <p>We began the project by creating our problem statement detailed above. Because we knew the problem we were trying to address, and because our team included many members who had been affected by 
                    the lack of accessible navigation options (myself included), we decided to start the project off by conducting a comparative analysis. Once we identified major platforms that already exist on the market,
                    we compiled some insights into how we can design our app to nicely fit into the gap in the market. We then created personas based on our own personal experiences and gripes with current solutions, and we 
                    used those as a basis for our prototyping portion of the project. We then began to ideate and create prototypes for which we plan to conduct user evaluations.
                </p>

                <h2 className={styles.headerText}>Comparative Analysis</h2>
                <p>I was tasked with conducting the comparative analysis for existing products on the market. After doing some research, I compiled a list of the following systems:</p>
                <ul>
                    <li>Apple/Google Maps: The go to navigation tool used by everyday people</li>
                    <li>Wheelmaps: Offers wheelchair friendly restaurants, cinemas, bus stops, etc. with ratings and photos of the wheelchair accessible paths</li>
                    <li>Wheelmate: Provides overview of nearby wheelchair accessible bathrooms and parking spaces as well as how to get there</li>
                    <li>AccessNow: You can search for nearby places that accommodate for specific accessibility features that you require</li>
                    <li>AroundMe: Accessible locations are marked with a wheelchair icon on the maps</li>
                    <li>MyPermobil: Hands free insight to wheelchair information, like charge status and distance traveled</li>
                    <li>iAccessLife: Offers ability to locate accessible establishments/attractions etc. and read reviews about their accessibility levels</li>
                </ul>
                <p>I then took all these existing systems and compared each of them based on several criteria. The results of the comparisons are shown below: </p>
                <Box className={styles.imageContainer}>
                    <Image src={'/comparative_analysis.png'} width={500} height={300} alt="A table depicting a comparative analysis of different accessible navigation software."/>
                </Box>
                <p>From this comparative analysis, I gained the following insights:</p>

                <ol>
                    <li>Google/Apple maps do a poor job of providing wheelchair friendly paths (from our own personal experience)</li>
                    <li>Most free solutions do not provide directions to new places, they only provide ratings and images for accessibility</li>
                    <li>When a system above does offer the option to view directions, they link directly back to Google/Apple maps</li>
                    <li>There is no solution that directly addresses the issue set in our problem statement</li>
                </ol>

                <h2 className={styles.headerText}>Personas</h2>
                <Box className={styles.personaContainer}>
                    <Image src={'/persona_1.png'} width={500} height={280}/>
                    <Image src={'/persona_2.png'} width={500} height={280}/>
                </Box>

                <h2 className={styles.headerText}>Prototyping</h2>
                <p>
                    Now that we had our problem statement as well as some insights from our comparative analysis, our team decided to take some 
                    time to create some prototypes. We weren't exactly sure what we wanted our final end result to look like, and we admittedly did not have much time,
                    so we split the prototyping phases into 3 sections: ideation, lo-fi prototypes, and hi-fi prototypes. At the time of writing this, we have only been able to 
                    complete our ideation process.
                </p>

                <h3 className={styles.subheaderText}>Ideation</h3>
                <p>We decided to follow the Crazy 8 (or as our Professor refers to it, the Creative 8) process for ideation. This means we each took a limited amount of time to sketch
                    out 8 possible designs for our system. We then reviewed each sketch and compiled them into the best 8 sketches that we all agreed upon.
                </p>
                <Box className={styles.imageContainer}>
                    <Image src={'/creative_8.png'} width={400} height={300}/>
                </Box>
            
                <h2 className={styles.headerText}>Next Steps & Future Plans</h2>
                <p>
                    As we near the end of the timeline for this project, we have some plans for what we want to achieve as next steps. The most obvious next step for this project would be to complete
                    our high fidelity prototypes of what we want our interface to look like. Once our prototypes are complete, I believe the next logical step would be to bring in users and conduct user 
                    evaluations for our interface either in the form of cognitive walkthroughs or think alouds. This would give us insight into the aspects and features of our system that users actually like and want,
                    and it will highlight areas of potential improvement as well.
                </p>
                <p>
                    We were also concerned with the feasibility of this project and how we would get map data in order to build out the main functionality of our app. I suggested that we could potentially create a partnership
                    with Starship, which uses robots to traverse university campuses to deliver food to students. The reason I brought up this idea was because the robots are unable to navigate stairs, so the map data they use to 
                    get around campus would perfectly match the map needs for our system to provide accessible routes for physical disabilities. This partnership still remains a viable option in the event that this system gets built. 
                </p>

                <h2 className={styles.headerText}>Project Retrospective</h2>
                <p>
                    Like any project or sprint (in the Agile methodology sense), a retorspective always serves as a way to learn from a project experience. I will conduct my own individual retrospective here, and my group will also conduct
                    a separate retrospective.
                </p>

                <h3 className={styles.subheaderText}>What went well</h3>
                <ul>
                    <li>We each were able to effectively split up and complete individual tasks by deadlines we set forth</li>
                    <li>The work each of us completed was up to the standard of quality we expecte when the group was formed</li>
                    <li>Each of us were able to make sacrifices in order to meet under special circumstances throughout the quarter</li>
                </ul>

                <h3 className={styles.subheaderText}>What didn't go well</h3>
                <ul>
                    <li>As we each were full time students and some of us worked, it was rather difficult to establish recurring meeting times</li>
                    <li>Communication amongst team members was quite difficult at times, especially because some members of the team were commuters that did not live near campus</li>
                    <li>
                        Obligations to other projects (for example, I was finishing my capstone project during this one) meant that some members were not able to contribute as much or
                        as often to project deliverables
                    </li>
                    <li>
                        We had time crunch, particularly due to the inability to establish regular meeting times and failing to adhere to our project timeline.
                    </li>
                </ul>

                <h3 className={styles.subheaderText}>What could we improve</h3>
                <ul>
                    <li>
                        I believe we could've benefitted from following design thinking and conducted user research with a wider group of people beyond jus team members. This would have
                        helped keep us on track and would've gone a long way in helping to inform design decisions later on in the process.
                    </li>
                    <li>
                        Project management is important! I feel our team lacked a project manager to keep team members in line, and ultimately our project suffered because of it. We ran out of time,
                        some project deliverables weren't completed, and overall there was a sense of "What should we be doing" in the team that could have been avoided with good project management practices
                    </li>
                    <li>
                        This was my first time completing a project that was solely focused on design, so I think there was definitely a learning curve, especially with some of the tools we used, like Figma. This improvement,
                        however, comes with time and I know I'll be better prepared for my next project.
                    </li>
                </ul>
                <Box>
                    <Button href="/" className={styles.endButton}>Return home</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default PathwayPals