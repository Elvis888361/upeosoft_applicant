import React, { useContext, useState } from "react";
import { ApplicantContext } from "./ApplicantContext";
//GENERAL
import { TextField, Grid } from "@material-ui/core";


export default props => {
  const [state] = useContext(ApplicantContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 15);
  const [kcse_certificate, setKcse_certificate] = useState("");
  const [pdfFile,setPDFFile]=useState(null);
  const [pdfIdFile,setPDFIdFile]=useState(null);
  const [pdfPassportFile,setPDFPassportFile]=useState(null);

  const fileType=['application/pdf']
  const previewFile =(e)=>{
    let selectedFile=e.target.files[0]
    if(selectedFile){
      if(selectedFile && fileType.includes(selectedFile.type)){
        let reader=new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload=(e)=>{
          setKcse_certificate(e.target.result)
        }
      }else{
        setKcse_certificate(null)
      }
    }
    else{
      console.log("Please Select")
    }
  }
  user.kcse_certificate = kcse_certificate;
  const handleChange1 =(e)=>{
    let selectedFile=e.target.files[0]
    if(selectedFile){
      if(selectedFile && fileType.includes(selectedFile.type)){
        let reader=new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload=(e)=>{
          setPDFFile(e.target.result)
        }
      }else{
        setPDFFile(null)
      }
    }
    else{
      console.log("Please Select")
    }
  }
  user.pdfFile=pdfFile
  const handleChangeId =(e)=>{
    let selectedFile=e.target.files[0]
    if(selectedFile){
      if(selectedFile && fileType.includes(selectedFile.type)){
        let reader=new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload=(e)=>{
          setPDFIdFile(e.target.result)
        }
      }else{
        setPDFIdFile(null)
      }
    }
    else{
      console.log("Please Select")
    }
  }
  
  user.pdfIdFile=pdfIdFile
  const handleChangePassport =(e)=>{
    let selectedFile=e.target.files[0]
    if(selectedFile){
      if(selectedFile && fileType.includes(selectedFile.type)){
        let reader=new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload=(e)=>{
          setPDFPassportFile(e.target.result)
        }
      }else{
        setPDFPassportFile(null)
      }
    }
    else{
      console.log("Please Select")
    }
  }
  user.pdfPassportFile=pdfPassportFile
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <TextField
          type='file'
          inputProps={{ accept: '.pdf' }}
          variant='outlined'
          margin='normal'
          onChange={previewFile}
          helperText='Upload Scanned Certificate'
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
          inputProps={{ accept: '.pdf' }}
          value={user.high_school_leaving_certificate}
          type='file'
          onChange={handleChange1}
          variant='outlined'
          margin='normal'
          helperText='Upload Scanned Certificate'
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
          inputProps={{ accept: '.pdf'}}
          defaultValue={user.national_id}
          variant='outlined'
          onChange={handleChangeId}
          margin='normal'
          helperText='Upload Scanned Image'
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
          inputProps={{ accept: '.pdf' }}
          onChange={handleChangePassport}
          type='file'
          variant='outlined'
          helperText='Upload Scanned Image'
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
