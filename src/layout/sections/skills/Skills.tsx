import styled from "styled-components";
import { FlexWrapper } from "../../../compontens/FlexWrapper";
import { SectionTitle } from "../../../compontens/SectionTitle";
import { Skill } from "./skill/Skill";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../compontens/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify="space-between" gap={"55px"}>
          <Skill iconId={"vscode"}/>
          <Skill iconId={"css"}/>
          <Skill iconId={"html"}/>
          <Skill iconId={"js"}/>
          <Skill iconId={"react"}/>
          <Skill iconId={"redux"}/>
          <Skill iconId={"git"}/>
          <Skill iconId={"github"}/>
          <Skill iconId={"sass"}/>
          <Skill iconId={"bootstrap"}/>
          <Skill iconId={"tailwind"}/>
          <Skill iconId={"greensock"}/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  @media ${theme.media.lg} {
    ${FlexWrapper} {
      column-gap: 35px;
    }
  }

  @media ${theme.media.sm} {
    ${FlexWrapper} {
      column-gap: 10px;
      row-gap: 50px;
      justify-content: space-around;
    }
  }

`