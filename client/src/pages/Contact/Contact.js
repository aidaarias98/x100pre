//ADDING formik (npm install formik)
//allows us to make forms that are easier to validate etc
//gives errors automatically ^
//allows you to not have to do it manually with the html tags aka <required>

//ADDING yup (npm install yup)
//this allows us to validate info
//ex: if you been on a website saw a form that require a password btwn 10 characters or special character
//aka called form validation--yup allows us to do that easier

import React from 'react'
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import  './Contact.css';


function Contact() {

    const initialValues = {
        first_Name:"",
        last_Name:"",
        Email:"",
        Phone_Number:"",
    };

    //this is where we are using YUP for the from validation
    const validationSchema= Yup.object().shape({
        first_Name:Yup.string().required("Please enter first name"),
        last_Name:Yup.string().required("Please enter a last name"),
        Email:Yup.string().required("Please enter an email"),
        Phone_Number:Yup.string().min(10).max(15).required("Please enter phone number"),
    });

   
  return (
    <div className="contactcontainer">

   <Formik 
   initialValues={initialValues}  
   validationSchema={validationSchema}>

  
            <Form
             className="formContainer">

            <div className="contact-box">
            <div className='left'></div>
            <div className='right'>
            <h2 className='contacttitle'>Contact</h2>

                <Field 
                id="inputCreatePost" 
                name="first_Name" 
                placeholder="First Name"
                required
                />

                <Field  
                id="inputCreatePost"
                 name="last_Name" 
                 placeholder="Last Name"
                 required
                 />
                
                <Field  
                id="inputCreatePost" 
                name="Email" 
                placeholder="Email"
                required
                />

                <Field  
                id="inputCreatePost" 
                name="Phone_Number" 
                placeholder="Phone Number"
                required
                />

                <Field 
                name="topics" 
                as="select"
                id="inputCreatePost"
                required >
                <option value="">-Please pick an option-</option>
                <option value="records">Records</option>
                <option value="sell/trade">Selling/Trading</option>
                <option value="space">Music Room</option>
                <option value="questions">General Question</option>
                <option value="other">Other</option>
                </Field>
                
                <br>
                </br>
                <br></br>

                <button className='contactbtn' type="submit">Send</button>
                </div>
                </div>
                
            </Form>    
    </Formik>
   
       </div>
  );
}

export default Contact