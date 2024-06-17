import { Outlet } from "react-router-dom";
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Drawer, 
    Container
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import DrawerList from "../components/DrowerList";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Container sx={{minHeight: '100vh'}}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar variant="myVariant">
          <Typography variant="h6" marginLeft={2}>
            My Personal website
          </Typography>
          <IconButton><MenuIcon onClick={toggleDrawer(true)} /></IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;