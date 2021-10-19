import React from "react";
import styled, { css } from "styled-components";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Logo = css`
  font-size: clamp(22px, 3.4vw, 35px);
  color: ${({ theme }) => theme.icon};
  // margin: 10px 5px;
  transition: 0.2s;

  &:hover {
    scale: 1.1;
    transition: 0.2s;
  }

  @media only screen and (max-width: 700px) {
    & {
      margin-left: 4px;
    }
  }
`;

const SunLogo = styled(BsSun)`
  ${Logo};
`;

const MoonLogo = styled(BsMoon)`
  ${Logo};
`;

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <SunLogo /> : <MoonLogo />}
    </div>
  );
};
