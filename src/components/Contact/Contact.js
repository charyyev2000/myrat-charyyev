import React, { useState } from "react";
import { AboutContainer, Title } from "./Contact.styles";
import emailjs from "emailjs-com";

const About = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ek59krf",
        "template_bqy8p6d",
        e.target,
        "user_9reIGATqRjyyMa38i2t8d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <AboutContainer className="center" id="contact">
      <Title>Contact</Title>
      <form action="" onSubmit={sendEmail}>
        <label for="name">Name</label>
        <input
          required
          placeholder="What is your name?"
          type="text"
          name="fullName"
          id="name"
        />
        <label for="email">
          Ema<span>ı</span>l
        </label>
        <input
          required
          placeholder="Your best email address"
          type="text"
          name="email"
          id="email"
        />
        <label for="phone_number">Phone Number</label>
        <input
          required
          placeholder="Your phone number"
          type="text"
          name="phone"
          id="phone"
        />
        <label for="message">Message</label>
        <textarea
          required
          cols="30"
          rows="10"
          placeholder="What do you want to tell me?"
          name="message"
          id="message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {result ? alert("Thank you") : null}
    </AboutContainer>
  );
};

export default About;
