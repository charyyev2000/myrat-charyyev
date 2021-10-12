import React from "react";
import { NavbarData } from "./Navbar.data";
import { Links, NavbarContainer, Github, Linkedin } from "./Navbar.styles";
import { Toggle } from "./Toggle";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <NavbarContainer
        //     initial={{ x: "-50vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 0.3 }}
        // transition={{ delay: 0.5, duration: 3, type: "tween" }}

    >
      {NavbarData.map((data) => {
        return (
          <Links
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
      <hr/>
      <a href="https://github.com/charyyev2000" title="Github" target="_blank">
        <Github />
      </a>
      <a
        href="https://linkedin.com/in/myrat-charyyev"
        title="LinkedIn"
        target="_blank"
      >
        <Linkedin />
      </a>
      <hr />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </NavbarContainer>
  );
};

export default Navbar;
