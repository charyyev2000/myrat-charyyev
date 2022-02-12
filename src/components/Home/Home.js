import React, { useEffect, useRef } from "react";
import {
  BgText,
  Container,
  // HomeBackgroundPic,
  HomeContainer,
  HomeHeader,
} from "./Home.styles";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitText from "../hooks/SplitText/Split3.min.js";

// import HomeBackground from "./codingVector.png";

const Home = ({ handleScroll, offsetY }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".HomeCircle"),
      {
        opacity: 0,
        scale: 0.2,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);
  // splittext animation
  useEffect(() => {
    const split = new SplitText(
      ".home-header",
      {
        type: "lines",
        linesClass: "lineChildren",
      },
      []
    );

    const splitParent = new SplitText(".home-header", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1.5,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  // scroll animation
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeContainer id="home" data-scroll-container>
      <div className="HomeCircle" ref={ref}></div>
      {/* <HomeBackgroundPic /> */}
      <BgText
      // ref={test}
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 0.3 }}
      // transition={{ duration: 1, type: "tween" }}
      // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <h1>Welcome</h1>
      </BgText>
      <Container className="center">
        <HomeHeader>
          <motion.h1
            className="home-header"
            transition={{
              delay: 0.3,
              duration: 2.5,
              type: "spring",
              stiffness: 120,
            }}
          >
            Myrat
            <br />
            Charyyev
            <motion.span
              initial={{ opacity: 0, y: "-50vw" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                type: "spring",
                // stiffness: 300,
                bounce: 0.5,
              }}
              className="span"
            >
              .
            </motion.span>
          </motion.h1>
          <div>
            <motion.h2 className="home-header2">Front-End Developer</motion.h2>
            <Link
              // initial={{ x: "-50vw", opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{ delay: 0.5, duration: 3, type: "tween" }}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={100}
              className="home_btn"
            >
              Learn More
            </Link>
          </div>
        </HomeHeader>
      </Container>
    </HomeContainer>
  );
};

export default Home;
