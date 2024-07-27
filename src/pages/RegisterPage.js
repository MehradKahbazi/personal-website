import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CustomTabPanel from '../components/CustomTabPanel';
import { Divider, Grid, Typography } from '@mui/material';
import CourseImage from '../assets/IMG_20240724_175552_623.jpg';
import RegisterForm from '../components/RegisterForm';


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const RegisterPage = () =>{
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="دوره Reactjs" {...a11yProps(0)} />
          <Tab label="دوره Ts و oop" {...a11yProps(1)} />
          <Tab label="دوره Nestjs" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container justifyContent='space-between' sx={{minHeight: '50vh'}}>
            <Grid item sm={12} lg={4} sx={{display:{xs: 'none', sm:'none', lg:'block'}}}>
                <img src={CourseImage} alt='avatar' width='100%' height='100%' style={{borderRadius:'7px'}}/>
            </Grid>
                <Divider orientation="vertical" flexItem sx={{ ml: "-50px" }}/>
            <Grid item sm={12} lg={7}>
                <Typography variant='h5'>دوره Reactjs</Typography>
                <RegisterForm />
            </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Technical Capabilities
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Hobbies
      </CustomTabPanel>
    </Box>
    )

}

export default RegisterPage;