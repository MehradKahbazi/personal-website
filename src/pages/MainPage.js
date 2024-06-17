import { Container, Paper } from "@mui/material";
import BasicTabs from "../components/Tabs";
import { useEffect } from 'react';

const MainPage = () =>{

  useEffect(() =>{
   navigator.geolocation.getCurrentPosition( success =>{
    console.log(success.coords);
   })
    
  },[])

  return(
    <Container sx={{marginTop: '3rem'}}>
        <Paper>
        <BasicTabs />
        </Paper>
    </Container>
  )
}

export default MainPage;