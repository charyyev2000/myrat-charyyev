import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: #000000e1;
  margin: 0 auto;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(motion.h1)`
  text-align: center;
  width: 100%;
  font-size: clamp(20px, 3vw, 30px);
  user-select: none;
  // white-space: nowrap;
`;

export const ProjectContainer = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${({ theme }) => theme.body};
  position: relative;
  padding: 10px;
  width: clamp(300px, 70vw, 1100px);
  height: clamp(300px, 70vh, 600px);
  // background: ${({ theme }) => theme.effect};
  color: ${({ theme }) => theme.projectText};
  border-radius: 20px;
  display: flex;
  // overflow: hidden;

  @media screen and (max-width: 700px) {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }

  // .test {
  //   width: 100%;
  //   height: 100%;
  //   position: relative;
  //   display: block;
  // }

  .back-btn {
    position: absolute;
    top: -30px;
    right: -30px;
    // top: 0;
    // right: 0;
    font-size: clamp(1rem, 3vw, 2rem);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background: #fff;
    z-index: 70;
    box-shadow: 0 0px 10px black;
  }
`;

export const LeftSection = styled(motion.div)`
  width: clamp(100px, 45%, 450px);
  height: 100%;
  // border-right: 1px solid black;
  // border-radius: 10px 0 0 10px;
  position: relative;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.body};

  // @media screen and (max-width: 1000px) {
  //   padding: 0 10px;
  // }

  @media screen and (max-width: 700px) {
    height: 50%;
    width: 100%;

    .stacks {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      display: flex;
      justify-content: center;
      // margin-top: 5px;

      li {
        padding-left: 10px;
      }
    }
  }

  .stacks {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: clamp(15px, 2vw, 25px);
      // margin-bottom: 10px;
      font-weight: 700;
      display: inline-flex;
      pointer-events: none;
    }

    li {
      font-size: clamp(10px, 2vw, 20px);
      margin-bottom: 5px;
      user-select: none;
      list-style: none;
    }
  }

  .comment p {
    font-size: clamp(10px, 2vw, 20px);
    font-style: italic;
    opacity: 0.7;
    user-select: none;
  }

  .buttons {
    display: flex;
    // margin-bottom: 10px;
    justify-content: space-around;

    @media screen and (max-width: 400px) {
      display: flex;
      display: inline-flex;
    }
  }
  .button {
    // width: min(170px, 16vw);
    font-size: clamp(1em, 2.5vw, 2.5em);
    color: #fff;
    text-decoration: none;
    background: #162936;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    // color: #fff;
    padding: 8px 14px;
    border-radius: 10px;
    box-shadow: 0 0px 20px black;
  }

  .languages {
    display: flex;
    flex-direction: column;
    pointer-events: none;

    .progressBar {
      display: flex;
      width: 100%;
      height: 10px;
      border-radius: 10px;
      overflow: hidden;

      span {
        margin: 0 1px;
      }
    }
  }

  .tools {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    white-space: wrap;
  }

  .percentage {
    margin: 0 10px;
    font-weight: 300;
    user-select: none;
  }

  .tool {
    display: flex;
    align-items: center;
    // margin-right: 30px;
    height: min-content;
    user-select: none;

    @media screen and (max-width: 700px) {
      margin-bottom: 5px;
    }

    span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
`;

export const RightSection = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-shadow: 0 0px 10px black;
  border-radius: 15px;

  // transition: box-shadow 0.3s ease;
  // &:hover {
  //   box-shadow: 0 0px 10px black;
  // }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  @media screen and (max-width: 700px) {
    margin-top: 5px;
  }
`;
