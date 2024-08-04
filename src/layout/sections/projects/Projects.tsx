import ProjectOne from '../../../assets/images/project_1.jpg';
import ProjectTwo from '../../../assets/images/project_2.jpg';
import ProjectThree from '../../../assets/images/project_3.jpg';

import styled from "styled-components";
import { SectionTitle } from "../../../compontens/SectionTitle";
import { Project } from "./Project/Project";

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <Project 
        title={"Project Name"} 
        text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} 
        src={ProjectOne} 
        link={"View Project"}
      />
      <Project 
        title={"Project Name"} 
        text={"What was your role, your deliverables, if the project was personal, freelancing."} 
        src={ProjectTwo} 
        link={"View Project"}
        reverse
      />
      <Project 
        title={"Project Name"} 
        text={"You can also add in this description the type of the project, if it was for web, mobile, electron."} 
        src={ProjectThree} 
        link={"View Project"}
      />
    </StyledProjects>
  );
};


const StyledProjects = styled.section``