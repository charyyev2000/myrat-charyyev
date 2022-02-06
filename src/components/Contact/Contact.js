import React, { useEffect, useRef, useState } from "react";
import { AboutContainer, Title } from "./Contact.styles";
import emailjs from "emailjs-com";
import gsap from "gsap";

const About = () => {
  const test = useRef();

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
    <AboutContainer className="center" id="contact" data-scroll-container>
      {/* <div style={{ position: "absolute" }}> */}
      <Title ref={test}>Contact</Title>
      {/* </div> */}
      <form action="" onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input
          required
          placeholder="What is your name?"
          type="text"
          name="fullName"
          id="name"
        />
        <label htmlFor="email">
          Ema<span>ı</span>l
        </label>
        <input
          required
          placeholder="Your best email address"
          type="text"
          name="email"
          id="email"
        />
        <label htmlFor="phone_number">Phone Number</label>
        <input
          required
          placeholder="Your phone number"
          type="text"
          name="phone"
          id="phone"
        />
        <label htmlFor="message">Message</label>
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
