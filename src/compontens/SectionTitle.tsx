import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  margin-bottom: 85px;
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: ${theme.colors.accent};

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    display: inline-block;
    border-radius: 2px;
    width: 100px;
    height: 4px;
    background: ${theme.colors.rarely};
  }
`

