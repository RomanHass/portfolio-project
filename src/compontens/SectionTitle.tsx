import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family:"'Playfair Display', sans-serif", weight: 700, color: `${theme.colors.accent}`, lineHeight: 1.2, Fmax: 48, Fmin: 40})};
  position: relative;
  margin-bottom: 85px;
  text-align: center;

  @media ${theme.media.md} {
    margin-bottom: 50px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    display: inline-block;
    border-radius: 2px;
    width: 100px;
    height: 4px;
    background: ${theme.colors.rarely};
  }
`

