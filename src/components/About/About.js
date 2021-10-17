import React from "react";
import {
  AboutContainer,
  Header,
  LeftSection,
  RightSection,
  Title
} from "./About.styles";

const About = () => {
  return (
    <AboutContainer className="center">
      <Title>About Me</Title>
      <div>
        <LeftSection>
          <h2>Get to know me!</h2>
          <p>
            I am Front-End Developer building the Front-End Websites and Web
            Applications that leads to the success of the overall product. Check
            out some of my work in the Projects section I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
        </LeftSection>
        <RightSection>
          <h2>My Skills</h2>
        </RightSection>
      </div>
    </AboutContainer>
  );
};

export default About;
