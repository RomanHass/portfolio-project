import styled from "styled-components";
import { Menu } from "../../compontens/menu/Menu";
import { Container } from "../../compontens/Container";

const items = ['About', 'Projects', 'Contacts'];

export const Header = () => {
  return (
    <StyledHeader>  
      <Container>
        <HeaderInner>
          <Menu menuItems={items}/>
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5)
`

const HeaderInner = styled.div`
  padding: 12px 0;
`