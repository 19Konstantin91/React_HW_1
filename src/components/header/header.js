import { Link } from "react-router-dom";
import styles from "./header.module.css";
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../API/firebase";

const menuWithSession = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

const menuWithoutSession = [
  { title: "Login", to: "/login" },
  { title: "Sign-up", to: "/sign-up" },
];

export function Header({ session }) {

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#ccbb25" }}
      color="primary"
      className={styles.appBar}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            RedPanda
          </Typography>

          {!!session && (
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menuWithSession.map((item) => (
                <Button
                  key={item.to}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ color: "#8d0000", borderBottom: "none" }}
                    to={item.to}
                    className={styles.link}
                  >
                    {item.title}
                  </Link>
                </Button>
              ))}
            </Box>
          )}

          {!!session && 
          <Button 
          style={{ color: "#8d0000", borderBottom: "none" }}
          onClick={() => signOut(auth)}
          >
          out
          </Button>}

          {!session && (
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menuWithoutSession.map((item) => (
                <Button
                  key={item.to}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ color: "#8d0000", borderBottom: "none" }}
                    to={item.to}
                    className={styles.link}
                  >
                    {item.title}
                  </Link>
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="RedPanda"
                src="https://i.ucrazy.ru/files/pics/2014.07/1405915749_17.jpg"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
