import { Outlet } from "react-router-dom";
import {
  CssBaseline,
  Container,
} from "@mui/material";

const RegisterLayout = () =>{
    return(
        <>
      <CssBaseline />
      <Container sx={{ minHeight: "90vh", direction: 'rtl' }} maxWidth={false} disableGutters>
        <Outlet />
      </Container>
       
    </>
    )
}

export default RegisterLayout;