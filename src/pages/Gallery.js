import { Grid, Container, Paper } from "@mui/material";
import AlbumItem from "../components/AlbumItem";
import Header from "../components/Header";
const Gallery = () => {
  const sample = [1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
    <main>
      <Paper>
        <Header />
        <Container>
          <Grid container paddingBottom={2} spacing={4} justifyContent="center">
            {sample.map((item) => (
              <AlbumItem key={item} />
            ))}
          </Grid>
        </Container>
      </Paper>
    </main>
  );
};

export default Gallery;
