import React from "react";
import { useState } from "react";
import axios from 'axios';

const API_URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/ ';

export default function Form(){

    const [formValues, setFormValues] = useState({ name: '', email: ''});

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormValues({...formValues, [name]: value});
    };

    const handleOnSubmit = (event) => {
		event.preventDefault();

        axios.post(API_URL, formValues).then(
  (res) => {
    console.log('Axios:',res);
    console.log('Axios data:',res.data);
  }).catch((err) => { console.log('Axios Error:', err); });

  setFormValues({
      name: '',
      email: ''
  })
    };
    
    return (
        <form id="forms" onSubmit={handleOnSubmit}>
            <input type='text' name="name" placeholder="Your Name" onChange={handleInputChange} value={formValues.name} />
            <input type='text' name="email" placeholder="Your email" onChange={handleInputChange} value={formValues.email} />
            <input id="send" value='Send' type='submit' />
        </form>
    );
}