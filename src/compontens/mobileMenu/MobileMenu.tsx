import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={!true}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={!true}>
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
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.sm} {
    display: block;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  width: 30px;
  height: 18px;
  z-index: 999;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: ${theme.colors.accent};

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: transparent;
    `}

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 10px;
      background-color: ${theme.colors.accent};
    }

    &:before {
      transform: translateY(-8px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &:after {
      transform: translateY(8px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  display: none;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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