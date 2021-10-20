import React, { useState } from "react";
import {
  Backdrop,
  ProjectContainer,
  Title,
  LeftSection,
  RightSection
} from "./Project.styles.js";

import { ProjectsData } from "../Projects.data";
import { GrClose } from "react-icons/gr";
import BtnSlider from "./BtnSlider";

const Project = ({ id, expander }) => {
  // slide
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== 4) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 4) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(ProjectsData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const data = ProjectsData.find((item) => item.id === parseInt(id));

  return (
    <Backdrop
      onClick={expander}
      // transition={{ duration: 0.2, delay: 0.15 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <ProjectContainer
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        layoutId={id}
        className="test"
        key={data.id}
        // exit={{ transition: { duration: 0.15 } }}
        // style={{ pointerEvents: "auto" }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0, transition: { duration: 0.15 } }}
        // style={{ pointerEvents: "auto" }}
      >
        <div className="back-btn" onClick={expander}>
          <GrClose />
        </div>
        <LeftSection key={data.id}>
          <Title>{data.header}</Title>
          <div className="stacks">
            <h3>TechStacks:</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.content[1]}
                >
                  #{data.content[0]}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.contentTwo[1]}
                >
                  #{data.contentTwo[0]}
                </a>
              </li>
              {data.contentThree ? (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.contentThree[1]}
                  >
                    #{data.contentThree[0]}
                  </a>
                </li>
              ) : (
                ""
              )}
              {data.contentFour ? (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.contentFour[1]}
                  >
                    #{data.contentFour[0]}
                  </a>
                </li>
              ) : (
                ""
              )}
              {data.contentFive ? (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.contentFive[1]}
                  >
                    #{data.contentFive[0]}
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="comment">
            <p>{data.comment}</p>
          </div>

          <div className="languages">
            <h2>Languages</h2>
            <div className="progressBar">
              {data.langOne ? (
                <span
                  style={{
                    background: `${data.langOne[1]}`,
                    width: `${data.langOne[0]}%`
                  }}
                ></span>
              ) : (
                ""
              )}
              {data.langTwo ? (
                <span
                  style={{
                    background: `${data.langTwo[1]}`,
                    width: `${data.langTwo[0]}%`
                  }}
                ></span>
              ) : (
                ""
              )}
              {data.langThree ? (
                <span
                  style={{
                    background: `${data.langThree[1]}`,
                    width: `${data.langThree[0]}%`
                  }}
                ></span>
              ) : (
                ""
              )}
              {data.langFour ? (
                <span
                  style={{
                    background: `${data.langFour[1]}`,
                    width: `${data.langFour[0]}%`
                  }}
                ></span>
              ) : (
                ""
              )}
            </div>

            <div className="tools">
              {data.langOne ? (
                <div className="tool">
                  <span style={{ background: `${data.langOne[1]}` }}></span>
                  <h3>{data.langOne[2]}</h3>
                  <h3 className="percentage">{data.langOne[0]}%</h3>
                </div>
              ) : (
                ""
              )}
              {data.langTwo ? (
                <div className="tool">
                  <span style={{ background: `${data.langTwo[1]}` }}></span>
                  <h3>{data.langTwo[2]}</h3>
                  <h3 className="percentage">{data.langTwo[0]}%</h3>
                </div>
              ) : (
                ""
              )}
              {data.langThree ? (
                <div className="tool">
                  <span style={{ background: `${data.langThree[1]}` }}></span>
                  <h3>{data.langThree[2]}</h3>
                  <h3 className="percentage">{data.langThree[0]}%</h3>
                </div>
              ) : (
                ""
              )}
              {data.langFour ? (
                <div className="tool">
                  <span style={{ background: `${data.langFour[1]}` }}></span>
                  <h3>{data.langFour[2]}</h3>
                  <h3 className="percentage">{data.langFour[0]}%</h3>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="buttons">
            <a
              className="button"
              href={`${data.codePath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              see code
            </a>
            <a
              className="button"
              href={`${data.livePath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              see live
            </a>
          </div>
        </LeftSection>

        <RightSection>
          {ProjectsData.map((item, index) => {
            return (
              <div
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
                key={index}
              >
                <img
                  alt={item.id}
                  src={
                    process.env.PUBLIC_URL +
                    `/images/${data.id}/${index + 1}.jpg`
                  }
                />
              </div>
            );
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />

          <div className="container-dots">
            {Array.from({ length: 4 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </RightSection>
      </ProjectContainer>
    </Backdrop>
  );
};

export default Project;
