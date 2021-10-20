import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
  max-width: 100vw;


  @media only screen and (max-width: 600px) {
    // font-size: 50%;
    overflow-x: hidden;

  }
 
}

body {
    background: ${({ theme }) => theme.body};
    max-width: 100vw;
    font-family: "Montserrat", sans-serif;
    transition: background .7s ease;
    // overflow-x: hidden;

}

.center {
    // width: clamp(70%, 80vw,90%);
    width:clamp(300px, 90vw, 1400px);
    // width: 1400px;
    // width: 90%;
    margin: 0 auto;
    // overflow-x: hidden;
    // max-width: 100vw;

}

img {
  width: 100%;
}
`;

export const lightTheme = {
  body: "#2d2a2f",
  text: "rgba(255, 255, 255, 1)",
  shadow: "255, 255, 255",
  effect: "yellow",
  projectText: "#aea3a4",
  projectBg: "#1a1a1a",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  content: "hsl(228, 28%, 20%)",
  hover: "hsl(228, 28%, 40%)",
  icon: "#fff",
  navbarborder: "hsl(0,0%, 70%)",
  iconColor: "#fff",
  tag: "lightgrey"
};

export const darkTheme = {
  body: "rgb(255, 255, 255)",
  text: "rgba(0, 0, 0, 1)",
  shadow: "0, 0, 0",
  effect: "red",
  projectText: "#000",
  // projectBg: "rgb(23, 23, 23)",
  projectBg: "#fff",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  content: "hsl(227, 47%, 96%)",
  hover: "hsl(226, 47%, 90%)",
  navbarborder: "hsl(0,0%, 50%)",
  iconColor: "black",
  tag: "blue"
};
