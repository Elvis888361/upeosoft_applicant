import React, { useContext ,useState} from "react";
//GENERAL
import {  Grid } from "@material-ui/core";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
//CONTEXT
import 'react-phone-number-input/style.css'
import { ApplicantContext } from "./ApplicantContext";
import axios from "axios";

export default props => {
  const [state] = useContext(ApplicantContext);
  const { user, errors } = state;
  const API_URL =
    "http://127.0.0.1:8002/api/method/upeoeducation.services.rest.create_phone_number";
  

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleCountryChange = (value) => {
    setCountryCode(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhoneNumber(phoneNumber, countryCode)) {
      alert("Invalid phone number!");
    } else {
      user.student_mobile_number=phoneNumber
      const phone_number=user.student_mobile_number
      async function post() {
        try {
         const response = await axios.post(API_URL, {phone_number:phone_number});
         console.log(response);
         return response.data;
        } catch (err) {
         throw(err);
        }
       }post();

    }
  };

  const isValidPhoneNumber = (phoneNumber, countryCode) => {
    try {
      const number = parsePhoneNumberFromString(phoneNumber, countryCode);
      return number ? number.isValid() : false;
    } catch (e) {
      return false;
    }
  };
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className="form-container">
        <label className="label" value={countryCode} onChange={(e) => handleCountryChange(e.target.value)}>
        </label>
    </div>
        <PhoneInput
          id="phone"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={handleSubmit}
          placeholder="Type your phone here"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["student_mobile_number"]}
          required
          fullWidth
        />
        </Grid>
      </Grid>
      
    
  );
  
};
