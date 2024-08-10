import styled from "styled-components";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects";
import { Contact } from "../contacts/Contacts";
import { Hero } from "../hero/Hero";
import { theme } from "../../../styles/Theme";

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

  @media ${theme.media.sm} {
    padding-bottom: 100px;
  }
`
