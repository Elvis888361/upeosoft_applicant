import React, { useContext, Fragment } from "react";
import { ApplicantContext } from "./ApplicantContext";
import { makeStyles } from "@material-ui/core/styles";

//GENERAL
import {
  Typography,
  Grid,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  summary: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2)
  }
}));
// SUMMARY COMPONENT
export default props => {
  const classes = useStyles();
  const [state] = useContext(ApplicantContext);
  const { salutation, last_name, first_name, middle_name, student_email_id, student_mobile_number,kcse_grade,student_category,program,academic_year,academic_term,date_of_birth,gender,address_1,city,nationality,country} = state.user;
  return (
    <Fragment>
      <Grid container className={classes.summary}>
        <Grid item xs={12}>
          <Typography variant='h4'>Confirm Your Aplication.</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Full Name</Typography>
          <Typography variant='body2'>{salutation+". "+last_name+" "+first_name+" "+middle_name}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Student Email</Typography>
          <Typography variant='body2'>{student_email_id}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Date of Birth</Typography>
          <Typography variant='body2'>{date_of_birth}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Student Mobile Number</Typography>
          <Typography variant='body2'>{student_mobile_number}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Gender</Typography>
          <Typography variant='body2'>{gender || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Kcse Grade</Typography>
          <Typography variant='body2'>{kcse_grade || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Student Category</Typography>
          <Typography variant='body2'>{student_category || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Program</Typography>
          <Typography variant='body2'>{program || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Address </Typography>
          <Typography variant='body2'>{address_1 || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Academic Year</Typography>
          <Typography variant='body2'>{academic_year || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Academic Term</Typography>
          <Typography variant='body2'>{academic_term || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>City</Typography>
          <Typography variant='body2'>{city || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Nationality</Typography>
          <Typography variant='body2'>{nationality || "-"}</Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant='h6'>Country</Typography>
          <Typography variant='body2'>{country || "-"}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.user.newsletter}
                color='primary'
                name='newsletter'
              />
            }
            label='Sign me up for Newsletter, to receive regular updates.'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.user.acceptTerms}
                required
                color='primary'
                name='acceptTerms'
              />
            }
            label='I accept terms and conditions'
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
