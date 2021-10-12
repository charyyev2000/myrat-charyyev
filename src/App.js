import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { GlobalStyle, darkTheme, lightTheme } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

function App() {
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
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home offsetY={offsetY} handleScroll={handleScroll} />
      <Projects offsetY={offsetY} handleScroll={handleScroll} />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
