import React, { useContext } from "react";
//GENERAL
import { TextField, Grid } from "@material-ui/core";

//CONTEXT
import { ApplicantContext } from "./ApplicantContext";

export default props => {
  const [state] = useContext(ApplicantContext);
  const { user, errors } = state;

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          placeholder='Type your phone here'
          name='student_mobile_number'
          label='Phone'
          value={user.student_mobile_number}
          type='tel'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["student_mobile_number"]}
          required
          fullWidth
        />
      </Grid>

    </Grid>
  );
};
