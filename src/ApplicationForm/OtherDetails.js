import React, { useContext, useEffect, useState } from "react";
import { ApplicantContext } from "./ApplicantContext";
import { isWidthDown } from "@material-ui/core/withWidth";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [countrys, setCountrys] = useState('');
  const [regions, setRegions] = useState('');
  const handleCountrysChange = (val) => {
    setCountrys(val);
    user.country = val;
    setRegions(''); // Reset the region when a new country is selected
  };

  const handleRegionChange = (val) => {
    setRegions(val);
    user.city=val;
  };
  const [gender, setGender] = React.useState("");
  const API_URL =
    "http://127.0.0.1:8003/api/method/upeoeducation.services.rest.";

  const handleChangeGender = (event) => {
    setGender(event.target.value);
    user.gender = event.target.value;
  };

  const [genders, setGenders] = useState([]);
 
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

      
      <Grid item xs={12} >
    <Container>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Country:</Form.Label>
            <CountryDropdown
              value={countrys}
              onChange={handleCountrysChange}
              className="form-control"
              style={{ maxWidth: '100%' }}
              showDefaultOption={false}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Region:</Form.Label>
            <RegionDropdown
             country={countrys}
             value={regions}
             onChange={handleRegionChange}
              className="form-control"
              style={{ maxWidth: '100%' }}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
      </Grid>
    </Grid>
  );
};
