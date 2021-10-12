import React, { useEffect, useState } from "react";
import { ProjectsData } from "./Projects.data";
import {
  Container,
  LeftSection,
  ProjectsSection,
  RightSection,
  Title
} from "./Projects.styles";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Project from "./Project/Project";
import { ProjectsContainer } from "./Projects.styles";

const Projects = ({ offsetY, handleScroll }) => {
  // scroll animation

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //ModalOpen
  const [modalOpen, setModalOpen] = useState(false);

  // test
  const [layoutId, setlayoutId] = useState(false);

  const expander = (id) => {
    if (modalOpen !== true) {
      setlayoutId(id);
      setModalOpen(true);
    } else {
      setlayoutId(null);
      setModalOpen(false);
    }
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <ProjectsContainer className="center" id="projects">
        <Title
          className="title"
          // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          Pro<span>j</span>ects
        </Title>
        {ProjectsData.map((item) => {
          return (
            <Container
              layoutId={item.id}
              onClick={() => expander(item.id)}
              key={item.id}
              // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
              <LeftSection>
                <h1>{item.header}</h1>
                <div className="stacks">
                  <h3>TechStacks:</h3>
                  <ul>
                    <li>{item.content}</li>
                    <li>{item.contentTwo}</li>
                    {item.contentThree ? <li>{item.contentThree}</li> : ""}
                    {item.contentFour ? <li>{item.contentFour}</li> : ""}
                    {item.contentFive ? <li>{item.contentFive}</li> : ""}
                  </ul>
                </div>
                <div className="comment">
                  <p>
                    {item.comment.length <= 50
                      ? item.comment
                      : `${item.comment.slice(0, 50)}...`}
                  </p>
                </div>
              </LeftSection>
              <RightSection>
                <img
                  src={process.env.PUBLIC_URL + `/images/${item.id}/1.jpg`}
                />
              </RightSection>
            </Container>
          );
        })}
        <AnimatePresence>
          {modalOpen && <Project expander={expander} id={layoutId} />}
        </AnimatePresence>
      </ProjectsContainer>
    </AnimateSharedLayout>
  );
};

export default Projects;
