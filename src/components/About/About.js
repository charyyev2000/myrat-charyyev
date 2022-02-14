import React, { useEffect, useRef } from "react";
import {
  AboutContainer,
  Header,
  LeftSection,
  RightSection,
  Title,
} from "./About.styles";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const animeRef = useRef();

  // useEffect(() => {
  //   gsap.from(animeRef.current, {
  //     // opacity: 0,
  //     y: -200,
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: animeRef.current,
  //       markers: true,
  //       scrub: true,
  //       // start: "top center",
  //       // end: "bottom top",
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   gsap.from(animeRef.current, {
  //     opacity: 0,
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: animeRef.current,
  //       start: "top bottom",
  //       end: "top top",
  //     },
  //   });
  // }, []);

  return (
    <AboutContainer className="center" id="about" data-scroll-container>
      <Title>About Me</Title>
      <div className="content">
        <div ref={animeRef} className="leftSection">
          <h2>Get to know me!</h2>
          <p>
            I am Front-End Developer building the Front-End Websites and Web
            Applications that leads to the success of the overall product. Check
            out some of my work in the Projects section I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
        </div>
        <RightSection>
          <h2>My Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SCSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>TypeScript</li>
            <li>Node Js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Figma</li>
            <li>PhotoShop</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </RightSection>
      </div>
    </AboutContainer>
  );
};

export default About;
