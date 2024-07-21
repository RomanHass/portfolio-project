import styled from "styled-components";
import { FlexWrapper } from "../../../compontens/FlexWrapper";
import { SectionTitle } from "../../../compontens/SectionTitle";
import { Skill } from "../skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify="space-between">
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
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #d8bbbb;
  min-height: 500px;
`