import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";
import { Container } from "../Container";

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
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
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav``

const Link = styled.a`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  color: #fff;

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
    height: 3px;
    background-color: ${theme.colors.accent};
    transform: scale(0);
    cursor: pointer;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      color: ${theme.colors.rarely};
      transform: skewX(12deg) translateX(5px);
      
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`