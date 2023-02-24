// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => { 

const [state, handleSubmit] = useForm("mwkjoynd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/mwkjoynd'>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
}
  

export default Contact;