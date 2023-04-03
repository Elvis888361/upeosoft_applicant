import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
//REGISTER FORM
import ApplicationForm from "./ApplicationForm";
//HEADER
import Typography from "@material-ui/core/Typography";
//CONTEXT
import ApplicantContextProvider from "./ApplicationForm/ApplicantContext";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    alignContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start",
    },
  },
  header: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "rgb(47,33,95)",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(1),
  },
  titleWrap:{
    marginBottom:"40%"
  },
  subtitle: {
    color: theme.palette.primary.light,
  },
  toolbar: {
    justifyContent: "center",
  },
  imgs: {
    width: "50%",
    alignItem: "center",
  },
  align: {
    display: "flex",
    flexDirection: "column",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ApplicantContextProvider>
      <Grid container className={classes.root}>
        <Grid item className={classes.header} xs={12} md={4}>

            <div className={classes.titleWrap}>
              <img src="ittc_logo.png" alt="" className={classes.imgs} />
              <Typography variant="h6" className={classes.title}>
              International Teaching & Training Centre - ITTC
              </Typography>
            </div>
              
            <Typography variant="h5" className={classes.title}>
              Application Form
            </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Complete all 5 steps to finish Application process
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ApplicationForm />
        </Grid>
      </Grid>
    </ApplicantContextProvider>
  );
}

export default App;
