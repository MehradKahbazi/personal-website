import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import cover from "../assets/bgi.jpg";
import { green } from "@mui/material/colors";
import Swal from "sweetalert2";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export default function RegisterForm() {
  const btnColor = green[500];
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateCaptcha(data.get("capcha"), false) == true) {
      const res = await fetch("https://personal-website-backend-lxs6.onrender.com/course-register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          nationalId: data.get("nationalId"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.message){
            Swal.fire({
              icon: "error",
              title: data.message,
              showConfirmButton: false,
              timer: 2000,
            });
          } else{
            Swal.fire({
              icon: "success",
              title: "ثبت نام با موفقیت انجام شد",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        }).catch(error =>{
          Swal.fire({
            icon: "error",
            title: "something went wrong",
            showConfirmButton: false,
            timer: 2000,
          });
        })
    } else {
      console.log('wrong capcha');
    }
  };

  const test = async () => {
    const res = await fetch("http://localhost:3000/course-register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName: "sample",
        lastName: "sample last",
        email: "sample@y.com",
        phone: "00000",
        nationalId: "98324938",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: 1,
            borderLeft: 1,
            borderRight: 1,
            borderColor: "grey.500",
            borderRadius: "16px",
            paddingBottom: "1.5rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <HowToRegOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ثبت نام اولیه
          </Typography>
          <Box
            component="form"
            id="data"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10} sm={6}>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="نام"
                  autoFocus
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="lastName"
                  label="نام خانوادگی"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="email"
                  label="ایمیل"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="phone"
                  label="شماره تلفن"
                  type="tel"
                  id="phone"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="nationalId"
                  label="کد ملی"
                  type="tel"
                  id="nationalId"
                />
              </Grid>
              {/* <Grid item xs={10}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}

              <Grid item xs={10}>
                <TextField
                  size="small"
                  fullWidth
                  name="capcha"
                  label="متن داخل تصویر را وارد کنید"
                  type="text"
                  id="nationalId"
                />
              </Grid>
              <Grid
                item
                xs={10}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <LoadCanvasTemplateNoReload />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      <Button
        // onClick={test}
        form="data"
        type="submit"
        fullWidth
        variant="contained"
        color="myBtn"
        sx={{ mt: 3, mb: 2 }}
      >
        ثبت
      </Button>
    </CacheProvider>
  );
}
