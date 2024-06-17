import { Typography, Grid, Container, Button, Paper } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Photo Album
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        This is a demo photo album application buit with react and styled with
        mui
      </Typography>
      <div>
        <Grid container spacing={2} justifyContent="center" paddingBottom={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              see my photos
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              secondary action
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Header;
