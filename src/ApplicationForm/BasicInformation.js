import React, { useContext, useEffect, useState } from "react";
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
//CONTEXT
import { ApplicantContext } from "./ApplicantContext";

export default (props) => {
  const [state] = useContext(ApplicantContext);
  const { user, errors } = state;
  const [salutation, setSalutation] = React.useState("");
  const [program, setProgram] = React.useState("");
  const [academic_year, setAcademic_year] = React.useState("");
  const [academic_term, setAcademic_term] = React.useState("");
  const [student_category, setStudent_Category] = React.useState("");

  const API_URL =
    "http://127.0.0.1:8003/api/method/upeoeducation.services.rest.";
  const handleChangeSalutation = (event) => {
    setSalutation(event.target.value);
    user.salutation = event.target.value;
  };
  const handleChangeProgram = (event) => {
    setProgram(event.target.value);
    user.program = event.target.value;
  };
  const handleChangeAcademic_Year = (event) => {
    setAcademic_year(event.target.value);
    user.academic_year = event.target.value;
  };
  const handleChangeAcademic_Term = (event) => {
    setAcademic_term(event.target.value);
    user.academic_term = event.target.value;
  };
  const handleChangeStudent_Category = (event) => {
    setStudent_Category(event.target.value);
    user.student_category = event.target.value;
  };
  const [programs, setPrograms] = useState([]);
  const [salutations, setSalutations] = useState([]);
  const [academic_years, setAcademic_Years] = useState([]);
  const [academic_terms, setAcademic_Terms] = useState([]);
  const [student_categories, setStudent_Categories] = useState([]);
  useEffect(() => {
    async function fetchProgramData() {
      const response = await axios.get(API_URL + "get_programs");
      const data = JSON.parse(response.data.message);
      setPrograms(data);
    }
    fetchProgramData();
  }, []);
  useEffect(() => {
    async function fetchSalutationData() {
      const response = await axios.get(API_URL + "get_salutations");
      const data = JSON.parse(response.data.message);
      setSalutations(data);
    }
    fetchSalutationData();
  }, []);
  useEffect(() => {
    async function fetchAcademic_YearData() {
      const response = await axios.get(API_URL + "get_academic_Years");
      const data = JSON.parse(response.data.message);
      setAcademic_Years(data);
    }
    fetchAcademic_YearData();
  }, []);
  useEffect(() => {
    async function fetchAcademic_TermData() {
      const response = await axios.get(API_URL + "get_academic_terms");
      const data = JSON.parse(response.data.message);
      setAcademic_Terms(data);
    }
    fetchAcademic_TermData();
  }, []);
  useEffect(() => {
    async function fetchStudent_CategoryData() {
      const response = await axios.get(API_URL + "get_category");
      const data = JSON.parse(response.data.message);
      setStudent_Categories(data);
    }
    fetchStudent_CategoryData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Salutation</InputLabel>
          <Select
            label="Salutation"
            id="demo-simple-select"
            value={salutation}
            onChange={handleChangeSalutation}
            name="salutation"
          >
            {salutations.map((salutation, index) => (
              <MenuItem key={index} value={salutation.salutation}>
                {salutation.salutation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={3}>
        <TextField
          placeholder="Type your firstname here"
          name="first_name"
          label="Firstname"
          text-transform='capitalize'
          value={user.first_name}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["first_name"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={3}>
        <TextField
          placeholder="Type your othername here"
          name="middle_name"
          label="Othername"
          value={user.middle_name}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["middle_name"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={4}>
      <TextField
          placeholder="Type your Surname here"
          name="last_name"
          label="Surname"
          value={user.last_name}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20,
          }}
          error={!!errors["last_name"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your email here"
          name="student_email_id"
          label="Email"
          value={user.student_email_id}
          type="email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["student_email_id"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your phone here"
          name="student_mobile_number"
          label="Phone"
          value={user.student_mobile_number}
          type="tel"
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
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder="Type your KCSE Grade here"
          name="kcse_grade"
          label="Kcse Grade"
          value={user.kcse_grade}
          type="text"
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors["kcse_grade"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="demo-simple-select-label">
            Student Category
          </InputLabel>
          <Select
            label="Student Category"
            id="demo-simple-select"
            required
            error={!!errors["student_category"]}
            value={student_category}
            onChange={handleChangeStudent_Category}
            name="student_category"
          >
            {student_categories.map((student_category, index) => (
              <MenuItem key={index} value={student_category.category}>
                {student_category.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Program</InputLabel>
          <Select
            label="Program"
            id="demo-simple-select"
            value={program}
            required
            error={!!errors["program"]}
            onChange={handleChangeProgram}
            name="program"
          >
            {programs.map((program, index) => (
              <MenuItem key={index} value={program.program_name}>
                {program.program_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} lg={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
          <Select
            label="Academic Year"
            id="demo-simple-select"
            required
            error={!!errors["academic_year"]}
            value={academic_year}
            onChange={handleChangeAcademic_Year}
            name="academic_year"
          >
            {academic_years.map((academic_year, index) => (
              <MenuItem key={index} value={academic_year.academic_year_name}>
                {academic_year.academic_year_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Academic Term</InputLabel>
          <Select
            label="Academic Term"
            required
            error={!!errors["academic_term"]}
            id="demo-simple-select"
            value={academic_term}
            onChange={handleChangeAcademic_Term}
            name="academic_term"
          >
            {academic_terms.map((academic_term, index) => (
              <MenuItem key={index} value={academic_term.term_name}>
                {academic_term.term_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
