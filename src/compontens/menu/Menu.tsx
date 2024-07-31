import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
        <FlexWrapper justify={"flex-end"} gap={"50px"}>
          {props.menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            )
          })}
        </FlexWrapper>
      </ul>
  </StyledMenu>
  );
};

const StyledMenu = styled.nav``