import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled.section`
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 35px;
  row-gap: 25px;
  // padding: 350px 0;
  // padding: clamp(100px, 30vw, 250px) 0;
  position: relative;
  // background: red;
  // position: relative;
`;

export const Title = styled(motion.h1)`
  position: sticky;
  // position: absolute;
  top: 0;
  left: -100px;
  width: 100%;
  // text-align: left;
  font-weight: 900;
  font-size: clamp(10rem, 12vw, 30rem);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  transform: translateX(-100px);
  color: ${({ theme }) => theme.text};
  pointer-events: none;
  user-select: none;
  // opacity: 0.5;

  @media only screen and (max-width: 1000px) {
    transform: translateX(-70px);
  }

  .span {
    position: relative;
    transition: all 0.3s ease;
    display: inline;
    // background-color: red;
    // color: red;

    // &::after {
    //   content: "ȷ";
    //   position: absolute;
    //   display: flex;
    //   // z-index: 2;
    //   // color: ${({ theme }) => theme.text};
    //   color: green;
    //   // top: 0;
    // }

    // &::before {
    //   content: "";
    //   position: absolute;
    //   background: ${({ theme }) => theme.effect};
    //   top: 30px;
    //   left: clamp(1px, 2%, 10px);
    //   width: clamp(5px, 5vw, 40px);
    //   height: clamp(5px, 5vw, 40px);
    //   border-radius: 50%;
    // }
  }

  // &::after {
  //   position: absolute;
  //   content: ".";
  //   background: red;
  //   top: 0;
  //   left: 50%;
  //   height: min-content;
  // }
`;

export const Container = styled(motion.div)`
  width: min(600px, 90vw);
  // width: clamp(300px, 90vw, 600px)
  // height: min(300px, 90vh);
  height: 300px;
  // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.projectBg};
  color: ${({ theme }) => theme.projectText};
  position: relative;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  transition: background 0.3s;
  // transition: color 0.3s;
  padding: 10px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  &::after {
    position: absolute;
    content: "Tap for more information";
    inset: 0;
    background-color: #000;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    transition: all 0.5s;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
    cursor: pointer;
  }
`;

export const LeftSection = styled(motion.div)`
  width: clamp(100px, 50%, 400px);
  height: 100%;
  border-radius: 10px 0 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  // position: relative;

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

      li {
        font-size: clamp(10px, 2vw, 20px);
        margin-left: 10px;
      }
    }
  }

  h1 {
    text-align: center;
    font-size: clamp(20px, 2.5vw, 25px);
    margin-bottom: 15px;
  }

  .stacks h3 {
    font-size: clamp(15px, 1.8vw, 20px);
    font-weight: 500;
    // margin-bottom: 5px;
  }

  ul {
    li {
      display: inline-block;
      margin-right: 10px;
      font-size: clamp(10px, 1.5vw, 15px);
      margin-bottom: 5px;
      user-select: none;
      list-style: none;

      a {
        color: blue;
        // font-style: italic;
      }
    }
  }

  .comment p {
    font-size: clamp(10px, 2vw, 15px);
    font-style: italic;
    opacity: 0.7;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
      transform: translateY(-5px);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    // margin-bottom: 10px;
    // justify-content: space-between;
    // background: red;

    @media screen and (max-width: 400px) {
      display: block;
      flex-direction: column;
    }
  }
  .button {
    width: min(90px, 16vw);
    font-size: clamp(0.5em, 3vw, 1em);
    // font-size:clamp(40px, 4vw, 5em);
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
    color: #fff;
    padding: 8px 14px;
    border-radius: 10px;
    width: 90px;
    height: min-content;

    @media screen and (max-width: 700px) {
    }

    @media screen and (max-width: 400px) {
      width: 100%;

      &:nth-child(1) {
        margin-bottom: 10px;
      }
    }
  }
`;

export const RightSection = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-shadow: 0 0px 10px black;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;
