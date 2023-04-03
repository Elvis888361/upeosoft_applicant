import React, { createContext, useState } from "react";
export const ApplicantContext = createContext([{}, () => {}]);

export default props => {
  const [state, setState] = useState({
    user: {
      salutation: "",
      last_name:"",
      first_name:"",
      middle_name:"",
      student_email_id: "",
      student_mobile_number:"",
      kcse_grade:"",
      student_category:"",
      imagePreview:null,
      program:"",
      pdfFile:"",
      pdfIdFile:"",
      pdfPassportFile:"",
      phoneNumber:"",
      academic_year:"",
      academic_term:"",
      date_of_birth: new Date().toISOString().slice(0, 10),
      gender: "",
      address_1: "",
      city:"",
      nationality:"",
      country:"",
      kcse_certificate:"",
      high_school_leaving_certificate:"",
      national_id:"",
      image:"",
      acceptTerms: false,
      newsletter: false
    },
    errors: {}
  });
  return (
    <ApplicantContext.Provider value={[state, setState]}>
      {props.children}
    </ApplicantContext.Provider>
  );
};
