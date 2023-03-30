import React, { useContext ,useState} from "react";
import { ApplicantContext } from "./ApplicantContext";
//GENERAL
import { TextField, Grid } from "@material-ui/core";

//USER PREFERENCES
export default props => {
  const [state,setState] = useContext(ApplicantContext);
  const { user,errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 15);
  const [kcse_certificate, setKcse_certificate] = useState(null);
  const [trial,setTrial]=useState(null);
  const handleChangetext = (event) => {
    console.log("hello world");
  };
  const handleChangeKcse_Certificate = (event) => {
    const u = event.target.files[0];
    convertBase64(u)
  };

  const convertBase64 = (u) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(u)
      fileReader.onload = () => {
        resolve(fileReader.result);
        setKcse_certificate(fileReader.result)
        
        let t=fileReader.result

        this.setState.user({kcse_certificate:t})
        console.log(t);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  };
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
      <input type="text" name="kcse_cert" onChange={handleChangetext} value={kcse_certificate}/>
  
       <TextField
          type='file'
          inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
          name='kcse_certificate'
          label='Kcse Certificate'
          value={kcse_certificate}
          variant='outlined'
          margin='normal'
          onChange={handleChangeKcse_Certificate}
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["kcse_certificate"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          name='high_school_leaving_certificate'
          label='High School Leaving Certificate'
          value={user.high_school_leaving_certificate}
          type='file'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["high_school_leaving_certificate"]}
          fullWidth
        />
        </Grid>
        <Grid item xs={12} lg={6}>
       <TextField
          type='file'
          name='national_id'
          label='National Id'
          defaultValue={user.national_id}
          variant='outlined'
          margin='normal'
          helperText='If Applicable'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["national_id"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          name='image'
          label='Passport Image'
          value={user.image}
          type='file'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["image"]}
          fullWidth
        />
        </Grid>
    </Grid>
  );
};
