import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset(); // clear the form

    emailjs
      .sendForm(
        "service_lj1tqd7",
        "template_1xeslie",
        form.current,
        "user_XeoAmDH8zQfTHvevf16uw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-box">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="form-label">Name</label>
        <input type="text" name="user_name" />
        <label className="form-label">Email</label>
        <input type="email" name="user_email" />
        <label className="form-label">Message</label>
        <textarea name="message" />
        <input className="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EmailForm;
