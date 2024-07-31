import styled from "styled-components";
import { Menu } from "../../compontens/menu/Menu";
import { Container } from "../../compontens/Container";

const items = ['About', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu menuItems={items}/>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``