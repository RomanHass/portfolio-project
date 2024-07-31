import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";
import { Container } from "../Container";

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
        <Container>
          <FlexWrapper justify={"flex-end"} gap={"50px"} align={"center"}>
            {props.menuItems.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Link href="">
                    {item}
                    <Mask>
                        <span>{item}</span>
                    </Mask>
                    <Mask>
                        <span>{item}</span>
                    </Mask>
                  </Link>
                </ListItem>
              )
            })}
          </FlexWrapper>
        </Container>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 15px 0;
  }
`

const Link = styled.a`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accent};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
  
const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -7px;
    right: -7px;
    z-index: 1;
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      color: #d60c0c;
      transform: skewX(12deg) translateX(5px);
      
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`