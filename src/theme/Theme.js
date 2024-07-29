import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
      mode: "dark",
      myBtn: {
        main: green.A400,
      }
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