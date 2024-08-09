import styled from "styled-components";
import { Menu } from "../../compontens/menu/Menu";
import { Container } from "../../compontens/Container";
import { MobileMenu } from "../../compontens/mobileMenu/MobileMenu";
import { theme } from "../../styles/Theme";

const items = ['About', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <StyledHeader>  
      <Container>
        <Menu menuItems={items}/>
        <MobileMenu menuItems={items}/>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 50px;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);

  @media ${theme.media.sm} {
    background-color: transparent;
  }
`