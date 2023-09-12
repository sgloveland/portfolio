import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../styles/components/Header.module.css";

type HeaderProps = {};

interface DrawerProps {
  onPress: () => void;
}
const DrawerList = (props: DrawerProps) => {
  const { onPress } = props;
  return (
    <Box className={styles.listContainer}>
      <List className={styles.list}>
        <ListItem disablePadding>
          <Link href="/" className={styles.button} onClick={onPress}>
            <p className={`${styles.nameText} ${styles.buttonText}`}>Home</p>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/about" className={styles.button} onClick={onPress}>
            <p className={`${styles.nameText} ${styles.buttonText}`}>About</p>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/projects" className={styles.button} onClick={onPress}>
            <p className={`${styles.nameText} ${styles.buttonText}`}>
              Projects
            </p>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/resume" className={styles.button} onClick={onPress}>
            <p className={`${styles.nameText} ${styles.buttonText}`}>Resume</p>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

const Header = (props: HeaderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/about":
        setActiveIndex(1);
        break;
      case "/projects":
        setActiveIndex(2);
        break;
      case "/resume":
        setActiveIndex(3);
        break;
    }
  }, [pathname]);

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.title}>
        Sean Loveland
      </Link>
      <nav className={styles.navButtonContainer}>
        <Link
          href="/"
          className={`${
            activeIndex === 0 ? styles.activeNavButton : styles.navButton
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            activeIndex === 1 ? styles.activeNavButton : styles.navButton
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${
            activeIndex === 2 ? styles.activeNavButton : styles.navButton
          }`}
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className={`${
            activeIndex === 3 ? styles.activeNavButton : styles.navButton
          }`}
        >
          Resume
        </Link>
      </nav>
      <Box className={styles.drawer}>
        <IconButton edge="start" onClick={() => toggleDrawer(true)}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#222222",
            },
          }}
          anchor="right"
          open={open}
          onClose={() => toggleDrawer(false)}
        >
          <DrawerList onPress={() => toggleDrawer(false)} />
        </Drawer>
      </Box>
    </header>
  );
};

export default Header;
