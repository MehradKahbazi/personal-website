import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Divider, Grid } from "@mui/material";
import Button from "@mui/material/Button";

const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await fetch(
      "http://localhost:3000/auth/signin",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: data.get("userName"),
          password: data.get("password"),
        }),
      }
    );
    const token = await res.json()
    localStorage.setItem('token', JSON.stringify(token.accessToken))
  };

  // const test = () =>{
  //     console.log('test');
  // }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Grid
        item
        sx={{
          width: "40%",
          height: "40%",
          borderTop: 1,
          borderLeft: 1,
          borderRight: 1,
          borderColor: "grey.500",
          borderRadius: "16px",
          paddingBottom: "1.5rem",
        }}
      >
        <Box
          component="form"
          id="data"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "70%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleLogin}
        >
          <TextField
            fullWidth
            id="userName"
            name="userName"
            label="User Name"
            //   defaultValue="Hello World"
            variant="standard"
          />

          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <Divider sx={{ marginTop: "3vh" }} />
          <Button
            // onClick={test}
            form="data"
            type="submit"
            fullWidth
            variant="contained"
            color="myBtn"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
