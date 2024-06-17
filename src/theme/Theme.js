import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
      mode: "dark",
    },
    components:{
      MuiToolbar:{
        variants:[
          {
            props:{ variant: 'myVariant'},
            style:{
              display: "flex",
              justifyContent: 'space-between',
              height: '10vh'
            }
          }
        ]
      }
    }
  });