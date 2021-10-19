import { motion } from "framer-motion";
import styled from "styled-components";
import HomeBackground from "./codingVector.png";

// export const HomeBackgroundPic = styled.div`
//   width: 100%;
//   height: 100px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   background-image: url(${HomeBackground});
// `;

export const HomeContainer = styled.section`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.text};
`;

export const BgText = styled(motion.h1)`
  position: absolute;
  // left: clamp(10%, 30vw, 30% );
  left: 30%;
  // top: clamp(7rem, 20vh, 15rem);
  opacity: 0.3;
  // font-size: 15rem;
  font-size: clamp(5rem, 15vw, 15rem);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  user-select: none;

  // background-image: url(${HomeBackground});
  // background-repeat: no-repeat;
  // background-size: contain;
  // float: right;

  @media only screen and (max-width: 600px) {
    left: 20%;
    top: 15%;
  }
`;

export const Container = styled.div`
  // width: clamp(90vw, 50%, 900px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  // position: relative;

  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 200px;
  //   height: 200px;
  //   background-image: radial-gradient(#000 20%, transparent 20%),
  //     radial-gradient(#000 20%, transparent 20%);
  //   // background-color: #e53935;
  //   background-position: 0 0, 50px 50px;
  //   background-size: 100px 100px;
  // }
`;

export const HomeHeader = styled.div`
  width: clamp(95vw, 1000px, 95vw);
  letter-spacing: 4px;

  .lineParent {
    overflow: hidden;
  }
  .lineChildren {
    transform: translate(0, 500px);
  }

  h1 {
    font-size: clamp(4rem, 15vw, 12rem);
    // font-size: 10rem;
    font-family: "Montserrat", sans-serif;
    transition: color 0.3s ease;
    margin-bottom: 10px;
    // position: relative;
  }

  .span {
    color: ${({ theme }) => theme.effect};
    display: inline-block;
    // transform: translateX(-20px);
    margin-left: -10px;
    z-index: 5;
  }

  div {
    transform: translateY(20px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      transform: translateY(-10px);
    }

    h2 {
      font-size: clamp(2rem, 8vw, 8rem);
      // font-size: 6rem;
      font-weight: 400;
      transition: color 0.3s ease;
      // margin-right: 200px;
      white-space: nowrap;

      // @media only screen and (max-width: 800px) {
      //   font-size: 5rem;
      // }
      // @media only screen and (max-width: 600px) {
      //   font-size: 4rem;
      // }
      @media only screen and (max-width: 450px) {
        white-space: unset;
        // margin-top: 10px;
      }
    }

    .home_btn {
      font-size: clamp(15px, 8vw, 20px);
      font-weight: 500;
      border: 3px solid ${({ theme }) => theme.effect};
      white-space: nowrap;
      position: relative;
      padding: 5px 30px;
      // transform: translateY(20px);
      margin-top: 10px;
      cursor: pointer;
      user-select: none;
      letter-spacing: 2px;
      // color: ${({ theme }) => theme.body};
      // background: ${({ theme }) => theme.text};
      transition: all 0.3s ease;
      // box-shadow: 1px 1px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   2px 2px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   3px 3px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   4px 4px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   5px 5px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   6px 6px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   7px 7px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   8px 8px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   9px 9px rgba(${({ theme }) => theme.shadow}, 0.1),
      //   10px 10px rgba(${({ theme }) => theme.shadow}, 0.09),
      //   11px 11px rgba(${({ theme }) => theme.shadow}, 0.08),
      //   12px 12px rgba(${({ theme }) => theme.shadow}, 0.07),
      //   13px 13px rgba(${({ theme }) => theme.shadow}, 0.06),
      //   14px 14px rgba(${({ theme }) => theme.shadow}, 0.05),
      //   15px 15px rgba(${({ theme }) => theme.shadow}, 0.04),
      //   16px 16px rgba(${({ theme }) => theme.shadow}, 0.03),
      //   17px 17px rgba(${({ theme }) => theme.shadow}, 0.02),
      //   17px 17px rgba(${({ theme }) => theme.shadow}, 0.01);

      &:hover {
        background: ${({ theme }) => theme.effect};
        color: ${({ theme }) => theme.body};
        border: 3px solid ${({ theme }) => theme.effect};
      }
    }

    @media only screen and (max-width: 1100px) {
      display: grid;

      .home_btn {
        // display: inline;
        margin-top: 40px;
        width: min-content;
      }
    }
    @media only screen and (max-width: 1100px) {
    }
  }
`;
