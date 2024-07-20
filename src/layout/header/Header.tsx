import styled from "styled-components";
import { Menu } from "../../compontens/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Menu/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: bisque;
`