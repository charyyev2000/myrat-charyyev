import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { Link } from "react-scroll";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const NavIcon = css`
  font-size: clamp(25px, 4vw, 40px);
  transition: 0.2s;
  color: ${({ theme }) => theme.circle};

  &:hover {
    scale: 1.1;
  }
`;

export const NavbarContainer = styled(motion.aside)`
  ${NavIcon};
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  padding: 5px;
  background: rgba(255, 255, 255, 0);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  box-shadow: 0 10px 40px black;
  background: ${({ theme }) => theme.body};

  &:hover {
    scale: 1;
  }

  a {
    // margin: 0;
    // padding: 0;
    line-height: 1;
  }

  @media only screen and (max-width: 700px) {
    left: 50%;
    transform: translate(-50%, -50%);
    // bottom: 0;
    top: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    a {
      margin: 0 3px;
    }

    hr {
      display: none;
      -ms-transform: rotateY(90deg);
      -webkit-transform: rotateY(90deg);
      -moz-transform: rotateY(90deg);
      -o-transform: rotateY(90deg);
      transform: rotateY(90deg);
      // width:2px;
      // height: 30px;
      // display:block;
      //     margin: 0 5px;
    }
  }

  .active {
    color: ${({ theme }) => theme.effect};
    transition: all 0.4s;
    scale: 1.1;
  }

  hr {
    width: 30px;
    color: ${({ theme }) => theme.text};
    transform: translateY(-3px);
  }
`;

export const Links = styled(Link)`
  ${NavIcon}
`;

export const Linkedin = styled(AiFillLinkedin)`
  ${NavIcon}
`;
export const Github = styled(AiFillGithub)`
  ${NavIcon}
`;
