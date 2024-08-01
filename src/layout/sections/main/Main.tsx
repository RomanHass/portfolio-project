import styled from "styled-components";
import { Container } from "../../../compontens/Container";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects";
import { Contact } from "../contacts/Contacts";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Skills/>
        <Projects/>
        <Contact/>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
`
