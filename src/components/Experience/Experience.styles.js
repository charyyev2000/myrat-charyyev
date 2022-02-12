import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.h1)`
  //   position: absolute;
  top: 0;
  left: 200px;
  width: 100%;
  font-weight: 900;
  font-size: clamp(10rem, 12vw, 30rem);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  transform: translateX(-100px);
  color: ${({ theme }) => theme.text};
  pointer-events: none;
  font-family: "Poppins", sans-serif;
  user-select: none;
  opacity: 0.2;

  @media only screen and (max-width: 1000px) {
    transform: translateX(-70px);
  }
`;

export const ExperienceStyled = styled.section`
  margin-top: 100px;
  .workPlace {
    width: 60vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    // justify-content: center;

    @media screen and (max-width: 475px) {
      width: 80vw;
    }

    h1 {
      font-size: clamp(20px, 4vw, 50px);
      white-space: nowrap;
      color: ${({ theme }) => theme.text};
    }
    a {
      font-size: clamp(10px, 2.5vw, 25px);
    }
    span {
      width: 100%;
      background: ${({ theme }) => theme.effect};
      height: 2px;
    }
    h2 {
      font-size: clamp(15px, 3.5vw, 35px);
      white-space: nowrap;
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const ProjectsContent = styled.div`
  position: relative;
  display: flex;
  width: 70vw;
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`;

export const ProjectImg = styled.div`
  background: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  max-width: 50%;
  height: 350px;
  border-radius: 15px;
  box-shadow: 10px 10px 50px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: all 0.3s ease;

  @media screen and (max-width: 640px) {
    position: absolute;
    min-width: 100%;
    max-height: 100%;
  }
`;

export const ProjectText = styled.div`
  width: 50%;
  //   margin-left: -150px;
  z-index: 1;
  height: min-content;
  margin: auto 0;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-left: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
  }

  a {
    text-align: right;
    width: 100%;
    font-size: clamp(30px, 5vw, 50px);
    padding-right: 20px;
    transition: all 0.3s ease;
    font-weight: 700;
    cursor: pointer;
    color: ${({ theme }) => theme.effect};

    @media screen and (max-width: 640px) {
      text-align: left;
      padding: 10px;
      color: ${({ theme }) => theme.iconSecondary};
    }
  }

  .projectContent {
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: clamp(15px, 2vw, 20px);
    color: white;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.5);
    // min-height: 250px

    @media screen and (max-width: 640px) {
      height: 100%;
      padding: 10px;
    }
  }

  .tools {
    display: flex;
    text-align: right;
    width: 100%;
    justify-content: flex-end;
    color: ${({ theme }) => theme.effect};

    p {
      color: ${({ theme }) => theme.secondary};
      text-decoration: none;
      font-size: clamp(15px, 2vw, 25px);
      white-space: nowrap;
      // text-align: right;
      margin-top: 10px;
      padding-right: 20px;

      @media screen and (max-width: 640px) {
        color: ${({ theme }) => theme.iconSecondary};
      }
    }
  }

  .sources {
    float: right;
    margin-top: 10px;
    a {
      color: ${({ theme }) => theme.secondary};
      font-size: clamp(25px, 2vw, 40px);
      margin-right: 20px;
      @media screen and (max-width: 640px) {
        color: ${({ theme }) => theme.iconSecondary};
      }
    }
  }
`;
