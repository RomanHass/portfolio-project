import styled from "styled-components";
import { Menu } from "../../compontens/menu/Menu";

const items = ['About', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <StyledHeader>
      <Menu menuItems={items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: bisque;
`