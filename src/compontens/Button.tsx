import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    display: inline-block;
    max-width: 115px;
    padding: 8px 24px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    border: 2px solid ${theme.colors.accent};
    border-radius: 8px;
    color: ${theme.colors.accent};
    background-color: transparent;

  &:hover {
    background-color: ${theme.colors.rarely};
    border: 2px solid transparent;
  }

  &:not(:last-child) {
    margin-right: 12px;;
  }
`