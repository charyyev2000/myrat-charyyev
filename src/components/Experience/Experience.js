import React from "react";
import {
  ExperienceStyled,
  ProjectImg,
  ProjectsContent,
  ProjectText,
  Title,
} from "./Experience.styles";

import { Data } from "./Experience.data";

const Experience = () => {
  return (
    <ExperienceStyled id="about">
      <Title>Experience</Title>
      <div className="workPlace">
        <div style={{ textAlign: "center" }}>
          <h1>Sanly-Achar</h1>
          <a href="https://sanly-achar.com/">sanly-achar.com</a>
        </div>
        <span></span>
        <h2>
          Aprel.2021
          <br />
          Current
        </h2>
      </div>
      {Data.map((item, id) => {
        return (
          <ProjectsContent key={id}>
            <ProjectImg
              className="projectImg"
              bgImage={
                process.env.PUBLIC_URL + `/images/projects/${item.name}.jpg`
              }
            ></ProjectImg>

            <ProjectText>
              <a href={item.link} target="_blank">
                {item.name}
              </a>
              <p className="projectContent">{item.description}</p>

              <div className="tools">
                {item.tools.map((tool, i) => (
                  <p key={i}>{tool}</p>
                ))}
              </div>

              <div className="sources"></div>
            </ProjectText>
          </ProjectsContent>
        );
      })}
    </ExperienceStyled>
  );
};

export default Experience;
