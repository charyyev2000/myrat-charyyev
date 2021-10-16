import React, { useEffect } from "react";
import { BgText, Container, HomeContainer, HomeHeader } from "./Home.styles";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = ({ handleScroll, offsetY }) => {
  // scroll animation
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HomeContainer id="home">
      <BgText
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 1, type: "tween" }}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <h1>Welcome</h1>
      </BgText>
      <Container className="center">
        <HomeHeader>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              originX: 0,
              transition: { delay: 1, duration: 2 }
            }}
            className="home-header"
            // transition={{
            //   delay: 0.3,
            //   duration: 2.5,
            //   type: "spring",
            //   stiffness: 120
            // }}
          >
            Myrat
            <br />
            Charyyev
            <motion.span
              initial={{ opacity: 0, y: "-50vw" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 5,
                type: "spring",
                // stiffness: 300,
                bounce: 0.5
              }}
              className="span"
            >
              .
            </motion.span>
          </motion.h1>
          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: "-100px"
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 3.5,
                  duration: 0.5
                }
              }}
            >
              Front-End Developer
            </motion.h2>
            <Link
              // initial={{ x: "-50vw", opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{ delay: 0.5, duration: 3, type: "tween" }}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={100}
              // className="home_btn"
            >
              <motion.div
                className="home_btn"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1, type: "tween" }}
              >
                Learn More
              </motion.div>
            </Link>
          </div>
        </HomeHeader>
      </Container>
    </HomeContainer>
  );
};

export default Home;
