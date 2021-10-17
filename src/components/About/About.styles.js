import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.section`
  background: ${({ theme }) => theme.body};
  max-width: 100vw;

  div {
    display: flex;
    align-items: center;
  }
`;

export const LeftSection = styled(motion.div)`
  width: 50%;
`;
export const RightSection = styled(motion.div)``;

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
`;
