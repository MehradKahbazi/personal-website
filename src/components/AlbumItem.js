import {
    Typography,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    
  } from "@mui/material";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import ShareIcon from "@mui/icons-material/Share";
  import CardImage from "../assets/paella.jpg";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";


const AlbumItem = () =>{
    return(
        <Grid item sm={12} lg={3}>
                <Card sx={{ maxWidth: 345, boxShadow: 5, backgroundColor: grey[900] }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={CardImage}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                </Grid>
    )
}

export default AlbumItem;