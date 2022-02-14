import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.section`
  background: ${({ theme }) => theme.body};
  max-width: 100vw;
  transition: background 0.7s ease;
  z-index: -3;

  h2 {
    font-size: clamp(15px, 3vw, 30px);
    margin-bottom: 10px;
    color: ${({ theme }) => theme.effect};

    @media screen and (max-width: 700px) {
      text-align: center;
    }
  }

  .content {
    display: flex;
    align-items: center;

    @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .leftSection {
    width: 50%;
    font-size: clamp(10px, 2.5vw, 20px);
    padding: 20px;
    user-select: none;
    z-index: 2;
    text-shadow: 0px 0px 100px black;
    color: ${({ theme }) => theme.text};

    @media screen and (max-width: 700px) {
      width: 100%;
      padding: 0;
      margin-bottom: 20px;
    }
  }
`;

export const LeftSection = styled(motion.div)`
  width: 50%;
  font-size: clamp(10px, 2.5vw, 20px);
  padding: 20px;
  user-select: none;
  z-index: 2;
  text-shadow: 0px 0px 100px black;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
`;
export const RightSection = styled(motion.div)`
  width: 50%;
  padding: 20px;
  overflow: hidden;
  color: ${({ theme }) => theme.text};

  h2 {
    color: ${({ theme }) => theme.effect};
    user-select: none;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      list-style: none;
      // padding: 5px 10px;
      margin: 5px;
      text-transform: uppercase;
      // font-size: 1.5rem;
      font-size: clamp(10px, 1vw, 15px);
      letter-spacing: 1px;
      color: #333;
      background-color: #f1f1f1;
      padding: 10px 20px;
      font-weight: 600;
      user-select: none;
      border-radius: 5px;
      z-index: 2;

      @media only screen and (max-width: 450px) {
        padding: 3px 5px;
      }
    }
  }
`;

export const Title = styled(motion.h1)`
  // position: sticky;
  top: 0;
  left: -100px;
  width: 100%;
  font-weight: 900;
  font-size: clamp(10rem, 12vw, 30rem);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  transform: translateX(-100px);
  color: ${({ theme }) => theme.text};
  pointer-events: none;
  user-select: none;
  opacity: 0.2;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;

  @media only screen and (max-width: 1000px) {
    transform: translateX(-70px);
  }
`;
