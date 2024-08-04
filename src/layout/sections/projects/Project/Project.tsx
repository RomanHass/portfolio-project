import styled from "styled-components";
// import { FlexWrapper } from "../../../../compontens/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  title: string
  text: string
  src: string
  link: string
  reverse?: boolean; // Добавляем флаг reverse
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper reverse={props.reverse}>
        <StyledContent>
          <TitleThird>{props.title}</TitleThird>
          <Text>{props.text}</Text>
          <Link href={"#"}>{props.link}</Link>
        </StyledContent>
        <StyledImage>
          <Image src={props.src} alt="" />
        </StyledImage>
      </FlexWrapper>
    </StyledProject>
  );
};



const StyledProject = styled.div`
  max-width: 992px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

  &:not(:last-child) {
    margin-bottom: 80px;
  }
`

const FlexWrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`

const StyledContent = styled.div`
  max-width: 405px;
  margin: 0 auto;
`

const StyledImage = styled.div`
`

const TitleThird = styled.h3`
  margin-bottom: 24px;
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: ${theme.colors.accent};
`

const Text = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
`

const Link = styled.a`
  display: block;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.accent};
  max-width: 150px;
  border: 1px solid ${theme.colors.accent};
  border-radius: 24px;
  padding: 8px 24px;

  &:hover {
    border: 1px solid transparent;
    background-color: ${theme.colors.rarely};
  }
`

const Image = styled.img`
  display: block;
  width: 496px;
  height: 526px;
  object-fit: cover;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  ${StyledProject}:nth-child(odd) & {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
`