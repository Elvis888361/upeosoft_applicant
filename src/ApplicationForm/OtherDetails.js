import React, { useContext, useEffect, useState } from "react";
import { ApplicantContext } from "./ApplicantContext";
import { isWidthDown } from "@material-ui/core/withWidth";
//GENERAL
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@material-ui/core";
import axios from "axios";

//USER PREFERENCES
export default (props) => {
  const [state] = useContext(ApplicantContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 15);
  const [gender, setGender] = React.useState("");
  const [country, setCountry] = React.useState("");
  const API_URL =
    "http://127.0.0.1:8002/api/method/upeoeducation.services.rest.";
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    user.country = event.target.value;
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
    user.gender = event.target.value;
  };
  const [countries, setCountries] = useState([]);
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    async function fetchCountryData() {
      const response = await axios.get(API_URL + "get_countries");
      const data = JSON.parse(response.data.message);
      setCountries(data);
    }
    fetchCountryData();
  }, []);
  useEffect(() => {
    async function fetchGenderData() {
      const response = await axios.get(API_URL + "get_gender");
      const data = JSON.parse(response.data.message);
      setGenders(data);
    }
    fetchGenderData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <TextField
          type="date"
          name="date_of_birth"
          label="Date of birth"
          defaultValue={user.date_of_birth}
          helperText="You need to be at least 15 years old"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10),
          }}
          error={!!errors["date_of_birth"]}
          fullWidth={isWidthDown("sm")}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            label="Gender"
            
            id="demo-simple-select"
            value={gender}
            onChange={handleChangeGender}
            name="gender"
          >
            {genders.map((gender, index) => (
              <MenuItem key={index} value={gender.gender}>
                {gender.gender}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          type="text"
          name="address_1"
          label="Postal Code"
          defaultValue={user.address_1}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["address_1"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your Town here"
          name="city"
          label="City"
          value={user.city}
          type="text"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["city"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          type="text"
          name="nationality"
          label="Nationality"
          defaultValue={user.nationality}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["nationality"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            label="Country"
            id="demo-simple-select"
            value={country}
            onChange={handleChangeCountry}
            name="country"
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.country_name}>
                {country.country_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
