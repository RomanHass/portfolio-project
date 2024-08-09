import styled from "styled-components";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects";
import { Contact } from "../contacts/Contacts";
import { Hero } from "../hero/Hero";

export const Main = () => {
  return (
    <StyledMain>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
`
