// import bg from "../public/botmo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/ProjectPreviewCard.module.css";

interface ProjectPreviewCardProps {
  label: string;
  bgSrc: string;
  logo: string;
  href: string;
}

const ProjectPreviewCard = (props: ProjectPreviewCardProps) => {
  const { label, bgSrc, logo, href } = props;
  return (
    <Link target="_blank" href={href} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={bgSrc} fill alt="Alt text" className={styles.image} />
        <div style={{ zIndex: 1 }} className={styles.content}>
          <Image
            src={logo}
            width={0}
            height={0}
            className={styles.logo}
            sizes="100vw"
            alt=""
          />
          <span className={styles.label}>{label}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreviewCard;
