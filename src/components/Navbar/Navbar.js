import React from "react";
import { NavbarData } from "./Navbar.data";
import { Links, NavbarContainer, Github, Linkedin } from "./Navbar.styles";
import { Toggle } from "./Toggle";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <NavbarContainer
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{ duration: 0.5, delay: 4 }}
    >
      {NavbarData.map((data) => {
        return (
          <Links
            key={data.id}
            activeClass="active"
            to={data.id}
            // href={data.id}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            // delay={1000}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
            spyThrottle={100}
            // spyThrottle={500}
          >
            {data.icon}
          </Links>
        );
      })}
      <hr />
      <a
        href="https://github.com/charyyev2000"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href="https://linkedin.com/in/myrat-charyyev"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <hr />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </NavbarContainer>
  );
};

export default Navbar;
