import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { GlobalStyle, darkTheme, lightTheme } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import About from "./components/About/About";
import useLocoScroll from "./components/hooks/useLocoScroll";

function App() {
  useLocoScroll();

  // dark/light theme
  const [theme, setTheme] = useState("dark");
  // scroll animation
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  //   darkTheme
  //save to localStorage
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div id="main">
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {/* <ReactLoading type={"bars"} color={"green"} height={100} width={100} /> */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Home offsetY={offsetY} handleScroll={handleScroll} />
        <About />
        <Projects offsetY={offsetY} handleScroll={handleScroll} />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
