import React, { useContext ,useRef,useState} from "react";
//GENERAL
import {  Grid } from "@material-ui/core";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { parsePhoneNumberFromString } from "libphonenumber-js";

//CONTEXT
import 'react-phone-number-input/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApplicantContext } from "./ApplicantContext";
import axios from "axios";

export default props => {
  const [state] = useContext(ApplicantContext);
  const { user} = state;
  const API_URL =
    "http://127.0.0.1:8003/api/method/upeoeducation.services.rest.create_phone_number";
  
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [isValid, setIsValid] = useState(false);
  const phoneInputRef = useRef(null);
  function handlePhoneNumberChange(value, country) {
    if (value.length === 0) {
      setIsValid(false);
      setPhoneNumbers('')
    } else if (country && country.dialCode) {
      let code="+"+ value
      const phoneNumberObj = parsePhoneNumberFromString(code, country.iso2);
      setIsValid(phoneNumberObj && phoneNumberObj.isValid());
      
    }
    setPhoneNumbers(value);
    
  }

  function handleBlur(event) {
    event.preventDefault();
    if (isValid) {
      user.student_mobile_number="+"+phoneNumbers
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
    } else {
      alert('Phone number is invalid');      
      setPhoneNumbers('')
    }
  }

  return (
    <Grid container spacing={2}>
        <Grid item xs={12} >
          <PhoneInput
            country={'us'}
            value={phoneNumbers}
            onChange={handlePhoneNumberChange}
            onBlur={handleBlur}
            ref={phoneInputRef}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
          />
        </Grid>
    </Grid> 
  );
};
