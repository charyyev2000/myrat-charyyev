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

  body {
    // max-width: 100vw;
    // overflow-x: hidden;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    overflow-x: hidden;

  }
 
}

#main {
  overflow-x: hidden;
}

body {
    background: ${({ theme }) => theme.body};
    max-width: 100vw;
    font-family: "Montserrat", sans-serif;
    transition: background .7s ease;
    // overflow-x: hidden;

}

.center {
    width:clamp(300px, 90vw, 1400px);
    margin: 0 auto;

}

img {
  width: 100%;
}
`;

export const lightTheme = {
  body: "#082032",
  circle: "#2C394B",
  text: "rgba(255, 255, 255, 1)",
  shadow: "255, 255, 255",
  effect: "#FF4C29",
  projectText: "#fff",
  projectBg: "#334756",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  content: "hsl(228, 28%, 20%)",
  hover: "hsl(228, 28%, 40%)",
  icon: "#fff",
  navbarborder: "hsl(0,0%, 70%)",
  iconColor: "#fff",
  tag: "lightgrey",
};

export const darkTheme = {
  body: "rgb(255, 255, 255)",
  circle: "#2C394B",
  text: "rgba(0, 0, 0, 1)",
  shadow: "0, 0, 0",
  effect: "red",
  projectText: "#000",
  projectBg: "#fff",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  content: "hsl(227, 47%, 96%)",
  hover: "hsl(226, 47%, 90%)",
  navbarborder: "hsl(0,0%, 50%)",
  iconColor: "black",
  tag: "blue",
};
