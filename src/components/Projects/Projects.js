import React, { useEffect, useState } from "react";
import { ProjectsData } from "./Projects.data";
import { Container, LeftSection, RightSection, Title } from "./Projects.styles";
import {
  AnimatePresence,
  AnimateSharedLayout,
  useAnimation
} from "framer-motion";
import Project from "./Project/Project";
import { ProjectsContainer } from "./Projects.styles";
// import useInView from "use-in-view";

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

  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  return (
    <AnimateSharedLayout type="crossfade" data-scroll-container>
      <ProjectsContainer className="center" id="projects">
        <Title
          className="title"
          style={{ transform: `translateY(${offsetY * 0.01}px)` }}
        >
          Pro
          <span className="span">j</span>
          ects
        </Title>
        {ProjectsData.map((item, i) => {
          return (
            <Container
              // inview
              // ref={ref}
              // animate={controls}
              layoutId={item.id}
              onClick={() => expander(item.id)}
              key={item.id}
              // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              custom={i}
              variants={{
                hidden: (i) => ({
                  opacity: 0
                  // y: -50 * i
                }),
                visible: (i) => ({
                  opacity: 1,
                  // y: 0,
                  transition: {
                    delay: i * 0.5
                  }
                })
              }}
              initial="hidden"
              animate="visible"
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
                  alt={item.id}
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
