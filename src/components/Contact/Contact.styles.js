import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.text};
  position: relative;
  transition: color 0.3s ease;

  form {
    display: flex;
    flex-direction: column;
    width: clamp(200px, 80vw, 800px);
    margin: 0 auto;
    text-align: left;
    // padding-top: 100px;
    margin: 0 auto;

    label {
      font-size: clamp(15px, 5vw, 30px);
      margin-top: 20px;
      font-weight: 600;

      span {
        position: relative;
        transition: all 0.3s ease;

        &::before {
          content: "";
          position: absolute;
          background: ${({ theme }) => theme.effect};
          top: 5px;
          left: 2px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
        @media screen and (max-width: 500px) {
          span::before {
            top: 0px;
            left: 0px;
          }
        }
        @media screen and (max-width: 300px) {
          span::before {
            top: 0px;
            right: 0px;
          }
        }
      }
    }

    input {
      padding: 10px;
      font-size: clamp(10px, 5vw, 20px);
      border: none;
      outline: none;
      background: none;
      color: ${({ theme }) => theme.text};
      border-bottom: 2px solid ${({ theme }) => theme.text};
      letter-spacing: 1px;
    }
    textarea {
      padding: 10px;
      font-size: clamp(15px, 5vw, 30px);
      border: none;
      outline: none;
      background: none;
      height: clamp(50px, 70vw, 200px);
      resize: vertical;
      color: ${({ theme }) => theme.text};
      border-bottom: 2px solid ${({ theme }) => theme.text};
      font-family: "Montserrat", sans-serif;
    }
    button {
      display: inline-block;
      background: ${({ theme }) => theme.body};
      margin: 30px auto;
      padding: 5px 60px;
      font-size: clamp(1.5rem, 4vw, 3rem);
      cursor: pointer;
      font-weight: 500;
      letter-spacing: 2px;
      border: 3px solid ${({ theme }) => theme.effect};
      // border: 3px solid black;
      color: ${({ theme }) => theme.text};
      transition: all 0.3s ease;
      margin-bottom: 70px;

      &:hover {
        background: ${({ theme }) => theme.effect};
        color: ${({ theme }) => theme.body};
        border: 3px solid ${({ theme }) => theme.effect};
      }
    }
  }
`;

export const Title = styled(motion.h1)`
  position: sticky;
  top: 0;
  right: 0;
  width: 200%;
  display: inline-block;
  margin-bottom: 0;
  transform-origin: 0% 0%;
  // left: 50px;
  z-index: -1;
  font-size: clamp(10rem, 12vw, 30rem);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  opacity: 0.7;
  user-select: none;
`;
