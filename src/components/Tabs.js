import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CustomTabPanel from './CustomTabPanel';
import { Divider, Grid, Typography } from '@mui/material';
import sampleImage from "../assets/paella.jpg";




function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Technical Capabilities" {...a11yProps(1)} />
          <Tab label="Hobbies" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container justifyContent='space-between' sx={{minHeight: '50vh'}}>
            <Grid item sm={12} lg={4}>
                <img src={sampleImage} alt='avatar'/>
            </Grid>
                <Divider orientation="vertical" flexItem sx={{ ml: "-50px" }}/>
            <Grid item sm={12} lg={7}>
                <Typography variant='h5'>About Me</Typography>
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
  );
}