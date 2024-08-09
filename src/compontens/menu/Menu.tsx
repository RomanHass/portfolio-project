import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
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
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: block;
  @media ${theme.media.sm} {
    display: none;
  }

  ul {
    padding: 8px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
  }
`

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